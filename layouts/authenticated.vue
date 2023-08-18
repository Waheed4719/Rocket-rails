<template>
  <div class="bg-[white]">
    <Sidebar :sidebarOpen="sidebarOpen" :dropdownOpen="dropdownOpen" @handleSidebar="handleSidebar"/>
    <div class="lg:pl-72 bg-white">
      <Header :sidebarOpen="sidebarOpen" :dropdownOpen="dropdownOpen" @handleSidebar="handleSidebar"/>
      <!-- h-[calc(100vh-64px)] -->
      <main class="py-5 overflow-auto min-h-screen">
        <slot :key="$route.path" />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineComponent, ref } from "vue";
import Sidebar from "@/components/Sidebar/index.vue";
import Header from "@/components/Header.vue";

defineComponent({
  name: "SidebarComponent",
});

let sidebarOpen = ref(false);
let dropdownOpen = ref(false);

const handleSidebar = () => {
  sidebarOpen.value = !sidebarOpen.value;
};

watchEffect(()=>{
  console.log('sidebarOpen', sidebarOpen.value)
})
</script>
