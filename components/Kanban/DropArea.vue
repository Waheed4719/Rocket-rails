<template lang="">
  <div
    :class="{
      'py-8 opacity-100 ': isVisible,
      'py-0 opacity-0': !isVisible,
      'relative before:bg-gray-300 h-2 transition-[padding,opacity,height] before:absolute before:inset-x-0 before:inset-y-2 before:rounded-md before:border-2 before:border-dashed before:border-gray-400': true,
    }"
    :style="
      isVisible && placeholderCardHeight
        ? { height: `${placeholderCardHeight}px` }
        : {}
    "
    @dragenter="showArea"
    @dragleave="hideArea"
    @drop="handleDrop"
  ></div>
</template>
<script setup lang="ts">
const props = defineProps<{
  placeholderCardHeight: number;
}>();
const isVisible = ref<Boolean>(false);

const emits = defineEmits<{
  (e: "onDrop", event: DragEvent): void;
}>();

const showArea = () => {
  isVisible.value = true;
};
const hideArea = () => {
  isVisible.value = false;
};
const handleDrop = (e: DragEvent) => {
  isVisible.value = false;
  emits("onDrop", e);
};
</script>
<style lang=""></style>
