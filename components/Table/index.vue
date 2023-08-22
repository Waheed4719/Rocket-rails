<template>
  <div class="relative overflow-x-auto shadow-sm sm:rounded-lg border">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <TableHeader :data="TableHeaderData" @sort="sortTable" />
      <tbody>
        <slot name="body"></slot>
      </tbody>
    </table>
    <div
      v-if="!data.length"
      class="flex text-center items-center justify-center h-[53px]"
    >
      No Data Found!
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineComponent } from "vue";
import TableHeader from "./TableHeader.vue";
import TableRow from "./TableRow.vue";
import { TableHeaderData } from "../../constants/index.ts";

const slots = useSlots()
const hasSlot = (name) => {
    console.log(!!slots[name])
    return !!slots[name];
  }

defineComponent({
  name: "TableComponent",
  components: {
    TableHeader,
    TableRow,
  },
});

defineProps<{
  data: any[];
}>();

const sortTable = (key: string) => {
  console.log(key);
};
</script>
