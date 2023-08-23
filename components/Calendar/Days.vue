<template lang="">
  <div
    class="grid gap-px border-b text-center avx font-semibold leading-6 axo cxn bg-gray-200 border-gray-300"
    style="grid-template-columns: repeat(7, minmax(0, 1fr))"
  >
    <div class="bg-white py-2">S<span class="t bsk">un</span></div>
    <div class="bg-white py-2">M<span class="t bsk">on</span></div>
    <div class="bg-white py-2">T<span class="t bsk">ue</span></div>
    <div class="bg-white py-2">W<span class="t bsk">ed</span></div>
    <div class="bg-white py-2">T<span class="t bsk">hu</span></div>
    <div class="bg-white py-2">F<span class="t bsk">ri</span></div>
    <div class="bg-white py-2">S<span class="t bsk">at</span></div>
  </div>
</template>
<script setup lang="ts">
import { defineComponent } from "vue";
defineComponent({
  name: "CalendarDays",
});
</script>
<style lang=""></style>
