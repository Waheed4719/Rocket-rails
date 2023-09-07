import { reactive, watch, toRefs } from 'vue';

export type Day = {
  day: number;
  date: Date;
  formattedDate: string;
  formattedDateWithWeekday: string
  month: string;
};
// Define the state type
type CalendarState = {
  daysInMonth: number;
  previousMonthPaddingDays: number;
  nav: number;
  daysArray: Day[];
  currentWeekDay: string;
  currentDay: number;
  currentMonth: string;
  currentYear: number;
  currentFormattedDate: string;
  currentWeekDays: Day[];
};

const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]
const initialState: CalendarState = {
  nav: 0,
  daysArray: [],
  daysInMonth: 0,
  currentDay: 1,
  currentWeekDay: '',
  currentMonth: '',
  currentYear: 0,
  previousMonthPaddingDays: 0,
  currentFormattedDate: '',
  currentWeekDays: [],
};

const useCalendar = () => {
  const state = reactive({...initialState});
  let firstLoad = true;

  const load = () => {
    const dt = new Date();

    state.daysInMonth = 0;
    state.previousMonthPaddingDays = 0;
    state.daysArray = [];
    state.currentWeekDays = [];

    if (firstLoad) {
      state.currentWeekDay = weekdays[dt.getDay()];
      state.currentDay = dt.getDate();
      state.currentFormattedDate = new Date(
        dt.getFullYear(),
        dt.getMonth(),
        state.currentDay
      ).toLocaleDateString('en-us', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
      });

      firstLoad = false;
    }
    if (state.nav !== 0) {
      dt.setMonth(new Date().getMonth() + state.nav, 1);
    }
    const month = dt.getMonth();
    state.currentYear = dt.getFullYear();
    state.daysInMonth = new Date(state.currentYear, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(state.currentYear, month, 1);

    state.previousMonthPaddingDays = weekdays.indexOf(
      weekdays[firstDayOfMonth.getDay()]
    );
    const lastMonthPaddingDays = Math.abs(
      state.previousMonthPaddingDays -
        new Date(state.currentYear, month, 0).getDate()
    );
    const lastDayOfMonth = new Date(
      state.currentYear,
      month + 1,
      0
    ).toLocaleDateString('en-us', {
      weekday: 'long',
    });
    const nextMonthPaddingDays =
      weekdays.length - weekdays.indexOf(lastDayOfMonth) - 1;

    state.currentMonth = `${dt.toLocaleDateString('en-us', {
      month: 'long',
    })}`;

    const daysToFill =
      state.previousMonthPaddingDays + state.daysInMonth + nextMonthPaddingDays;

    for (let i = 1; i <= daysToFill; i++) {
      let day;
      let currentMonth = month;
      if (
        i > state.previousMonthPaddingDays &&
        i <= state.previousMonthPaddingDays + state.daysInMonth
      ) {
        day = i - state.previousMonthPaddingDays;
      } else if (
        i > state.previousMonthPaddingDays + state.daysInMonth &&
        i <= daysToFill
      ) {
        day = i - (state.previousMonthPaddingDays + state.daysInMonth);
        currentMonth = month + 1;
      } else {
        day = lastMonthPaddingDays + i;
        currentMonth = month - 1;
      }

      state.daysArray.push({
        day: day,
        date: new Date(state.currentYear, currentMonth, day),
        month: months[currentMonth],
        formattedDate: new Date(
          state.currentYear,
          currentMonth,
          day
        ).toLocaleDateString('en-us', {
          year: 'numeric',
          month: 'numeric',
          day: 'numeric',
        }),
        formattedDateWithWeekday: new Date(
          state.currentYear,
          currentMonth,
          day
        ).toLocaleDateString('en-us', {
          weekday: 'long',
          year: 'numeric',
          month: 'numeric',
          day: 'numeric',
        }),
      });
    }

    //fill currentWeekDays
    const currentDayIndex = weekdays.indexOf(state.currentWeekDay);
    const daysUntilSunday = (7 - currentDayIndex) % 7; // Calculate days until Sunday
  
    // Calculate the start date of the current week (Sunday)
    const startOfWeek = new Date(dt);
    startOfWeek.setDate(dt.getDate() - daysUntilSunday);
  
    // Fill the currentWeekDays array with the days of the current week (Sunday to Saturday)
    for (let i = 1; i <= 7; i++) {
      const day = new Date(startOfWeek);
      day.setDate(startOfWeek.getDate() + i);
      state.currentWeekDays.push({
        day: day.getDate(),
        date: day,
        month: months[day.getMonth()],
        formattedDate: day.toLocaleDateString('en-us', {
          year: 'numeric',
          month: 'numeric',
          day: 'numeric',
        }),
        formattedDateWithWeekday: day.toLocaleDateString('en-us', {
          weekday: 'long',
          year: 'numeric',
          month: 'numeric',
          day: 'numeric',
        }),
      });
    }

    
  };

  watch(
    () => state.nav,
    () => {
      load();
    }
  );

  load();

  const goToNextMonth = () => {
    state.nav = state.nav + 1;
  };

  const goToPreviousMonth = () => {
    state.nav = state.nav - 1;
  };

  const goToNextYear = () => {
    state.nav = state.nav + 12;
  };

  const goToPreviousYear = () => {
    state.nav = state.nav - 12;
  };

  const goToToday = () => {
    state.nav = 0;
  };
  return {
    state: toRefs(state),
    goToNextMonth,
    goToPreviousMonth,
    goToNextYear,
    goToPreviousYear,
    goToToday,
  };
};

export default useCalendar;
