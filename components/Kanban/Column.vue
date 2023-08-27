<template lang="">
  <div>
    <div class="flex flex-col bg-gray-100 p-2 rounded-md">
      <div
        class="p-2 text-gray-500 rounded-md flex justify-between"
      >
        <h3 class="font-semibold text-md flex gap-2 items-center">
          {{ status.substring(0, 1).toUpperCase() + status.substring(1) }}
          <span
            class="text-xs items-center w-5 h-5 justify-center flex bg-gray-200 rounded-md"
            >{{ tasks.length }}</span
          >
        </h3>
        <div>
          <PlusIcon class="h-6" />
        </div>
      </div>
      <div class="flex flex-col">
        <template v-if="tasks.length === 0 && !hoveredStatus">
          <p class="text-gray-400 text-sm p-4 text-center">No tasks</p>
        </template>
        <template v-else>
          <DropArea
            @onDrop="($event) => onDrop($event, 0)"
            :placeholderCardHeight="placeholderCardHeight"
          />
          <template v-for="(task, index) in tasks" :key="task._id">
            <TaskCard :task="task" @dragstart="(ev) => drag(ev, task._id)" />
            <DropArea
              @onDrop="($event) => onDrop($event, index + 1)"
              :placeholderCardHeight="placeholderCardHeight"
            />
          </template>
        </template>
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
import TaskCard from "./TaskCard.vue";
import DropArea from "./DropArea.vue";
import { PlusIcon } from "@heroicons/vue/20/solid";

const props = defineProps<{
  status: string;
  tasks: Task[];
  hoveredStatus: boolean;
  placeholderCardHeight: number;
  currentDraggedCard: TaskStatus | null;
}>();

const emits = defineEmits<{
  (
    e: "drop",
    event: DragEvent,
    status: TaskStatus,
    position: number,
    index: number
  ): void;
}>();

function getBgColorForCategory(status: string) {
  switch (status) {
    case "Todo":
      return "bg-blue-500";
    case "In Progress":
      return "bg-yellow-500";
    case "Completed":
      return "bg-green-500";
    case "Review":
      return "bg-[#00a6da]";
    case "Backlog":
      return "bg-orange-600";
    default:
      return "bg-orange-600";
  }
}

function onDrop(ev: DragEvent, index: number) {
  let prevItem = props.tasks[index - 1];
  let nextItem = props.tasks[index];
  const card = props.tasks.find(
    (item) => item._id == ev.dataTransfer!.getData("text")
  );
  let position = card?.position || 0;

  if (prevItem && nextItem) {
    position = (prevItem.position + nextItem.position) / 2;
  } else if (prevItem) {
    position = prevItem.position + prevItem.position / 2;
  } else if (nextItem) {
    position = nextItem.position / 2;
  }
  emits("drop", ev, props.status as TaskStatus, position, index);
}

function drag(ev: DragEvent, taskId: number) {
  ev.dataTransfer!.setData("text", taskId.toString());
}
</script>
<style scoped></style>
