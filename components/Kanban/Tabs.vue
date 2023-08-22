<template lang="">
  <div class="border-b-2 border-gray-100 dark:border-gray-100 px-8 mb-4">
    <ul
      class="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400"
    >
      <nuxt-link :to="`?tab=${tab.name}`" v-for="tab in tabs" :key="tab.name"
        ><li class="mr-2">
          <a
            href="#"
            class="whitespace-nowrap inline-flex items-center justify-center py-4 px-2 border-b-2 text-md rounded-t-lg group"
            :class="{
              'text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500 group':
                activeTab.name === tab.name,

              'border-transparent text-gray-400 hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500 group':
                activeTab.name !== tab.name,
            }"
          >
            <component
              class="w-4 h-4 mr-2"
              :class="{
                'w-4 h-4 mr-2 text-blue-600 dark:text-blue-500':
                  activeTab.name === tab.name,

                'text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300':
                  activeTab.name !== tab.name,
              }"
              :is="tab.icon"
            ></component>
            {{ tab.name }}
          </a>
        </li></nuxt-link
      >
      {{
        console.log(tabs)
      }}
    </ul>
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  activeTab: Tab;
  tabs: Tab[];
}>();

type Tab = {
  name: string;
  icon: any;
};

const emits = defineEmits<{
  (e: "handleTab", payload: Tab): void;
}>();

const handleTab = (tab: Tab) => {
  console.log(tab);
  emits("handleTab", tab);
};
</script>
<style lang=""></style>
