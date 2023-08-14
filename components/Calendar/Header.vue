<template>
  <header
    class="bg-white flex items-center justify-between border-b afp py-4 cxn"
  >
    <h1 class="avt awb awk axq">
      <time datetime="2022-01">{{ currentMonth + " " + currentYear }}</time>
    </h1>
    <div class="flex items-center">
      <div class="ab flex items-center adp alj bbi cmx">
        <div class="u aa af adp bbo bbs bca" aria-hidden="true"></div>
        <button
          @click="prevMonth"
          type="button"
          class="flex items-center yz ady arq ath atz axk bks bmb clt coi cpw"
        >
          <span class="t">Previous month</span>
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
          class="ly arb avv awb axq bic bmb ckz"
        >
          Today
        </button>
        <span class="ab gb nu tj aih clg"></span>
        <button
          @click="nextMonth"
          type="button"
          class="flex items-center yz aec arq ati atx axk bks bmb clt coi cpw"
        >
          <span class="t">Next month</span>
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
      <div class="ly ckm clc cmv">
        <div class="ab">
          <Listbox
            :options="options"
            :selectedOption="selectedOption"
            @update:selectedOption="updateSelectedOption"
          />
        </div>
        <div class="ju nx tj aih"></div>
        <button
          type="button"
          class="ju adp bg-primaryColor ara arq avv awb bac bbi bin bot bou bow bpf"
          @click="addEvent"
        >
          Add event
        </button>
      </div>
      <div class="ab ju clg">
        <button
          class="fv flex items-center adn aeu agt aql axk bks"
          id="headlessui-menu-button-2"
          type="button"
          aria-haspopup="menu"
          aria-expanded="false"
        >
          <span class="t">Open menu</span>
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
import { emit } from "process";
defineComponent({
  name: "CalendarHeader",
});
const props = defineProps({
  currentMonth: String,
  currentYear: Number,
  openModal: Boolean,
});

const emits = defineEmits<{
  (e: "prevMonth"): void;
  (e: "nextMonth"): void;
  (e: "getToday"): void;
  (e: "handleEventModal"): void;
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

const selectedOption = ref(options[1]);

const updateSelectedOption = (option: any) => {
  selectedOption.value = option;
};
</script>
