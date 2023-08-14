<script setup lang="ts">
definePageMeta({
  auth: {
    unauthenticatedOnly: false,
    navigateAuthenticatedTo: "/protected",
  },
});

</script>

<template>
  <div className="px-4 py-2 bg-white min-h-screen">
    <h1 class="text-3xl font-bold">Welcome home.</h1>
    <nuxt-link to="/sign-in" class="text-gray-500 font-semibold">Sign in</nuxt-link>
  </div>
</template>
