<template>
  <div class="mb-4 px-8">
    <h2 class="text-gray-600 font-semibold mb-1 text-md">🚀 Client Projects</h2>
    <div class="flex justify-between">
      <h1 class="text-3xl font-bold">Finance Mobile App</h1>

      <div></div>
    </div>
  </div>
  <div class="h-[1px] w-full bg-gray-200 my-5"></div>
  <div
    class="grid gap-4 px-8"
    style="grid-template-columns: repeat(6, minmax(300px, 1fr))"
  >
    <Column
      v-for="category in categories"
      class="flex flex-col gap-2 p-2 rounded-md"
      @drop="drop($event, category)"
      @dragover="allowDrop($event, category)"
      @dragleave="throttle(() => dragLeave(), 300)"
      :category="category"
      :key="category"
      :tasks="tasks?.filter((task) => task.status === category) || []"
      :hoveredCategory="hoveredCategory == category"
    >
    </Column>
  </div>
</template>
<script setup lang="ts">
import Column from "@/components/Kanban/Column.vue";
import { Task, TaskStatus } from "types";

definePageMeta({
  layout: "authenticated",
});

useSeoMeta({
  title: "Projects",
  description: "Projects",
  keywords: "Projects",
});

type TaskResponse = {
  tasks: Task[];
  categories: TaskStatus[];
};

const { data } = useFetch<TaskResponse>("/api/tasks");

let tasks = computed(() => {
  return data.value?.tasks;
});

let categories = computed(() => {
  return data.value?.categories;
});

let hoveredCategory = ref<string | null>(null);

// Allow drop function
function allowDrop(ev: DragEvent, category: TaskStatus) {
  ev.preventDefault();
  hoveredCategory.value = category;
}

function dragLeave() {
  hoveredCategory.value = null;
}

// Drop function
function drop(ev: DragEvent, status: TaskStatus) {
  ev.preventDefault();
  const taskId = parseInt(ev.dataTransfer!.getData("text"));
  const taskIndex = tasks.value?.findIndex((task) => task.id === taskId);
  if (taskIndex !== -1 && tasks.value && taskIndex !== undefined) {
    tasks.value[taskIndex].status = status;
  }
  hoveredCategory.value = null;
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
</script>
