<template lang="">
  <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row sm:px-6 border-px border-b">
    <DialogTitle class="font-medium">
      {{ title ?? "No Title" }}
    </DialogTitle>
  </div>
</template>
<script setup lang="ts">
import { ModalActionType } from "types";
import { DialogTitle } from "@headlessui/vue";
defineProps<{
  title: string;
}>();

const emits = defineEmits<{
  (e: "handleModal", type: ModalActionType): boolean;
}>();

const handleModal = (type: ModalActionType) => {
  emits("handleModal", type);
};
</script>
<style lang=""></style>
