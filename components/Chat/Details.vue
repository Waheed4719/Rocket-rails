<template lang="">
  <div class="flex flex-col w-[350px] bg-white border-px border-l">
    <div class="flex flex-col items-center pt-8 pb-4">
      <img
        :src="`https://i.pravatar.cc/150?u=1`"
        :alt="'profile picture'"
        class="w-20 h-20 rounded-full"
      />
      <div class="px-4 py-2 flex justify-center items-center flex-col">
        <h3 class="font-semibold text-gray-700 text-lg">Jane Doe</h3>
        <button class="text-gray-500 hover:text-gray-600 text-md">
          Joined 2 months ago
        </button>
      </div>
    </div>

    <div class="px-4 py-2 flex justify-between">
      <h3 class="font-semibold text-gray-700 text-lg">24 Participants</h3>
      <button class="text-gray-500 hover:text-gray-600 text-md">See all</button>
    </div>
    <ul class="">
      <li
        v-for="chat in chats.slice(0, 4)"
        :key="chat.id"
        class="flex items-center gap-3 py-2 px-4 hover:bg-gray-100 cursor-pointer"
      >
        <img
          :src="`https://i.pravatar.cc/150?u=${chat.id}`"
          :alt="chat.name"
          class="w-12 h-12 rounded-full"
        />
        <div class="flex flex-col">
          <h3 class="font-medium text-gray-700">{{ chat.name }}</h3>
          <p class="text-gray-500 text-sm truncate">{{ chat.lastMessage }}</p>
        </div>
      </li>
    </ul>

    <div class="px-4 py-2 flex justify-between">
      <h3 class="font-semibold text-gray-700 text-lg">Shared Media</h3>
      <button class="text-gray-500 hover:text-gray-600 text-md">See all</button>
    </div>
    <ul class="">
      <li
        v-for="(chat, index) in chats.slice(0, 4)"
        :key="chat.id"
        class="flex items-center gap-3 py-2 px-4 hover:bg-gray-100 cursor-pointer"
      >
        <div
          class="bg-slate-100 h-[50px] w-[50px] rounded-xl flex justify-center items-center border border-px"
        >
          <MusicalNoteIcon
            v-if="index % 2 == 0"
            class="w-5 h-5 text-gray-400"
          />
          <PhotoIcon v-else="index % 2 != 0" class="w-5 h-5 text-gray-400" />
        </div>
        <div class="flex flex-col">
          <h3 class="font-medium text-gray-700">{{ chat.name }}</h3>
          <p class="text-gray-500 text-sm truncate">1.8 Mb</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import {
  MusicalNoteIcon,
  PaperClipIcon,
  PhotoIcon,
} from "@heroicons/vue/24/outline";
type Chat = {
  id: number;
  name: string;
  lastMessage: string;
};
const chats: Chat[] = [
  {
    id: 1,
    name: "John Doe",
    lastMessage: "Hello, how are you?",
  },
  {
    id: 2,
    name: "Alice Smith",
    lastMessage: "Hey there! What's up?",
  },
  {
    id: 3,
    name: "Bob Johnson",
    lastMessage: "Good morning! Did you sleep well?",
  },
  {
    id: 4,
    name: "Emily Davis",
    lastMessage: "Hi, how's your day going?",
  },
  {
    id: 5,
    name: "Michael Wilson",
    lastMessage: "Hello! Have any plans for the weekend?",
  },
  {
    id: 6,
    name: "Olivia Brown",
    lastMessage: "Hey! Did you see that new movie?",
  },
  {
    id: 7,
    name: "David Lee",
    lastMessage: "Hi, I need your help with something.",
  },
  {
    id: 8,
    name: "Sophia Miller",
    lastMessage: "Good afternoon! How's work?",
  },
  {
    id: 9,
    name: "James White",
    lastMessage: "Hello! Long time no see.",
  },
  {
    id: 10,
    name: "Emma Garcia",
    lastMessage: "Hey, are you free later today?",
  },
];
</script>
<style lang=""></style>
