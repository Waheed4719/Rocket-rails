<template lang="">
  <div ref="pickerComponentRef" class="w-full">
    <div class="relative min-w-[350px]">
      <div
        class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none"
      >
        <CalendarDaysIcon class="h-5 w-5 text-gray-400" />
      </div>
      <input
        :value="selectedDate?.formattedDateWithWeekday"
        @focus="pickerOpen = true"
        type="text"
        class="bg-gray-50 font-medium h-[40px] border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 block w-full pl-[45px] p-2.5 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Select date"
      />
    </div>
    {{console.log(pickerOpen)}}
    <TransitionRoot
      :show="pickerOpen"
      class="relative z-10 w-full sm:px-0  bg-white dark:bg-gray-800 rounded-md shadow-lg overflow-visible"
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0 scale-95 -translate-y-[20px]"
      enterTo="transform opacity-100 scale-100  translate-y-0"
      leave="transition ease-in duration-100"
      leaveFrom="transform opacity-100 scale-100 translate-y-0"
      leaveTo="transform opacity-0 scale-95 -translate-y-[20px]"
    >
      <div class="px-4 pt-4 pb-2 mt-2 shadow-lg rounded-lg border absolute w-full bg-white">
        <MiniCalendar @onDateChange="handleDateChange" :picker="true" />
      </div>
    </TransitionRoot>
  </div>
</template>
<script setup lang="ts">
import { defineComponent, ref } from "vue";
import { Day } from "@/hooks/useCalendar";
import MiniCalendar from "./MiniCalendar.vue";
import { CalendarDaysIcon } from "@heroicons/vue/20/solid";
import ClickAwayComponent from "../ClickAwayComponent";
import { TransitionRoot } from "@headlessui/vue";

defineComponent({
  name: "CalendarPicker",
  components: {
    CalendarDaysIcon,
    TransitionRoot,
    MiniCalendar,
  },
});


const pickerOpen = ref(false);
const selectedDate = ref<Day | null>(null);
const pickerComponentRef = ref(null);
const firstStart = ref(true)

const handleDateChange = (dateObj: Day) => {
  console.log(dateObj)
  selectedDate.value = dateObj;
  pickerOpen.value = false;
};

ClickAwayComponent(pickerComponentRef, () => {
  if(!firstStart.value){
    pickerOpen.value = false;
  }
  else{
    firstStart.value = false
  }
});
</script>
<style lang="css"></style>
