<template>
  <div
    class="flex flex-col p-4 gap-2 bg-white shadow-md rounded-lg"
    draggable="true"
  >
    <div class="flex flex-col">
      <h5 class="text-gray-400 text-xs font-semibold">{{ task.category }}</h5>
      <h3 class="font-bold text-gray-600">{{ task.title }}</h3>
    </div>

    <p class="text-sm mb-2 text-gray-400 font-regular">
      {{ task.description }}
    </p>

    <div class="flex gap-2 items-center">
      <div class="rounded-full bg-gray-300 h-6 w-6 overflow-hidden">
        <img
          class="ob se adn bg-gray-50 object-cover w-full h-full rounded-full"
          src="https://flowbite.com/docs/images/people/profile-picture-4.jpg"
          alt=""
        />
      </div>
      <span
        class="py-1 px-2 bg-[#fcefde] text-[#f2c37c] rounded-md text-xs font-medium"
        >{{ task.priority }}</span
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
import { Task } from "../../types/index";
import { ChatBubbleLeftRightIcon, LinkIcon } from "@heroicons/vue/24/outline";

defineProps<{
  task: Task;
}>();
</script>
