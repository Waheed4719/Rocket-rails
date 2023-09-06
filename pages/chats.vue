<template>
    <div class="mb-4 px-8">
      <BreadCrumbs :crumbs="breadCrumbs" />
      <div class="flex justify-between">
        <h1 class="text-2xl font-bold text-gray-700">🗨️ Chats</h1>
  
        <div></div>
      </div>
    </div>
    <div class="h-[1px] w-full bg-gray-200 mt-5"></div>
    <Chat />
  </template>
  <script setup lang="ts">
  const breadCrumbs = [{ name: "Chats", href: "/chats", disabled: true }];
  definePageMeta({
    layout: "authenticated",
    key: "chats",
  });

  useSeoMeta({
  title: "Chats",
  description: "Chats",
  keywords: "Chats",
});
  </script>
  