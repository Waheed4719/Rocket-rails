<template lang="">
  <section class="text-center gap-2 flex-col flex">
    <div class="flex justify-between">
      <div class="flex gap-2">
        <button @click="goToPreviousYear">
          <ChevronDoubleLeftIcon class="h-4 w-4" />
        </button>
        <button @click="goToPreviousMonth">
          <ChevronLeftIcon class="h-4 w-4" />
        </button>
      </div>

      <h2 class="avv awb axq">
        {{ currentMonth + ' ' + currentYear }}
      </h2>
      <div class="flex gap-2">
        <button @click="goToNextMonth">
          <ChevronRightIcon class="h-4 w-4" />
        </button>
        <button @click="goToNextYear">
          <ChevronDoubleRightIcon class="h-4 w-4" />
        </button>
      </div>
    </div>

    <div class="-mb-2 grid grid-cols-7 avx awk text-gray-500">
      <div v-for="dayObj in weekdays" :key="dayObj.id">{{ dayObj.value }}</div>
    </div>
    <div
      class="isolate kw grid grid-cols-7 gap-px ado bg-gray-200 avv bbd bbo bbz rounded-t-lg overflow-hidden">
      <button
        v-for="(dateObj, index) in daysArray"
        :key="dateObj.formattedDate"
        type="button"
        :class="generateDaysclass(index)"
        @click="handleDateChange(dateObj)">
        <time
          :dateTime="dateObj.formattedDate"
          :class="{
            'ajm awb bac gs ls nz sc yu justify-center adn':
              currentFormattedDate == dateObj.formattedDate,
            'gs ls nz sc yu justify-center adn':
              currentFormattedDate != dateObj.formattedDate,
          }">
          {{ dateObj.day }}
        </time>
      </button>
    </div>

    <div v-if="picker">
      <div class="bg-[#94a3b833] w-full h-[1px] my-2"></div>
      <div class="flex items-center justify-center py-1 -mt-2">
        <button
          @click="goToToday"
          class="text-gray-600 hover:text-gray-800 text-sm font-semibold">
          Today
        </button>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { defineComponent, toRefs, Fragment } from 'vue';
import useCalendar, { Day } from '@/hooks/useCalendar';
import {
  ChevronLeftIcon,
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ChevronRightIcon,
} from '@heroicons/vue/20/solid';

defineComponent({
  name: 'MiniCalendar',
  components: {
    ChevronLeftIcon,
    ChevronDoubleLeftIcon,
    ChevronDoubleRightIcon,
    ChevronRightIcon,
  },
});

const weekdays = [
  { id: 1, value: 'S' },
  { id: 2, value: 'M' },
  { id: 3, value: 'T' },
  { id: 4, value: 'W' },
  { id: 5, value: 'T' },
  { id: 6, value: 'F' },
  { id: 7, value: 'S' },
];
const {
  state,
  goToPreviousMonth,
  goToNextMonth,
  goToNextYear,
  goToPreviousYear,
  goToToday,
} = useCalendar();

const {
  previousMonthPaddingDays,
  daysInMonth,
  currentFormattedDate,
  currentMonth,
  currentYear,
  daysArray,
} = toRefs(state);

const emits = defineEmits<{
  (e: 'onDateChange', dateObj: Day): void;
}>();

const props = defineProps({
  picker: Boolean,
});

const generateDaysclass = (index: number) => {
  return `${
    index + 1 <= previousMonthPaddingDays.value ||
    index + 1 > previousMonthPaddingDays.value + daysInMonth.value
      ? 'bg-gray-50 axk py-1.5 bhx bmc'
      : ''
  }  ${
    index + 1 > previousMonthPaddingDays.value &&
    index + 1 <= previousMonthPaddingDays.value + daysInMonth.value
      ? 'alj axq py-1.5 bhx bmc'
      : ''
  }`;
};

const handleDateChange = (dateObj: Day) => {
  emits('onDateChange', dateObj);
};
</script>
<style lang=""></style>
