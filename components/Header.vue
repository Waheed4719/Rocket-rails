<template>
  <div
    class="lg:hidden top-0 z-5 sticky flex h-16 shrink-0 items-center gap-x-4 border-b afp bg-white px-4 bbi cbu cex ddc"
  >
    <button
      type="button"
      class="-m-2.5 p-2.5 axo lg:hidden"
      @click="handleSidebar"
    >
      <span class="sr-only">Open sidebar</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        aria-hidden="true"
        class="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        ></path>
      </svg>
    </button>
    <div class="h-6 w-px bg-gray-300 lg:hidden" aria-hidden="true"></div>
    <div class="flex flex-1 gap-x-4 items-stretch lg:gap-x-6">
      <form class="relative flex flex-1" action="#" method="GET">
        <label htmlFor="search-field" class="sr-only">Search</label>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
          class="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-400"
        >
          <path
            fillRule="evenodd"
            d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
            clipRule="evenodd"
          ></path>
        </svg>
        <input
          id="search-field"
          class="block w-full h-full border-0 py-0 pl-8 pr-0 axq bfy bmx text-3.6"
          placeholder="Search..."
          type="search"
          name="search"
          spellCheck="faflexe"
          data-ms-editor="true"
        />
      </form>
      <div class="flex items-center gap-x-4 czt">
        <button type="button" class="-m-2.5 p-2.5 axk bks">
          <span class="sr-only">View notifications</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true"
            class="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
            ></path>
          </svg>
        </button>
        <div class="hidden cur cvh cwv dci" aria-hidden="true"></div>
        <div class="relative" data-headlessui-state="">
          <button
            class="-m-1.5 flex items-center p-1.5"
            id="headlessui-menu-button-1"
            type="button"
            aria-haspopup="menu"
            aria-expanded="false"
            data-headlessui-state=""
          >
            <span class="sr-only">Open user menu</span>
            <img
              class="h-8 w-8 rounded-full ail"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
              alt=""
            />
            <span class="hidden lg:flex items-center">
              <span
                class="js text-sm font-semibold leading-6 axq"
                aria-hidden="true"
              >
                Tom Cook
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                class="jo nu rw axk"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
defineProps({
  sidebarOpen: Boolean,
  dropdownOpen: Boolean,
});

const emits = defineEmits<{
  (e: "handleSidebar"): void;
}>();

const handleSidebar = () => {
  emits("handleSidebar");
};
</script>
