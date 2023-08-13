<template>
  <div
    class="-translate-x-full lg:translate-x-0 fixed inset-y-0 lg:z-50 lg:flex w-72 lg:flex-col h-screen"
  >
    <div
      class="flex uo flex-col gap-y-5 overflow-y-auto border-r afp bg-[#f5f5f5] arf pb-4"
    >
      <SidebarContent />
    </div>
  </div>
</template>
<script setup lang="ts">
import SidebarContent from "@/components/Sidebar/Content.vue";
</script>
