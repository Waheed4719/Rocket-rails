<template>
  <div
    class="grid gap-4 items-start"
    style="grid-template-columns: repeat(6, minmax(300px, 1fr))"
  >
    <div
      v-for="category in categories"
      class="flex flex-col gap-2 bg-gray-100 p-2 rounded-md"
      @drop="drop($event, category)"
      @dragover="allowDrop"
    >
      <div
        :class="[
          getBgColorForCategory(category),
          'p-2 text-white rounded-md flex justify-between',
        ]"
      >
        <h3 class="font-medium text-md">
          {{ category.substring(0, 1).toUpperCase() + category.substring(1) }}
        </h3>
        <div><PlusIcon class="h-6" /></div>
      </div>
      <div class="flex flex-col gap-2 ">
        <template
          v-if="tasks?.filter((task) => task.status === category).length === 0"
        >
          <p class="text-gray-400 text-sm">No tasks in this category</p>
        </template>
        <template v-else>
          <Card
            v-for="task in tasks?.filter((task) => task.status === category)"
            :key="task.id"
            :task="task"
            @dragstart="(ev) => drag(ev, task.id)"
          />
        </template>
      </div>
      <div
        class="border-dashed rounded-md border-gray-300 p-2 items-center flex justify-center text-black font-semibold gap-2 border cursor-pointer"
      >
        <PlusIcon class="h-6 text-primaryColor" />
        <span>Add Task</span>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { PlusIcon } from "@heroicons/vue/20/solid";
import Card from "@/components/Kanban/Card.vue";
import { Task, TaskStatus } from "../types";

type TaskResponse = {
  tasks: Task[];
  categories: TaskStatus[];
};

const { data } = useFetch<TaskResponse>("http://localhost:3000/api/tasks");

let tasks = computed(() => {
  return data.value?.tasks;
});

let categories = computed(() => {
  return data.value?.categories;
});

// Allow drop function
function allowDrop(ev: DragEvent) {
  ev.preventDefault();
}

// Drag function
function drag(ev: DragEvent, taskId: number) {
  ev.dataTransfer!.setData("text", taskId.toString());
}

// Drop function
function drop(ev: DragEvent, status: TaskStatus) {
  ev.preventDefault();
  const taskId = parseInt(ev.dataTransfer!.getData("text"));

  const taskIndex = tasks.value?.findIndex((task) => task.id === taskId);

  if (taskIndex !== -1 && tasks.value && taskIndex !== undefined) {
    tasks.value[taskIndex].status = status;
  }
}

function getBgColorForCategory(status: string) {
  switch (status) {
    case "todo":
      return "bg-blue-500";
    case "in-progress":
      return "bg-yellow-500";
    case "completed":
      return "bg-green-500";
    default:
      return "bg-orange-600";
  }
}
</script>
