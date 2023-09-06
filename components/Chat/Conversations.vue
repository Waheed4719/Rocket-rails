<template>
  <div class="flex flex-col border-r border-px">
    <div class="flex justify-between items-center p-4">
      <h1 class="text-gray-700 text-lg font-semibold">Messages</h1>
      <div class="flex gap-4">
        <PencilSquareIcon class="h-5 w-5 text-gray-400 hover:text-gray-500 cursor-pointer" />
        <MagnifyingGlassIcon class="h-5 w-5 text-gray-400 hover:text-gray-500 cursor-pointer" />
      </div>
    </div>
    <div class="py-2 px-4">
      <div class="flex justify-between items-start mb-4">
        <div>
          <div class="flex gap-2 items-center">
            <h3 class="text-gray-700 font-semibold text-lg">Online Now</h3>
            <span class="text-green-500 text-md">●</span>
          </div>
          <p class="text-gray-500 text-sm">You have 10 contacts online</p>
        </div>

        <button class="text-gray-500 hover:text-gray-600 text-md">
          See all
        </button>
      </div>

      <ul class="flex gap-4 mb-2">
        <li v-for="chat in chats.slice(0, 5)">
          <img
            :src="`https://i.pravatar.cc/150?u=${chat.id}`"
            :alt="chat.name"
            class="w-12 h-12 rounded-full"
          />
        </li>
      </ul>
    </div>

    <div class="px-4 mb-4">
      <h3 class="font-semibold text-gray-700 text-lg">Conversations</h3>
      <p class="text-gray-500 text-sm">You have 10 unread messages</p>
    </div>
    <ul class="overflow-y-scroll h-[520px]">
      <li
        v-for="chat in chats"
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
  </div>
</template>
<script setup lang="ts">
import {
  PencilSquareIcon,
  MagnifyingGlassIcon,
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
<style lang="scss"></style>
