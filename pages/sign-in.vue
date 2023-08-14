<template>
  <h2 class="mt-10 text-lg font-semibold text-gray-900">
    Sign in to your account
  </h2>
  <p class="mt-2 text-sm text-gray-700">
    Don’t have an account?
    <nuxt-link class="font-medium text-blue-600 hover:underline" to="/sign-up"
      >Sign up</nuxt-link
    >
    for a free trial.
  </p>
  <SignInForm />
</template>
<script setup lang="ts">
import SignInForm from "@/components/auth/SignInForm.vue";

definePageMeta({
  layout: "authentication",
  key: 'sign-in',
  auth: {
    unauthenticatedOnly: true,
    navigateAuthenticatedTo: "/dashboard",
  },
});
const { signIn } = useAuth();
</script>
