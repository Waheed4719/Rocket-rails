<template lang="">
  <Modal
    :open="open"
    @handleModal="handleModal"
    :primaryActionText="'Deactivate'"
    :secondaryActionText="'Cancel'"
  >
    <div class="sm:flex sm:items-start">
      <div
        class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10"
      >
        <ExclamationTriangleIcon
          class="h-6 w-6 text-red-600"
          aria-hidden="true"
        />
      </div>
      <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
        <DialogTitle
          as="h3"
          class="text-base font-semibold leading-6 text-gray-900"
          >{{ confirmTitle ?? "Deactivate account" }}</DialogTitle
        >
        <div class="mt-2">
          <p class="text-sm text-gray-500">
            {{
              confirmText ??
              "Are you sure you want to deactivate your account? All of your data will be permanently removed. This action cannot be undone."
            }}
          </p>
        </div>
      </div>
    </div>
  </Modal>
</template>
<script setup lang="ts">
import { DialogTitle } from "@headlessui/vue";
import { ExclamationTriangleIcon } from "@heroicons/vue/24/outline";
import { ModalActionType } from "types";
defineProps<{
  open: Boolean;
  confirmTitle: string
  confirmText: string;
}>();

const emits = defineEmits<{
  (e: "handleModal", type: ModalActionType): boolean;
}>();

const handleModal = (type: "primary" | "secondary") => {
  console.log(type);
  emits("handleModal", type);
};
</script>
<style lang=""></style>
