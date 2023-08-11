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
        :currentYear="currentYear" />
      <div class="bbd bbo bbt bdq cut cxm cyy">
        <CalendarDays />
        <div class="flex aig avx awk axo cxm">
          <div class="ly ti cuv cyq czm" :style="gridStyle">
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
              }">
              <time
                :class="{
                  'flex h-6 w-6 yz ze ads bg-primaryColor awg bah':
                    currentFormattedDate == dateObj.formattedDate,
                }"
                :datetime="dateObj.formattedDate">
                {{ dateObj.day }}
              </time>
              <ol
                v-if="currentFormattedDate == dateObj.formattedDate"
                class="kw">
                <li>
                  <a href="javascript:void(0);" class="bqb flex">
                    <p class="ui overflow-hidden text-ellipsis whitespace-nowrap font-semibold axq brn">Design review</p>
                    <time
                      dateTime="2022-01-03T10:00"
                      class="jr ly uj axm brn diq">
                      10AM
                    </time>
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0);" class="bqb flex">
                    <p class="ui overflow-hidden text-ellipsis whitespace-nowrap font-semibold axq brn">Sales meeting</p>
                    <time
                      dateTime="2022-01-03T14:00"
                      class="jr ly uj axm brn diq">
                      2PM
                    </time>
                  </a>
                </li>
              </ol>
            </div>
          </div>
          <div class="dx lw ti yh zp cux" :style="gridStyle">
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
              }">
              <time :datetime="dateObj.formattedDate">{{ dateObj.day }}</time>
              <!-- <span class="t">2 events</span>
              <span class="fs lk flex yp">
                <span class="gn jb mz ra adn aii"></span>
                <span class="gn jb mz ra adn aii"></span>
              </span> -->
            </button>
          </div>
        </div>
      </div>
      <div class="ard arm cex cux">
        <ol class="relativex aca adb ado bg-white avv bbd bbo bbt bdq">
          <li v-for="event in events" :key="event.date" class="bqb flex aqo aub bgn bic">
            <div class="ui">
              <p class="awb axq">Maple syrup museum</p>
              <time :datetime="event.date" class="kw flex yu axo">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  class="kh nu rw axk">
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z"
                    clip-rule="evenodd"></path>
                </svg>
                {{ formatTime(event.date) }}
              </time>
            </div>
            <a
              href="#"
              class="ju uj acy adp bg-white px-3 py-2 awb axq bas bbi bbo bbs bca blw bmt brx">
              Edit
              <span class="t">, Maple syrup museum</span>
            </a>
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineComponent, toRefs } from 'vue';
import CalendarHeader from '@/components/Calendar/Header.vue';
import CalendarDays from '@/components/Calendar/Days.vue';
import useCalendar from '@/hooks/useCalendar';

defineComponent({
  name: 'CalendarComponent',
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
    date: '2022-01-22T15:00', // '2022-01-22T15:00
    title: 'Maple syrup museum',
  },
  {
    date: '2022-01-22T19:00', // '2022-01-22T19:00
    title: 'Hockey game',
  }
]
const gridStyle = {
  computed: () => {
    return {
      'grid-template-rows':
        daysArray.value.length > 35
          ? 'repeat(6, minmax(0, 1fr))'
          : 'repeat(5, minmax(0, 1fr))',
    };
  },
};

const formatTime = (date: string) => {
  const time = new Date(date);
  return time.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });
}
</script>
<style lang="css">
@import '~/assets/css/calendar.css';
</style>