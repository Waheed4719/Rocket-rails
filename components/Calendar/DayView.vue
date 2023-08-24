<template lang="">
  <div class="flex-col flex gap-4">

    <div class="h-[768px]">
      <div class="flex flex-col h-full">
       
        <div class="isolate flex ui adb bg-white">
          <div class="overflow-auto flex-col flex-1">
            <div
              class="sticky top-0 z-10 grid flex-0 grid-cols-7 gap-x-0 gap-y-0 bg-white text-xs leading-[1rem] text-gray-500 bbd bbo bbt bdq clg"
            >
              <button type="button" class="flex flex-col items-center ase aus">
                <span>W</span>
                <span
                  class="la flex ob se items-center justify-center rounded-full avt font-semibold text-blue-900"
                >
                  19
                </span>
              </button>
              <button type="button" class="flex flex-col items-center ase aus">
                <span>T</span>
                <span
                  class="la flex ob se items-center justify-center rounded-full avt font-semibold text-blue-500"
                >
                  20
                </span>
              </button>
              <button type="button" class="flex flex-col items-center ase aus">
                <span>F</span>
                <span
                  class="la flex ob se items-center justify-center rounded-full avt font-semibold text-blue-900"
                >
                  21
                </span>
              </button>
              <button type="button" class="flex flex-col items-center ase aus">
                <span>S</span>
                <span
                  class="la flex ob se items-center justify-center rounded-full aiu avt font-semibold text-white"
                >
                  22
                </span>
              </button>
              <button type="button" class="flex flex-col items-center ase aus">
                <span>S</span>
                <span
                  class="la flex ob se items-center justify-center rounded-full avt font-semibold text-blue-900"
                >
                  23
                </span>
              </button>
              <button type="button" class="flex flex-col items-center ase aus">
                <span>M</span>
                <span
                  class="la flex ob se items-center justify-center rounded-full avt font-semibold text-blue-900"
                >
                  24
                </span>
              </button>
              <button type="button" class="flex flex-col items-center ase aus">
                <span>T</span>
                <span
                  class="la flex ob se items-center justify-center rounded-full avt font-semibold text-blue-900"
                >
                  25
                </span>
              </button>
            </div>
            <div class="flex ti ui">
              <div class="rh flex-0 bg-white bbo bby"></div>
              <div class="grid ui yb yi">
                <div
                  class="et fc fg grid abx aca"
                  style="grid-template-rows: repeat(48, minmax(3.5rem, 1fr))"
                >
                  <div class="fh h-7"></div>

                  <template v-for="(time, index) in times" :key="time">
                    <div
                      class="sticky cb hl iq rh atv avh text-xs leading-[1rem] awj text-blue-gray-500"
                    >
                      {{ time }}
                    </div>

                    <div v-if="index !== times.length - 1"></div>
                  </template>
                </div>
                <ol
                  class="et fc fg grid"
                  style="
                    grid-template-rows: 1.75rem repeat(288, minmax(0px, 1fr)) auto;
                    grid-template-columns: repeat(1, minmax(0, 1fr));
                  "
                >
                 
                  <li
                    class="ab ll flex"
                    v-for="(event, index) in events"
                    :key="event.name"
                    :style="isoStringToGridRow(event.startTime, event.endTime)"
                    @click="console.log(event, formatTime(event.startTime))"
                  >
                    <a
                      class="aa ag flex flex-col ade rounded-lg aql text-xs leading-[1rem] awj"
                      :class="{
                        'bg-rose-100 hover:bg-rose-200': index % 2 === 0,
                        'bg-blue-100 hover:bg-blue-200': index % 2 !== 0,
                      }"
                    >
                      <p class="eg font-semibold ayd">{{ event.name }}</p>
                      <p v-if="event.description" class="eg ayb bro">
                        {{ event.description }}
                      </p>
                      <p class="ayb bro">
                        <time dateTime="2022-01-22T11:00">{{
                          formatTime(event.startTime)
                        }}</time>
                      </p>
                    </a>
                  </li>
                </ol>
              </div>
            </div>
          </div>
          <div
            class="md:block pt-10 pb-10 pl-8 pr-8 border-t border-l border-r border-b border-opacity-100 max-w-[28rem] w-1/2 hidden"
          >
         
            <MiniCalendar />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import MiniCalendar from './MiniCalendar.vue';
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
const formatTime = (date: string) => {
  const time = new Date(date);
  return time.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
    timeZone: 'UTC'
  });
};

function isoStringToGridRow(isoStartTime:string, isoEndTime:string) {
  const start = new Date(isoStartTime);
  const end = new Date(isoEndTime);

  // Calculate minutes from 12:00 AM
  const startMinutesTotal = start.getUTCHours() * 60 + start.getUTCMinutes();
  const endMinutesTotal = end.getUTCHours() * 60 + end.getUTCMinutes();

  // Calculate row number and span
  const minutesPerRow = 60 / 12; // 12 rows per hour
  const startRow = Math.round(startMinutesTotal / minutesPerRow) + 1;
  const span = Math.round((endMinutesTotal - startMinutesTotal) / minutesPerRow) ;

  // const startTimeFormatted = isoStringToFormattedTime(isoStartTime);
  // const endTimeFormatted = isoStringToFormattedTime(isoEndTime);

  return `grid-row: ${startRow} / span ${span}`
}

// Example JSON array of events with start and end times
const events = [
  { name: "Breakfast", description: "", startTime: "2023-08-19T06:00:00Z", endTime: "2023-08-19T07:00:00Z" },
  { name: "Flight to Paris", description: "John F. Kennedy International Airport", startTime: "2023-08-19T07:30:00Z", endTime: "2023-08-19T10:00:00Z" },
  { name: "Sightseeing", description: "Eiffel Tower", startTime: "2023-08-19T11:00:00Z", endTime: "2023-08-19T13:00:00Z" }
];

</script>
<style lang=""></style>
