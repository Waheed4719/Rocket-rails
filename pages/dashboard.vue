<template>
  <div class="mb-4 px-8">
    <BreadCrumbs :crumbs="breadCrumbs" />
    <div class="flex justify-between">
      <h1 class="text-2xl font-bold text-gray-700">🏄 Overview</h1>

      <div></div>
    </div>
  </div>
  <div class="h-[1px] w-full bg-gray-200 my-5"></div>
  <div class="px-8">
    <h1 class="text-xl">Welcome <span class="font-semibold">{{ data?.user?.firstName }}!</span></h1>
  </div>
</template>

<script setup lang="ts">
import { User } from "types";

const { data: session } = useAuth();
type Session = {
  expires: string;
  user: User;
};
const data = session.value as Session;
console.log(data);
const breadCrumbs = [{ name: "Dashboard", href: "/dashboard", disabled: true }];

definePageMeta({
  layout: "authenticated",
  key: "dashboard",
});

useSeoMeta({
  title: "Dashboard",
  description: "Dashboard",
  keywords: "Dashboard",
});
</script>
