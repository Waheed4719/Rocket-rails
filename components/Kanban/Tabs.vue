<template lang="">
  <div class="border-b-2 border-gray-100 dark:border-gray-100 px-8 mb-4">
    <ul
      class="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400"
    >
    {{console.log(activeTab)}}
      <li v-for="tab in tabs" class="mr-2" :key="tab.name" @click="handleTab(tab)">
        <a
          href="#"
          class="whitespace-nowrap inline-flex items-center justify-center py-4 px-2 border-b-2 text-md  rounded-t-lg  group"
          :class="{
            'text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500 group':
              activeTab.name === tab.name,

              'border-transparent text-gray-400 hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500 group':
              activeTab.name !== tab.name,
          }"
        >
        {{console.log(activeTab.name === tab.name)}}
          <component
            class="w-4 h-4 mr-2"
            :class="{
              'w-4 h-4 mr-2 text-blue-600 dark:text-blue-500':
              activeTab.name === tab.name,

              'text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300' : activeTab.name !== tab.name,
            }"
            :is="tab.icon"
          ></component>
          {{ tab.name }}
        </a>
      </li>
      <!-- <li class="mr-2">
        <a
          href="#"
          class="inline-flex items-center justify-center p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg dark:text-blue-500 dark:border-blue-500 group"
          aria-current="page"
        >
          <svg
            class="w-4 h-4 mr-2 text-blue-600 dark:text-blue-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 18"
          >
            <path
              d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z"
            />
          </svg>
          Dashboard
        </a>
      </li>
    -->
    </ul>
  </div>
</template>
<script setup lang="ts">
import {
  CalendarDaysIcon,
  RectangleStackIcon,
} from "@heroicons/vue/24/solid";
type Tab = {
    name: string;
    icon: any;
}

const tabs: Tab[] = [
  {
    name: "By Status",
    icon: RectangleStackIcon,
  },
  {
    name: "Due Tasks",
    icon: CalendarDaysIcon,
  },
];
const activeTab = ref<Tab>(tabs[0]);

const handleTab = (tab: Tab) => {
    console.log(tab)
    activeTab.value = tab;
}
</script>
<style lang=""></style>
