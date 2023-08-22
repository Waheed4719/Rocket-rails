<template>
  <div class="mb-4 px-8">
    <BreadCrumbs :crumbs="breadCrumbs" />
    <div class="flex justify-between">
      <h1 class="text-3xl font-bold text-gray-700">🏄 Overview</h1>

      <div></div>
    </div>
  </div>
  <div class="h-[1px] w-full bg-gray-200 my-5"></div>
</template>

<script setup lang="ts">
const breadCrumbs = [{ name: "Dashboard", href: "/dashboard", disabled: true }];

definePageMeta({
  layout: "authenticated",
  key: "dashboard",
});

useSeoMeta({
  title: "Dashboard",
  description: "Dashboard",
  keywords: "Dashboard",
});

</script>
