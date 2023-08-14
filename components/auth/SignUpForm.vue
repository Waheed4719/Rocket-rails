<script setup lang="ts">
const submitForm = (event) => {
  event.preventDefault();
};
</script>
<template>
  <form
    action="#"
    class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2"
  >
    <div class="">
      <label
        for="first_name"
        class="mb-3 block text-sm font-medium text-gray-700"
        >First name</label
      ><input
        id="first_name"
        autocomplete="given-name"
        required="true"
        class="block w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-blue-500 sm:text-sm"
        type="text"
        name="first_name"
      />
    </div>
    <div class="">
      <label
        for="last_name"
        class="mb-3 block text-sm font-medium text-gray-700"
        >Last name</label
      ><input
        id="last_name"
        autocomplete="family-name"
        required="true"
        class="block w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-blue-500 sm:text-sm"
        type="text"
        name="last_name"
      />
    </div>
    <div class="col-span-full">
      <label for="email" class="mb-3 block text-sm font-medium text-gray-700"
        >Email address</label
      ><input
        id="email"
        autocomplete="email"
        required="true"
        class="block w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-blue-500 sm:text-sm"
        type="email"
        name="email"
      />
    </div>
    <div class="col-span-full">
      <label for="password" class="mb-3 block text-sm font-medium text-gray-700"
        >Password</label
      ><input
        id="password"
        autocomplete="new-password"
        required="true"
        class="block w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-blue-500 sm:text-sm"
        type="password"
        name="password"
      />
    </div>

    <div class="col-span-full">
      <button
        class="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-blue-600 text-white hover:text-slate-100 hover:bg-blue-500 active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600 w-full"
        type="submit"
      >
        <span>Sign up <span aria-hidden="true">→</span></span>
      </button>
    </div>
  </form>
</template>
