<template lang="">
  <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
    <button
      type="button"
      class="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
      @click="handleModal('primary')"
    >
      Deactivate
    </button>
    <button
      type="button"
      class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
      @click="handleModal('secondary')"
      ref="cancelButtonRef"
    >
      Cancel
    </button>
  </div>
</template>
<script setup lang="ts">

const emits = defineEmits<{
  (e: "handlePrimaryAction" | "handleSecondaryAction"): boolean;
}>();

const handleModal = (type: "primary" | "secondary") => {
  if (type === "primary") {
    emits("handlePrimaryAction");
  } else {
    emits("handleSecondaryAction");
  }
};
</script>
<style lang=""></style>
