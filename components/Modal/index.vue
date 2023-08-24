<template>
  <TransitionRoot as="template" :show="open">
    <Dialog as="div" class="relative z-10">
      <TransitionChild
        as="template"
        enter="ease-out duration-300"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in duration-200"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div
          class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        />
      </TransitionChild>

      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div
          class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
        >
          <TransitionChild
            as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leave-from="opacity-100 translate-y-0 sm:scale-100"
            leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div
              class="relative transform rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg overflow-visible"
            >
              <ModalContent>
                <slot />
              </ModalContent>
              <ModalFooter
                :primaryActionText="primaryActionText"
                :secondaryActionText="secondaryActionText"
                @handleModal="handleModal"
              />
            </div>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup lang="ts">
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import { ExclamationTriangleIcon } from "@heroicons/vue/24/outline";
import ModalContentVue from "./ModalContent.vue";
import { ModalActionType } from "types";

defineProps<{
  open: boolean;
  primaryActionText: string;
  secondaryActionText: string;
}>();

const emits = defineEmits<{
  (e: "handleModal", type: ModalActionType): boolean;
  (e: "onLoad"): HTMLElement | null;
}>();

const handleModal = (type: ModalActionType) => {
  emits("handleModal", type);
};

const closeModal = () => {
  emits("handleModal", "close");
};
</script>
