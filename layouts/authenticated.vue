<template>
  <div class="bg-[white]">
    <div>
      <Sidebar :sidebarOpen="sidebarOpen" :dropdownOpen="dropdownOpen" />
      <div class="lg:pl-72 bg-white">
        <Header :sidebarOpen="sidebarOpen" :dropdownOpen="dropdownOpen" />
        <!-- h-[calc(100vh-64px)] -->
        <main class="py-5 overflow-auto min-h-screen"><slot /></main>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineComponent, ref } from "vue";
import Sidebar from '@/components/Sidebar/index.vue';
import Header from "@/components/Header.vue";

defineComponent({
  name: "SidebarComponent",
});

let sidebarOpen = ref(false)
let dropdownOpen = ref(false)

</script>
