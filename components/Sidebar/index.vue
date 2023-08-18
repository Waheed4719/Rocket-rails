<template>
  <transition leave-active-class="duration-300">
    <div v-show="sidebarOpen" class="md:hidden">
      <div class="fixed inset-0 flex z-40">
        <!--
              Off-canvas menu overlay, show/hide based on off-canvas menu state.
            -->
        <transition
          enter-active-class="transition-opacity ease-linear duration-300"
          enter-from-class="opacity-0"
          enter-to-class="opacity-100"
          leave-active-class="transition-opacity ease-linear duration-300"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <div v-show="sidebarOpen" class="fixed inset-0">
            <div class="absolute inset-0 bg-gray-600 opacity-75"></div>
          </div>
        </transition>
        <!--
              Off-canvas menu, show/hide based on off-canvas menu state.
            -->
        <transition
          enter-active-class="transition ease-in-out duration-300 transform"
          enter-from-class="-translate-x-full"
          enter-to-class="translate-x-0"
          leave-active-class="transition ease-in-out duration-300 transform"
          leave-from-class="translate-x-0"
          leave-to-class="-translate-x-full"
        >
          <div
            v-show="sidebarOpen"
            class="relative h-screen max-w-xs w-full pb-4 bg-[#f5f5f5]"
          >
            <div class="absolute top-0 right-0 -mr-14 p-1">
              <button
                v-show="sidebarOpen"
                @click="handleSidebar"
                class="flex items-center justify-center h-12 w-12 rounded-full focus:outline-none focus:bg-gray-600"
                aria-label="Close sidebar"
              >
                <svg
                  class="h-6 w-6 text-white"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div
              class="h-screen overflow-y-auto flex-1 flex flex-col px-6 gap-y-5"
            >
              <SidebarContent />
            </div>
          </div>
        </transition>
        <div class="flex-shrink-0 w-14">
          <!-- Dummy element to force sidebar to shrink to fit close icon -->
        </div>
      </div>
    </div>
  </transition>

  <!-- static sidebar -->
  <div
    class="fixed inset-y-0 z-20 lg:z-10 hidden lg:flex w-72 lg:flex-col h-screen"
  >
    <div
      class="hidden md:flex flex-1 flex-col gap-y-5 overflow-y-auto border-r afp bg-[#f5f5f5] px-6 pb-4"
    >
      <SidebarContent />
    </div>
  </div>
</template>
<script setup lang="ts">
import SidebarContent from "@/components/Sidebar/Content.vue";

defineProps<{
  sidebarOpen: boolean;
  dropdownOpen: boolean;
}>();

const emits = defineEmits<{
  (e: "handleSidebar"): void;
}>();

const handleSidebar = () => {
  emits("handleSidebar");
};
</script>
