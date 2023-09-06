<template lang="">
  <div class="flex flex-1">
    <div class="flex flex-col w-full">
      <div class="flex gap-4 p-4 border-px border-b">
        <div class="flex justify-between w-full items-center">
          <div class="flex gap-4">
            <img
              :src="`https://i.pravatar.cc/150?u=1`"
              :alt="'John Doe'"
              class="w-12 h-12 rounded-full"
            />
            <div class="flex flex-col">
              <h3 class="font-semibold">John Doe</h3>
              <span class="text-gray-500">Last seen 2 days ago</span>
            </div>
          </div>
          <div class="flex gap-4">
            <PhoneIcon class="h-6 w-6 text-gray-400 hover:text-gray-500 cursor-pointer" />
            <VideoCameraIcon class="h-6 w-6 text-gray-400 hover:text-gray-500 cursor-pointer" />
            <ChatBubbleLeftRightIcon class="h-6 w-6 text-gray-400 hover:text-gray-500 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import {
  VideoCameraIcon,
  ChatBubbleLeftRightIcon,
  PhoneIcon
} from "@heroicons/vue/24/outline";
</script>
<style lang=""></style>
