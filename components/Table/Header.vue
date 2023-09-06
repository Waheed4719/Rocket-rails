<template lang="">
  <thead
    class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b"
  >
    <tr>
      <slot />
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
</script>
<style lang=""></style>
