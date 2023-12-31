<template>
  <header
    class="bg-white flex items-center justify-between border-b afp py-4 lg:flex-none"
  >
    <h1 class="avt font-semibold awk axq">
      <time datetime="2022-01">{{
        getMonthOrRange()
      }}</time>
 
    </h1>
    <div class="flex items-center">
      <div class="relative flex items-center adp alj bbi cmx">
        <div class="u aa af adp bbo bbs bca" aria-hidden="true"></div>
        <button
          @click="prevMonth"
          type="button"
          class="flex items-centerjustify-center ady arq ath atz axk bks bmb cltmd:px-2 cpw"
        >
          <span class="sr-only">Previous month</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
            class="nu rw"
          >
            <path
              fill-rule="evenodd"
              d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <button
          @click="getToday"
          type="button"
          class="hidden px-3.5 text-sm font-medium axq bic bmb md:block"
        >
          Today
        </button>
        <span class="relative gb nu w-px aih md:hidden"></span>
        <button
          @click="nextMonth"
          type="button"
          class="flex items-centerjustify-center aec arq ati atx axk bks bmb cltmd:px-2 cpw"
        >
          <span class="sr-only">Next month</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
            class="nu rw"
          >
            <path
              fill-rule="evenodd"
              d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
      <div class="hidden md:ml-4 md:flex md:items-center">
        <div class="relative">
          <Listbox
            :options="options"
            :selectedOption="selectedOption"
            @update:selectedOption="updateSelectedOption"
          />
        </div>
        <div class="ml-4 h-6 w-px aih"></div>
        <button
          type="button"
          class="ml-4 adp bg-primaryColor ara arq avvt-sm font-medium bac bbi bin bot bou bow bpf"
          @click="addEvent"
        >
          Add event
        </button>
      </div>
      <div class="relative ml-6 md:hidden">
        <button
          class="fv flex items-center adn aeu agt aql axk bks"
          id="headlessui-menu-button-2"
          type="button"
          aria-haspopup="menu"
          aria-expanded="false"
        >
          <span class="sr-only">Open menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
            class="nu rw"
          >
            <path
              d="M3 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM8.5 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM15.5 8.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { defineComponent, ref } from "vue";
import Listbox from "@/components/Listbox.vue";
import { ListBoxSelectOption } from "types";
import { Day } from "hooks/useCalendar";
defineComponent({
  name: "CalendarHeader",
});

const props = defineProps<{
  currentMonth: String;
  currentYear: Number;
  openModal: Boolean;
  selectedView: ListBoxSelectOption;
  currentWeekDays: Day[];
}>();

const emits = defineEmits<{
  (e: "prevMonth"): void;
  (e: "nextMonth"): void;
  (e: "getToday"): void;
  (e: "handleEventModal"): void;
  (e: "handleViewChange", option: ListBoxSelectOption): void;
}>();

const addEvent = () => {
  emits("handleEventModal");
};

const prevMonth = () => {
  emits("prevMonth");
};

const nextMonth = () => {
  emits("nextMonth");
};

const getToday = () => {
  emits("getToday");
};

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
const selectedOption = ref(props.selectedView || options[1]);
watchEffect(() => {
  if (props.selectedView) {
    selectedOption.value = props.selectedView;
  }
});

const getMonthOrRange = () => {
  const { currentMonth, currentYear, selectedView, currentWeekDays } = props;
  if (selectedView.value !== "week") {
    return currentMonth + " " + currentYear;
  }
  // format the range like september 2023 - october 2023
  const formattedDateStart = currentWeekDays[0].date.toLocaleDateString(
    "en-US",
    {
      month: "long",
      year: "numeric",
    }
  );
  const formattedDateEnd = currentWeekDays[6].date.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });
  if (formattedDateStart === formattedDateEnd) return formattedDateStart;
  return `${formattedDateStart} - ${formattedDateEnd}`;
};

const updateSelectedOption = (option: ListBoxSelectOption) => {
  selectedOption.value = option;
  console.log("Header", selectedOption.value);
  emits("handleViewChange", option);
};
</script>
