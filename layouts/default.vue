<template>
  <div class="bg-[white]">
    <div>
      <Sidebar />
      <div class="lg:pl-72 bg-white">
        <!-- <Header /> -->
        <!-- h-[calc(100vh-64px)] -->
        <main class="py-5 px-5 overflow-auto min-h-screen"><slot /></main>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineComponent, ref } from "vue";
// import Header from "@/components/Header.vue";

defineComponent({
  name: "SidebarComponent",
});

</script>
