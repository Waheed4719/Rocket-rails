<template>
  <div class="relative overflow-x-auto shadow-sm sm:rounded-lg border">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <slot />
    </table>
    <div
      v-if="!slotHasContent"
      class="flex text-center items-center justify-center h-[53px]"
    >
      No Data Found!
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineComponent } from "vue";
import { TableHeaderData } from "../../constants";

const slots = useSlots()
const slotHasContent = (name: string) => {
  return !!slots.default;
  }

defineComponent({
  name: "TableComponent",
});

defineProps<{
  data: any[];
}>();

const sortTable = (key: string) => {
  console.log(key);
};
</script>
