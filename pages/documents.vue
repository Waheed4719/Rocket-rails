<template>
  <div class="mb-4 mt-5 px-8">
    <BreadCrumbs :crumbs="breadCrumbs" />
    <div class="flex justify-between">
      <h1 class="text-2xl font-bold text-gray-700">📜 My Documents</h1>

      <div></div>
    </div>
  </div>
  <div class="h-[1px] w-full bg-gray-200 my-5"></div>
</template>
<script setup lang="ts">
const breadCrumbs = [{ name: "Documents", href: "/documents", disabled: true }];
definePageMeta({
  layout: "authenticated",
  key: "documents",
});

useSeoMeta({
  title: "Documents",
  description: "Documents",
  keywords: "Documents",
});
</script>
