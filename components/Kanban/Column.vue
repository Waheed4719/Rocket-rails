<template lang="">
  <div>
    <div class="flex flex-col gap-2 bg-gray-100 p-2 rounded-md">
      <div
        :class="[
          getBgColorForCategory(status),
          'p-2 text-white rounded-md flex justify-between',
        ]"
      >
        <h3 class="font-semibold text-md">
          {{ status.substring(0, 1).toUpperCase() + status.substring(1) }}
        </h3>
        <div>
          <PlusIcon class="h-6" />
        </div>
      </div>
      <div class="flex flex-col gap-2">
        <template
          v-if="
            tasks?.filter((task) => task.status === status).length === 0 &&
            !hoveredStatus
          "
        >
          <p class="text-gray-400 text-sm p-4 text-center">
            No tasks in this status
          </p>
        </template>
        <template v-else>
          <Card
            v-for="task in tasks?.filter((task) => task.status === status)"
            :key="task._id"
            :task="task"
            @dragstart="(ev) => drag(ev, task._id)"
          />
        </template>
        <div
          ref="placeholder"
          v-show="hoveredStatus"
          :class="{ 'placeholder-height': hoveredStatus }"
          :style="draggedCardHeightStyle"
        ></div>
      </div>
      <div
        class="border-dashed rounded-md border-gray-300 p-2 items-center flex justify-center text-gray-700 font-semibold gap-2 border cursor-pointer"
      >
        <PlusIcon class="h-6 text-primaryColor" />
        <span>Add Task</span>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Task, TaskStatus } from "types";
import Card from "./Card.vue";
import { PlusIcon } from "@heroicons/vue/20/solid";

const props = defineProps<{
  status: string;
  tasks: Task[];
  hoveredStatus: boolean;
}>();

const draggedCardHeight = ref<number | null>(null);
const placeholder = ref<HTMLElement | null>(null);

const draggedCardHeightStyle = computed(() => {
  if (draggedCardHeight.value) {
    return `--dragged-card-height: ${draggedCardHeight.value}px`;
  }
  return "";
});

function getBgColorForCategory(status: string) {
  switch (status) {
    case "todo":
      return "bg-blue-500";
    case "in-progress":
      return "bg-yellow-500";
    case "completed":
      return "bg-green-500";
    case "review":
      return "bg-[#00a6da]";
    default:
      return "bg-orange-600";
  }
}

// Drag function
function drag(ev: DragEvent, taskId: number) {
  ev.dataTransfer!.setData("text", taskId.toString());
  const draggedCard = ev.target as HTMLElement;
  const cardHeight = draggedCard.clientHeight; // Get the card's height
  draggedCardHeight.value = cardHeight || 0; // Store the card's height
}
</script>
<style scoped>
.placeholder-height {
  min-height: var(
    --dragged-card-height,
    100px
  ); /* Set the default and minimum height */
  background-color: rgba(
    0,
    0,
    0,
    0.1
  ); /* Set the desired placeholder background color */
  border: 2px dashed #ccc; /* Add a dashed border for visual indication */
  border-radius: 8px;
}
</style>
