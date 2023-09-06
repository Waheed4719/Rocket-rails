<template>
  <div class="mb-4 px-8">
    <BreadCrumbs :crumbs="breadCrumbs" />
    <div class="flex justify-between">
      <h1 class="text-2xl font-bold text-gray-700">🗓️ Daily Events</h1>
      <div></div>
    </div>
  </div>
  <div class="h-[1px] w-full bg-gray-200 my-5"></div>
  <div class="px-8">
    <Calendar />
  </div>
</template>
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

const breadCrumbs = [{ name: "Events", href: "/events", disabled: true }];

const handleAddEvent = () => {};
</script>
