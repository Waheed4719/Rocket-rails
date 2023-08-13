<script setup lang="ts">
import Login from "@/components/auth/Login";
definePageMeta({
  auth: {
    unauthenticatedOnly: true,
    navigateAuthenticatedTo: "/projects",
  },
});
</script>

<template>
  <Login />
</template>
