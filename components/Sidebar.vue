<template>
  <div class="ly cpy cqf crm cut cwo cyy">
    <div class="flex uo ym aao ade aff afp bg-[#f5f5f5] arf asp">
      <!-- <div class="flex ng shrink-0 items-center">
        <img
          class="ob th"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&amp;shade=600"
          alt="Your Company"
        />
      </div> -->
      <div class="flex justify-between items-center mt-5">
        <div class="flex gap-2 items-center">
          <div
            class="rounded-md bg-purple-900 flex items-center justify-center w-[40px] h-[40px] text-white"
          >
            W
          </div>
          <div class="flex flex-col">
            <h3 class="font-semibold text-gray-700 text-lg">Red Studio</h3>
            <h5 class="text-gray-400 text-xs font-semibold">Team Plan</h5>
          </div>
        </div>
        <ChevronUpDownIcon class="h-6 text-gray-400" />
      </div>

      <div class="rounded-lg px-2 flex justify-between bg-white items-center h-[40px]">
        <div class="flex items-center text-gray-500 gap-2"><MagnifyingGlassIcon class="h-5" /><input class="border-none text-sm flex flex-1 placeholder:text-gray-400 font-semibold w-[50%]" placeholder="Quick find" /></div>
        <div class="flex gap-2"><div class="rounded-md text-gray-400 bg-[#efefef] text-sm px-1">⌘</div><div class="rounded-md text-gray-400 bg-[#efefef] text-sm px-1">K</div></div>
      </div>

      <nav class="flex uh ym">
        <ul role="list" class="flex uh ym aaq">
          <li>
            <ul role="list" class="fv abj">
              <li v-for="route in routes" :key="route.name">
                <nuxt-link
                  :to="route.path"
                  :class="{
                    'bg-primaryColor text-white':
                      currentRoute.name == route.name ||
                      currentRoute.path == route.path,
                    'axo blb bic ': currentRoute.path != route.path,
                    'bqb flex gap-x-3 rounded-xl p-2 text-sm leading-6 font-semibold group': true,
                  }"
                >
                  <component class="h-6" :is="getIcon(route.icon)" />
                  {{ route.name }}
                </nuxt-link>
              </li>
            </ul>
          </li>
          <li>
            <div class="avx font-semibold leading-6 axk">Your teams</div>
            <ul role="list" class="fv kw abj">
              <li v-for="team in teams" :key="team.name">
                <a
                  href=":null"
                  class="axo blb bic bqb flex gap-x-3 rounded-xl p-2 text-sm leading-6 font-semibold"
                >
                  <span
                    class="axk afp bqe brn flex w-6 h-6 shrink-0 items-center justify-center rounded-md border text-xs font-medishrink-0 bg-white"
                  >
                    {{ team.name[0] }}
                  </span>
                  <span
                    class="whitespace-nowrap overflow-hidden text-ellipsis"
                    >{{ team.name }}</span
                  >
                </a>
              </li>
            </ul>
          </li>
          <li class="mt-auto">
            <a
              href=":null"
              class="bqb fv flex gap-x-3 rounded-xl p-2 text-sm font-semibold leading-6 axo bic blb"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                class="w-6 h-6 shrink-0 axk brn"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
              </svg>
              Settings
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>
<script setup lang="ts">
import { routes } from "@/constants/routes";
import * as HeroIcons from "@heroicons/vue/24/outline";
import { ChevronUpDownIcon, MagnifyingGlassIcon } from "@heroicons/vue/24/outline";
const { currentRoute } = useRouter();

const teams = [
  {
    name: "Tailwind Labs",
    href: "#",
    imageUrl: "https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg",
    current: false,
  },
  {
    name: "Mirage",
    href: "#",
    imageUrl: "https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg",
    current: false,
  },
  {
    name: "StaticKit",
    href: "#",
    imageUrl: "https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg",
    current: true,
  },
  {
    name: "Transistor",
    href: "#",
    imageUrl: "https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg",
    current: false,
  },
];

const getIcon = (icon: string) => {
  const iconComponent = HeroIcons[icon as keyof typeof HeroIcons];
  if (!iconComponent) return null;
  return iconComponent;
};
</script>
