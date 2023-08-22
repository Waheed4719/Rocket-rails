<template>
    <div
      class="flex flex-col p-4 gap-2 bg-white shadow-md rounded-lg border"
      draggable="true"
    >
      <div>
        <h5 class="text-gray-400 text-xs font-semibold">{{project.category}}</h5>
        <h3 class="font-bold text-gray-600">{{project.title}}</h3>
      </div>
  
      <p class="text-sm my-1 text-gray-400 font-medium">
        {{project.description}}
      </p>
  
      <div class="flex gap-2 items-center">
        <span
          class="py-1 px-2 bg-[#fcefde] text-[#f2c37c] rounded-md text-xs font-semibold"
          >{{ 'High' }}</span
        >

        <span
          class="py-1 px-2 bg-[#fcefde] text-[#f2c37c] rounded-md text-xs font-semibold"
          >{{ 'In Progress' }}</span
        >
      </div>
      <div class="h-[1px] w-full bg-gray-100 my-1"></div>
      <div class="flex items-center gap-3 text-xs text-gray-400 font-semibold">
        <div class="flex gap-2">
          <ChatBubbleLeftRightIcon class="h-4 text-gray-400" />
          <span class="">2</span>
        </div>
        <div class="flex gap-2">
          <LinkIcon class="h-4 text-gray-400" /> <span class="">1</span>
        </div>
      </div>
    </div>
  </template>
  <script setup lang="ts">
  import { Project } from "../../types/index";
  import { ChatBubbleLeftRightIcon, LinkIcon } from "@heroicons/vue/24/outline";
  
  defineProps<{
    project: Project;
  }>();
  
  // const emits = defineEmits<{
  //   (e: "drag"): void;
  // }>();
  
  // const drag = (ev: DragEvent, taskId: number) => {
  //   ev.dataTransfer!.setData("text", taskId.toString());
  //   emits("drag");
  // };
  </script>
  