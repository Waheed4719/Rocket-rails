<script setup lang="ts">
const { signIn } = useAuth();

const submitForm = (event) => {
  event.preventDefault();
  signIn("credentials", {
    email: event.target.email.value,
    password: event.target.password.value,
    callbackUrl: "/events",
  });
};
</script>
<template>
  <form
    action="#"
    class="mt-10 grid grid-cols-1 gap-y-8"
    method="POST"
    @submit="submitForm"
  >
    <div class="">
      <label for="email" class="mb-3 block text-sm font-medium text-gray-700"
        >Email address</label
      ><input
        placeholder="test@email.com"
        id="email"
        autocomplete="email"
        required="true"
        class="block w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-blue-500 sm:text-sm"
        type="email"
        name="email"
      />
    </div>
    <div class="">
      <label for="password" class="mb-3 block text-sm font-medium text-gray-700"
        >Password</label
      ><input
        placeholder="test1234"
        id="password"
        autocomplete="current-password"
        required="true"
        class="block w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-blue-500 sm:text-sm"
        type="password"
        name="password"
      />
    </div>
    <div>
      <button
        class="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-blue-600 text-white hover:text-slate-100 hover:bg-blue-500 active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600 w-full"
        type="submit"
      >
        <span>Sign in <span aria-hidden="true">→</span></span>
      </button>
    </div>
  </form>
</template>
