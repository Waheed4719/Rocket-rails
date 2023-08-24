<template>
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

  <div
    class="rounded-lg px-2 flex justify-between bg-white items-center h-[40px] shrink-0 gap-2 border border-gray-300"
  >
    <div class="flex items-center text-gray-500 gap-2 hover:text-black">
      <MagnifyingGlassIcon class="h-5" /><button
        class="border-none text-sm flex flex-1 outline-none font-semibold w-[45%]"
        placeholder="Quick find"
      >
        Quick find
      </button>
    </div>
    <div class="flex gap-2">
      <div class="rounded-md text-gray-400 bg-[#efefef] text-sm px-1 w-[20px]">
        ⌘
      </div>
      <div class="rounded-md text-gray-400 bg-[#efefef] text-sm px-1 w-[20px]">
        K
      </div>
    </div>
  </div>

  <nav class="flex flex-1 flex-col">
    <ul role="list" class="flex flex-1 flex-col gap-y-7">
      <li>
        <ul role="list" class="-mx-2">
          <li v-for="route in routes" :key="route.name" class="my-1">
            <nuxt-link
              :to="route.path"
              :class="{
                'bg-primaryColor text-white':
                  currentRoute.name == route.name ||
                  currentRoute.path == route.path || currentRoute.path.includes(route.path),
                'text-gray-600 hover:bg-gray-200 hover:text-black':
                  currentRoute.path != route.path,
                'bqb flex gap-x-3 rounded-xl p-2 text-sm leading-6 font-semibold group ': true,
              }"
            >
              <component class="h-6" :is="getIcon(route.icon)" />
              {{ route.name }}
            </nuxt-link>
          </li>
        </ul>
      </li>
      <li>
        <div class="text-xs font-semibold text-gray-400">Your teams</div>
        <ul role="list" class="-mx-2 mt-2">
          <li v-for="team in teams" :key="team.name" class="my-1">
            <a
              href=":null"
              class="text-gray-600 hover:bg-gray-200 hover:text-gray-500 bqb flex gap-x-3 rounded-xl p-2 text-sm leading-6 font-semibold"
            >
              <span
                class="axk afp hover:border-gray-400 flex w-6 h-6 shrink-0 items-center justify-center rounded-md border text-xs font-medishrink-0 bg-white"
              >
                {{ team.name[0] }}
              </span>
              <span class="whitespace-nowrap overflow-hidden text-ellipsis">{{
                team.name
              }}</span>
            </a>
          </li>
        </ul>
      </li>
      <li class="mt-auto flex justify-between">
        <a
          href=":null"
          :class="{
            'bqb -mx-2 flex gap-x-3 rounded-xl p-2 text-sm font-semibold leading-6 text-gray-600 hover:bg-gray-200 hover:text-black': true,
            'bg-primaryColor text-white':
              currentRoute.name == 'settings' ||
              currentRoute.path == '/settings',
          }"
        >
          <Cog6ToothIcon class="w-6 h-6 shrink-0" />
          Settings
        </a>
        <nuxt-link
          class="bqb -mx-2 flex gap-x-3 rounded-xl p-2 text-sm font-semibold leading-6 text-gray-600 hover:bg-gray-200 hover:text-black cursor-pointer"
          @click="
            signOut({
              callbackUrl: `/sign-in`,
            })
          "
        >
          <ArrowLeftOnRectangleIcon class="w-6 h-6 shrink-0" /> Log out
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>
<script setup lang="ts">
import { routes } from "@/constants/routes";
import * as HeroIcons from "@heroicons/vue/24/outline";
import {
  ChevronUpDownIcon,
  MagnifyingGlassIcon,
  ArrowLeftOnRectangleIcon,
  Cog6ToothIcon,
} from "@heroicons/vue/24/outline";
const { signOut } = useAuth();
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
