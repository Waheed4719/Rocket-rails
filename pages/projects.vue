<template>
  <div class="px-8">
    <h2 class="text-gray-700 font-semibold mb-1 text-md">🚀 Client Projects</h2>
    <div class="flex justify-between">
      <h1 class="text-3xl font-bold text-gray-700">Finance Mobile App</h1>
    </div>
  </div>
  <KanbanTabs />
  <div
    class="grid px-8"
    style="grid-template-columns: repeat(6, minmax(320px, 1fr))"
  ></div>
  <div
    class="grid px-8"
    style="grid-template-columns: repeat(6, minmax(320px, 1fr))"
  >
    <ClientOnly>
      <Column
        v-for="status in statuses"
        class="flex flex-col gap-2 p-2 rounded-md w-full"
        @dragstart="dragStart($event, status)"
        @drop="drop($event, status)"
        @dragover="allowDrop($event, status)"
        @dragleave="throttle(() => dragLeave(), 300)"
        :status="status"
        :key="status"
        :tasks="tasks?.filter((task) => task.status === status) || []"
        :hoveredStatus="hoveredStatus == status"
        :currentDraggedCard="currentDraggedCard"
        :placeholderCardHeight="placeholderCardHeight"
      >
      </Column>
    </ClientOnly>
  </div>
</template>
<script setup lang="ts">
import Column from "@/components/Kanban/Column.vue";
import { Task, TaskStatus, Project } from "types";

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
type ProjectResponse = {
  projects: Project[];
}

let projects = reactive<Project[]>([]);
let tasks = reactive<Task[]>([]);
let statuses = reactive<TaskStatus[]>([]);

const { data: tasksData } = useFetch<TaskResponse>("/api/tasks");
const { data: projectsData } = useFetch<ProjectResponse>("/api/projects");

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
async function drop(ev: DragEvent, status: TaskStatus) {
  ev.preventDefault();
  const taskId = ev.dataTransfer!.getData("text");
  const taskIndex = tasks?.findIndex((task) => task._id === taskId);
  const prevTask = { ...tasks[taskIndex] };
  if (taskIndex !== -1 && tasks && taskIndex !== undefined) {
    tasks[taskIndex].status = status;
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
    }),
  });
  if (!response.ok) {
    console.log("error");
    console.log(tasks[taskIndex], prevTask);
    setTimeout(() => {
      tasks[taskIndex].status = prevTask.status;
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
  currentDraggedCard.value = status
};
</script>




