<template lang="">
  <div class="isolate flex flex-auto flex-col overflow-auto bg-white">
    <div class="sticky top-0 z-30 flex-none bg-white bbi bbt bby bdv sm:pr-8">
      <div class="grid grid-cols-7 text-sm leading-6 text-gray-500 sm:hidden">
        <button
          type="button"
          class="flex flex-col items-center asr aut"
          v-for="day in daysShort"
          :key="day"
        >
          {{ day }}
          <span class="ku flex og sj items-center justify-center font-semibold text-gray-900"
            >10</span
          >
        </button>
      </div>
      <div
        class="-mr-px hidden grid-cols-7 acb acf border-r-px aft text-sm leading-6 text-gray-500 sm:grid"
      >
        <div class="col-end-1 w-14"></div>
        <div
          class="flex items-center justify-center py-3"
          v-for="day in days"
          :key="day"
        >
          <span
            >{{ day }}
            <span class="items-center justify-center font-semibold text-gray-900">10</span></span
          >
        </div>
      </div>
    </div>
    <div
      class="flex max-w-full flex-none flex-col sm:max-w-none md:max-w-full w-full"
      style="width: 165%"
    >
      <div class="flex flex-auto">
        <div class="sticky left-0 z-10 w-14 flex-none bg-white bbt bcd"></div>
        <div class="grid flex-auto grid-cols-1 grid-rows-1">
          <div
            class="col-start-1 col-end-2 row-start-1 grid acc acf"
            style="grid-template-rows: repeat(48, minmax(3.5rem, 1fr))"
          >
            <div class="row-end-1 h-7"></div>
            <template v-for="time in times" :key="time">
              <div>
                <div
                  class="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 axp"
                >
                  {{ time }}
                </div>
              </div>
              <div></div>
            </template>
          </div>
          <div
            class="col-start-1 col-end-2 row-start-1 hidden grid-cols-7 grid-rows-1 acb acf sm:grid sm:grid-cols-7"
          >
            <div class="col-start-1 row-span-full"></div>
            <div class="col-start-2 row-span-full"></div>
            <div class="col-start-3 row-span-full"></div>
            <div class="col-start-4 row-span-full"></div>
            <div class="col-start-5 row-span-full"></div>
            <div class="col-start-6 row-span-full"></div>
            <div class="col-start-7 row-span-full"></div>
            <div class="col-start-8 row-span-full w-8"></div>
          </div>
          <ol
            class="col-start-1 col-end-2 row-start-1 grid grid-cols-1 cax sm:pr-8"
            style="
              grid-template-rows: 1.75rem repeat(288, minmax(0px, 1fr)) auto;
            "
          >
            <li
              v-for="(event, index) in events"
              :key="event.name"
              :style="isoStringToGridRow(event.startTime, event.endTime)"
              @click="console.log(event, formatTime(event.startTime))"
              class="relative mt-px flex sm:col-start-3"
            >
              <a
                href="#"
                class="bqg absolute al flex flex-col overflow-y-auto rounded-lg p-2 text-xs leading-5"
                :class="{
                  'bg-rose-100 hover:bg-rose-200': index % 2 === 0,
                  'bg-blue-100 hover:bg-blue-200': index % 2 !== 0,
                }"
                ><p class="el font-semibold axe">Breakfast</p>
                <p class="axc brh">
                  <time datetime="2022-01-12T06:00">6:00 AM</time>
                </p></a
              >
            </li>
          </ol>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import MiniCalendar from "./MiniCalendar.vue";
import useCalendar from "@/hooks/useCalendar";

const {
  state,
  goToNextMonth,
  goToPreviousMonth,
  goToToday,
  goToPreviousYear,
  goToNextYear,
} = useCalendar();
const {
  nav,
  currentMonth,
  currentYear,
  daysArray,
  previousMonthPaddingDays,
  daysInMonth,
  currentFormattedDate,
  currentWeekDays
} = state;
const times = [
  "12AM",
  "1AM",
  "2AM",
  "3AM",
  "4AM",
  "5AM",
  "6AM",
  "7AM",
  "8AM",
  "9AM",
  "10AM",
  "11AM",
  "12PM",
  "1PM",
  "2PM",
  "3PM",
  "4PM",
  "5PM",
  "6PM",
  "7PM",
  "8PM",
  "9PM",
  "10PM",
  "11PM",
];
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const daysShort = ["S", "M", "T", "W", "T", "F", "S"];

watchEffect(() => {
  console.log("currentWeekDays", state.currentWeekDays);
});

const formatTime = (date: string) => {
  const time = new Date(date);
  return time.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
    timeZone: "UTC",
  });
};

function isoStringToGridRow(isoStartTime: string, isoEndTime: string) {
  const start = new Date(isoStartTime);
  const end = new Date(isoEndTime);

  // Calculate minutes from 12:00 AM
  const startMinutesTotal = start.getUTCHours() * 60 + start.getUTCMinutes();
  const endMinutesTotal = end.getUTCHours() * 60 + end.getUTCMinutes();

  // Calculate row number and span
  const minutesPerRow = 60 / 12; // 12 rows per hour
  const startRow = Math.round(startMinutesTotal / minutesPerRow) + 2;
  const span = Math.round(
    (endMinutesTotal - startMinutesTotal) / minutesPerRow
  );

  // const startTimeFormatted = isoStringToFormattedTime(isoStartTime);
  // const endTimeFormatted = isoStringToFormattedTime(isoEndTime);

  return `grid-row: ${startRow} / span ${span}`;
}

// Example JSON array of events with start and end times
const events = [
  {
    name: "Breakfast",
    description: "",
    startTime: "2023-08-19T06:00:00Z",
    endTime: "2023-08-19T07:00:00Z",
  },
  {
    name: "Flight to Paris",
    description: "John F. Kennedy International Airport",
    startTime: "2023-08-19T07:30:00Z",
    endTime: "2023-08-19T10:00:00Z",
  },
  {
    name: "Sightseeing",
    description: "Eiffel Tower",
    startTime: "2023-08-19T11:00:00Z",
    endTime: "2023-08-19T13:00:00Z",
  },
];
</script>
<style scoped lang="css">
@import "~/assets/css/calendarWeek.css";
</style>
