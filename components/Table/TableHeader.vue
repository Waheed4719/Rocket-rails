<template lang="">
  <thead
    class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b"
  >
    <tr>
      <td
        v-for="header in data"
        v-bind:key="header.id"
        scope="col"
        :class="[
          {
            'min-w-[300px]': header.key === 'description',
            'w-[200px]': header.key === 'name' || header.key === 'editions',
            'w-[100px]': header.key === 'id',
            'w-[200px] min-w-[200px] whitespace-nowrap':
              header.key === 'timeOfCapture',
          },
          'px-6 py-3 font-semibold tracking-wide cursor-pointer',
        ]"
        @click="sortTable(header.key)"
      >
        <div class="flex items-center">
          {{ header.name }}
          <a v-if="header.sortable" href="#"><SortIcon /></a>
        </div>
      </td>
    </tr>
  </thead>
</template>
<script setup lang="ts">
import { ref } from "vue";
import SortIcon from "../Icon/SortIcon.vue";

defineComponent({
  name: "TableHeader",
  components: {
    SortIcon,
  },
});

defineProps<{
  data: any[];
}>();

const sortKey = ref("");
const sortOrder = ref("ASC");
</script>
<style lang=""></style>
