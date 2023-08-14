<template>
  <div
    class="-translate-x-full lg:translate-x-0 fixed inset-y-0 lg:z-10 lg:flex w-72 lg:flex-col h-screen"
  >
    <div
      class="flex flex-1 flex-col gap-y-5 overflow-y-auto border-r afp bg-[#f5f5f5] px-6 pb-4"
    >
      <SidebarContent />
    </div>
  </div>
</template>
<script setup lang="ts">
import SidebarContent from "@/components/Sidebar/Content.vue";
</script>
