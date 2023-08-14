<template>
  <div class="flex h-full md:h-screen flex-col">
    <div class="relative flex min-h-full justify-center md:px-12 lg:px-0">
      <div
        class="relative z-10 flex flex-1 flex-col bg-white px-4 py-10 shadow-2xl sm:justify-center md:flex-none md:px-28"
      >
        <main
          class="mx-auto w-full max-w-md sm:px-4 md:w-96 md:max-w-sm md:px-0"
        >
          <div class="flex">
            <nuxt-link aria-label="Home" to="/" class="text-lg">
              🚀 Rocket Rails
            </nuxt-link>
          </div>
          <slot />
        </main>
      </div>
      <div class="hidden sm:contents lg:relative lg:block lg:flex-1">
        <img
          alt=""
          loading="lazy"
          width="1664"
          height="1866"
          decoding="async"
          data-nimg="1"
          class="absolute inset-0 h-full w-full object-cover"
          :src="BlueGradient"
          style="color: transparent"
        />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import BlueGradient from "@/assets/images/blueGradient.jpg";
</script>
