<template>
  <div class="px-8">
    <BreadCrumbs :crumbs="breadCrumbs" />
    <div class="flex justify-between">
      <h1 class="text-3xl font-bold text-gray-700">Project Nero</h1>
    </div>
  </div>
  <ClientOnly>
    <KanbanTabs :activeTab="activeTab" :tabs="tabs" />
  </ClientOnly>
  <div class="min-w-fit w-full">
    <div
      v-if="activeTab.name === 'Kanban'"
      class="grid px-8 gap-3"
      style="grid-template-columns: repeat(5, minmax(320px, 1fr))"
    >
      <ClientOnly>
        <Column
          v-for="status in statuses"
          class="flex flex-col rounded-md w-full"
          @dragstart="dragStart($event, status)"
          @drop="($event: DragEvent, status: TaskStatus, position: number, index: number) => drop($event, status, position, index)"
          @dragover="allowDrop($event, status)"
          @dragleave="throttle(() => dragLeave(), 300)"
          :status="status"
          :key="status"
          :tasks="tasks?.filter((task) => task.status === status) || []"
          :hoveredStatus="hoveredStatus == status"
          :currentDraggedCard="currentDraggedCard"
          :placeholderCardHeight="placeholderCardHeight"
      /></ClientOnly>
    </div>
    <div class="px-8" v-if="activeTab.name === 'List View'">
      <Table :data="tasks" />
    </div>
  </div>
</template>
<script setup lang="ts">
import Column from "@/components/Kanban/Column.vue";
import { Task, TaskStatus } from "types";
import { RectangleStackIcon, ListBulletIcon } from "@heroicons/vue/24/solid";
import KanbanTabs from "@/components/Kanban/Tabs.vue";
import Table from "@/components/Kanban/Table.vue";
const { id: projectId } = useRoute().params;

const breadCrumbs = [
  { name: "Projects", href: "/projects", disabled: false },
  { name: "Project Nero", href: `/projects/${projectId}`, disabled: true },
];

definePageMeta({
  layout: "authenticated",
  key: "projects",
});

useSeoMeta({
  title: "Projects",
  description: "Projects",
  keywords: "Projects",
});

type TaskResponse = {
  tasks: Task[];
  statuses: TaskStatus[];
};
type Tab = {
  name: string;
  icon: any;
};
const tabs: Tab[] = [
  {
    name: "Kanban",
    icon: RectangleStackIcon,
  },
  {
    name: "List View",
    icon: ListBulletIcon,
  },
];

const route = useRoute();

let tasks = reactive<Task[]>([]);
let statuses = reactive<TaskStatus[]>([]);
const activeTab = ref<Tab>(tabs[0]);

watchEffect(() => {
  if (route && route.query && route.query.tab) {
    const tabName = route.query.tab as string;
    const tab = tabs.find((tab) => tab.name === tabName);
    if (tab) {
      activeTab.value = tab;
    }
  }
});

const { data: tasksData } = useFetch<TaskResponse>(
  "/api/tasks?projectId=" + projectId
);

watchEffect(() => {
  if (tasksData.value) {
    tasks.splice(0, tasks.length, ...(tasksData.value?.tasks || []));
    statuses.splice(0, statuses.length, ...(tasksData.value?.statuses || []));
  }
});

let hoveredStatus = ref<string | null>(null);

// Allow drop function
function allowDrop(ev: DragEvent, status: TaskStatus) {
  ev.preventDefault();
  hoveredStatus.value = status;
}

function dragLeave() {
  hoveredStatus.value = null;
}

// Drop function
async function drop(
  ev: DragEvent,
  status: TaskStatus,
  position: number,
  index: number
) {
  ev.preventDefault();
  const taskId = ev.dataTransfer!.getData("text");
  const taskIndex = tasks?.findIndex((task) => task._id === taskId);
  const prevTask = { ...tasks[taskIndex] };
  const prevTasks = [...tasks];
  if (taskIndex !== -1 && tasks && taskIndex !== undefined) {
    tasks[taskIndex].status = status;
    tasks[taskIndex].position = position;
    tasks.sort((a, b) => a.position - b.position);
  }
  hoveredStatus.value = null;

  // make an api call
  const response = await fetch("/api/tasks", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      taskId,
      status,
      position,
    }),
  });
  if (!response.ok) {
    console.log("error");
    setTimeout(() => {
      const taskIndex = tasks.findIndex((task) => task._id === taskId);
      tasks[taskIndex]!.status = prevTask.status;
      tasks[taskIndex]!.position = prevTask.position;
      tasks.sort((a, b) => a.position - b.position);
    }, 1500);
  }
}

let isThrottled = false;

function throttle(fn: Function, delay: number) {
  if (!isThrottled) {
    fn();
    isThrottled = true;
    setTimeout(() => {
      isThrottled = false;
    }, delay);
  }
}
const placeholderCardHeight = ref<number>(0);
const currentDraggedCard = ref<TaskStatus | null>(null);
const dragStart = (ev: DragEvent, status: TaskStatus) => {
  const targetElement = ev.target as HTMLElement; // Cast the target to HTMLElement
  const rect = targetElement.getBoundingClientRect();
  placeholderCardHeight.value = rect.height;
  currentDraggedCard.value = status;
};
</script>
