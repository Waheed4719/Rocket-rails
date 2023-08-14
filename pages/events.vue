<script setup lang="ts">
definePageMeta({
  layout: "authenticated",
  key: "events",
});
useSeoMeta({
  title: "Events",
  description: "Events",
  keywords: "Events",
});


</script>
<template>
  <div class="mb-4 px-8">
    <h2 class="text-gray-600 font-semibold mb-1 text-md">🗓️ Events</h2>
    <div class="flex justify-between">
      <h1 class="text-3xl font-bold">Daily Events</h1>
      <div></div>
    </div>
  </div>
  <div class="h-[1px] w-full bg-gray-200 my-5"></div>
  <div class="px-8">
    <Calendar />
  </div>
  <div id="modal-container"></div>
</template>
