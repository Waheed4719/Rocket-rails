<template>
  <div class="ail cvb cwb">
    <div class="cut cvu cyy">
      <CalendarHeader
        @prevMonth="goToPreviousMonth"
        @nextMonth="goToNextMonth"
        @getToday="goToToday"
        @prevYear="goToPreviousYear"
        @nextYear="goToNextYear"
        :currentMonth="currentMonth"
        :currentYear="currentYear"
        :openModal="openModal"
        @handleEventModal="toggleEventModal"
        :selectedView="selectedView"
        @handleViewChange="handleViewChange"
      />

      <MonthView
        v-if="selectedView.value == 'month'"
        :events="events"
        :daysArray="daysArray"
        :previousMonthPaddingDays="previousMonthPaddingDays"
        :daysInMonth="daysInMonth"
        :currentFormattedDate="currentFormattedDate"
      />
      <DayView v-if="selectedView.value == 'day'" />
      <div class="px-4 py-10 md:px-6 lg:hidden">
        <ol
          class="relative aca overflow-hidden ado bg-white avv bbd bbo bbt bdq"
        >
          <p
            v-if="getEvents(currentFormattedDate).length == 0"
            class="p-4 text-center font-semibold text-gray-400"
          >
            No Events Available!
          </p>
          <li
            v-for="event in getEvents(currentFormattedDate)"
            :key="event.date"
            class="bqb flex aqo aub bgn bic"
          >
            <div class="ui">
              <p class="awb axq">{{ event.title }}</p>
              <time :datetime="event.date" class="mt-2 flex yu axo">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  class="kh nu rw axk"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                {{ formatTime(event.date) }}
              </time>
            </div>
            <a
              href="#"
              class="ju uj acy adp bg-white px-3 py-2 awb axq bas bbi bbo bbs bca blw bmt brx"
            >
              Edit
              <span class="t">, {{ event.title }}</span>
            </a>
          </li>
        </ol>
      </div>
    </div>
  </div>
  <ModalCalendarEvent :open="openModal" @handleEventModal="toggleEventModal" />
</template>

<script setup lang="ts">
import { defineComponent } from "vue";
import CalendarHeader from "@/components/Calendar/Header.vue";
import CalendarDays from "@/components/Calendar/Days.vue";
import useCalendar from "@/hooks/useCalendar";
import MonthView from "./MonthView.vue";
import DayView from "./DayView.vue";
import { ListBoxSelectOption } from "types";

defineComponent({
  name: "CalendarComponent",
  components: {
    CalendarHeader,
    CalendarDays,
  },
});

const {
  state,
  goToNextMonth,
  goToPreviousMonth,
  goToToday,
  goToPreviousYear,
  goToNextYear,
} = useCalendar();
const openModal = ref(false);

const toggleEventModal = () => {
  openModal.value = !openModal.value;
};

const {
  nav,
  currentMonth,
  currentYear,
  daysArray,
  previousMonthPaddingDays,
  daysInMonth,
  currentFormattedDate,
} = state;

// write the dates in iso format
const events = [
  {
    date: "2023-08-23T15:00", // '2022-01-22T15:00
    title: "Maple syrup museum",
  },
  {
    date: "2023-08-22T19:00", // '2022-01-22T19:00
    title: "Hockey game",
  },
  {
    date: "2023-08-23T15:00", // '2022-01-22T15:00
    title: "Interview at Apple",
  },
  {
    date: "2023-08-12T15:00", // '2022-01-22T15:00
    title: "Meeting with the boss",
  },
];

const options = [
  {
    label: "Year view",
    value: "year",
  },
  {
    label: "Month view",
    value: "month",
  },
  {
    label: "Week view",
    value: "week",
  },
  {
    label: "Day view",
    value: "day",
  },
];

const selectedView = ref(options[1]);

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
        daysArray.value.length > 35
          ? "repeat(6, minmax(0, 1fr))"
          : "repeat(5, minmax(0, 1fr))",
    };
  },
};

const getEvents = (date: string) => {
  return events.filter((event) => checkIfDateMatches(event.date, date));
};

const formatTime = (date: string) => {
  const time = new Date(date);
  return time.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
};

const handleViewChange = (option: ListBoxSelectOption) => {
  selectedView.value = option;
};

defineEmits<{
  (e: "handleEventModal"): boolean;
}>();
</script>
<style lang="css">
@import "~/assets/css/calendar.css";
</style>
