<template lang="">
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
        >Deactivate account</DialogTitle
      >
      <div class="mt-2">
        <p class="text-sm text-gray-500">
          Are you sure you want to deactivate your account? All of your data
          will be permanently removed. This action cannot be undone.
        </p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { DialogTitle } from "@headlessui/vue";
import { ExclamationTriangleIcon } from "@heroicons/vue/24/outline";
</script>
<style lang=""></style>
