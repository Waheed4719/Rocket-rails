<template>
  <h2 class="mt-10 text-lg font-semibold text-gray-900">
    Get started for free
  </h2>
  <p class="mt-2 text-sm text-gray-700">
    Already registered?
    <nuxt-link class="font-medium text-blue-600 hover:underline" to="/sign-in"
      >Sign in</nuxt-link
    >
    to your account.
  </p>
  <SignUpForm />
</template>
<script setup lang="ts">
import SignUpForm from "@/components/auth/SignUpForm.vue";
definePageMeta({
  layout: "authentication",
  key: 'sign-up',
  auth: {
    unauthenticatedOnly: true,
    navigateAuthenticatedTo: "/dashboard",
  },
});
const { signIn } = useAuth();
</script>
