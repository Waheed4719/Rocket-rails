<template lang="">
  <nav class="flex my-3" aria-label="Breadcrumb">
    <ol role="list" class="flex gap-2">
      <li>
        <div class="flex">
          <nuxt-link
            to="/dashboard"
            class="flex gap-3 text-sm font-medium text-gray-500 hover:text-gray-700"
            ><HomeIcon class="h-5 w-5" /> <span>Home</span></nuxt-link
          >
        </div>
      </li>
      <li v-for="(crumb, index) in crumbs" :key="crumb">
        <div class="flex gap-2">
          <ChevronRightIcon class="h-5 w-5 text-gray-500" />
          <nuxt-link
            :event="crumb.disabled ? '' : 'click'"
            :to="crumb.href"
            class="text-sm font-medium text-gray-600 hover:text-gray-700"
            >{{ crumb.name }}</nuxt-link
          >
        </div>
      </li>
    </ol>
  </nav>
</template>
<script setup lang="ts">
import { ChevronRightIcon, HomeIcon } from "@heroicons/vue/24/outline";
import { BreadcrumbType } from "types";
defineProps<{
  crumbs: BreadcrumbType[];
}>();
</script>
<style lang=""></style>
