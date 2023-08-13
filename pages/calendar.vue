<script setup lang="ts">
definePageMeta({
  layout: 'authenticated'
})
</script>
<template>
  <div class="mb-4 px-8">
    <h2 class="text-gray-600 font-semibold mb-1 text-md">🗓️ Calendar</h2>
    <div class="flex justify-between">
      <h1 class="text-3xl font-bold">Daily Events</h1>
      <div></div>
    </div>
  </div>
  <div class="h-[1px] w-full bg-gray-200 my-5"></div>
  <div class="px-8">
    <Calendar />
  </div>
</template>
