<template lang="">
  <button :class="class">
    <slot></slot>
  </button>
</template>
<script setup lang="ts">
defineProps({
  class: {
    type: String,
  },
});
</script>
