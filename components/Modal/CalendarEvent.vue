<template lang="">
  <Modal
    :open="open"
    @handleModal="handleEventModal"
    :primaryActionText="'Create Event'"
    :secondaryActionText="'Cancel'"
  >
    <div class="flex flex-col gap-4">
      <div class="w-full max-w-20">
        <label class="block text-sm font-semibold leading-6 text-gray-900"
          >Title</label
        >
        <input
          type="text"
          class="bg-gray-50 font-medium h-[40px] border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 block w-full pl-4 p-2.5 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Event title"
        />
      </div>

      <div class="w-full max-w-20">
        <label class="block text-sm font-semibold leading-6 text-gray-900"
          >Description</label
        >
        <textarea
          rows="4"
          type="text"
          class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Event title"
        />
      </div>

      <div class="w-full max-w-20">
        <label class="block text-sm font-semibold leading-6 text-gray-900"
          >Pick Date</label
        >
        <DatePicker />
      </div>
      <div class="w-full max-w-20">
        <div class="w-full max-w-20 flex items-center gap-2">
          <div
            v-for="(num, index) in 4"
            :class="{
              'bg-red-300 ': index == 0,
              'bg-blue-300': index == 1,
              'bg-yellow-300 ': index == 2,
              'bg-indigo-300': index == 3,
              'h-5 w-5 rounded-full transition duration-150 ring-transparent ring-2 hover:ring-gray-500': true,
            }"
          />
        </div>
      </div>
    </div>
  </Modal>
</template>
<script setup lang="ts">
import DatePicker from "@/components/Calendar/DatePicker.vue";
defineProps<{
  open: boolean;
}>();

const emits = defineEmits<{
  (e: "handleEventModal"): boolean;
}>();

const handleEventModal = () => {
  emits("handleEventModal");
};
</script>
<style lang=""></style>
