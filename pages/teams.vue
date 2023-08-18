<template>
  <div class="mb-4 px-8">
    <h2 class="text-gray-600 font-semibold mb-1 text-md">🫂 Teams</h2>
    <div class="flex justify-between">
      <h1 class="text-3xl font-bold">My Teams</h1>

      <div></div>
    </div>
  </div>
  <div class="h-[1px] w-full bg-gray-200 my-5"></div>
</template>
<script setup lang="ts">
definePageMeta({
  layout: "authenticated",
  key: "teams",
});

useSeoMeta({
  title: "Teams",
  description: "Teams",
  keywords: "Teams",
});
</script>
