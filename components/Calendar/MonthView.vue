<template lang="">
  <div class="bbd bbo bbt bdq lg:flex flex-1 lg:flex-col">
    <CalendarDays />
    <div class="flex bg-gray-200 text-xs leading-6 axo flex-1">
      <div
        class="hidden w-full lg:grid lg:grid-cols-7 lg:gap-px"
        :style="gridStyle"
      >
        <div
          v-for="(dateObj, index) in daysArray"
          :key="dateObj.formattedDate"
          :class="{
            'ail axm relative px-3 py-2':
              index + 1 <= previousMonthPaddingDays ||
              index + 1 > previousMonthPaddingDays + daysInMonth,
            'bg-white relative px-3 py-2':
              index + 1 > previousMonthPaddingDays &&
              index + 1 <= previousMonthPaddingDays + daysInMonth,
          }"
        >
          <time
            :class="{
              'flex h-6 w-6 justify-center gap-3 rounded-xl bg-primaryColor text-white':
                currentFormattedDate == dateObj.formattedDate,
            }"
            :datetime="dateObj.formattedDate"
          >
            {{ dateObj.day }}
          </time>
          <ol class="mt-2">
            <li
              v-for="event in getEvents(dateObj.formattedDate)"
              :key="event.date"
            >
              <a href="javascript:void(0);" class="bqb flex">
                <p
                  class="ui overflow-hidden text-ellipsis whitespace-nowrap font-semibold brn text-gray-600"
                >
                  {{ event.title }}
                </p>
                <time
                  dateTime="2022-01-03T10:00"
                  class="jr hidden uj axm brn diq"
                >
                  {{ formatTime(event.date) }}
                </time>
              </a>
            </li>
          </ol>
        </div>
      </div>
      <div
        class="isolate grid w-full grid-cols-7 gap-px lg:hidden"
        :style="gridStyle"
      >
        <button
          type="button"
          v-for="(dateObj, index) in daysArray"
          :key="dateObj.formattedDate"
          :class="{
            'ail axm relative px-3 py-2':
              index + 1 <= previousMonthPaddingDays ||
              index + 1 > previousMonthPaddingDays + daysInMonth,
            'bg-white relative px-3 py-2':
              index + 1 > previousMonthPaddingDays &&
              index + 1 <= previousMonthPaddingDays + daysInMonth,
            'flex justify-center items-center flex-col': true,
          }"
        >
          <time
            :datetime="dateObj.formattedDate"
            :class="{
              'flex h-6 w-6 yz ze ads bg-primaryColor awg bah':
                currentFormattedDate == dateObj.formattedDate,
            }"
            >{{ dateObj.day }}</time
          >
          <template v-if="getEvents(dateObj.formattedDate).length">
            <span class="t"
              >{{ getEvents(dateObj.formattedDate).length }} events</span
            >
            <span class="fs lk flex yp">
              <span
                v-for="event in getEvents(dateObj.formattedDate)"
                class="gn jb mz ra adn aii"
              ></span>
            </span>
          </template>
        </button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  events: {
    title: string;
    date: string;
  }[];
  daysArray: any[];
  previousMonthPaddingDays: number;
  daysInMonth: number;
  currentFormattedDate: string;
}>();
const getEvents = (date: string) => {
  return props.events.filter((event) => checkIfDateMatches(event.date, date));
};

const formatTime = (date: string) => {
  const time = new Date(date);
  return time.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
};

const checkIfDateMatches = (date: string, dateToCheckAgainst: string) => {
  // Create a Date object for the current date
  var currentDate = new Date(date);

  // Create a Date object for the date you want to check
  var dateToCheck = new Date(dateToCheckAgainst); // Replace with the date you want to check

  // Compare the year, month, and day of the two dates
  if (
    currentDate.getFullYear() === dateToCheck.getFullYear() &&
    currentDate.getMonth() === dateToCheck.getMonth() &&
    currentDate.getDate() === dateToCheck.getDate()
  ) {
    return true;
  } else {
    return false;
  }
};

const gridStyle = {
  computed: () => {
    return {
      "grid-template-rows":
        props.daysArray.length > 35
          ? "repeat(6, minmax(0, 1fr))"
          : "repeat(5, minmax(0, 1fr))",
    };
  },
};
</script>
<style lang=""></style>
