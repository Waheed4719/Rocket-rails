<template>
  <Listbox v-model="selectedOption">
    <ListboxButton
      type="button"
      class="flex items-center gap-x-3 rounded-md alj px-3 py-2 text-sm font-semibold axq bbi bbo bbs bca bic pr-[40px]"
      id="headlessui-menu-button-1"
      aria-haspopup="menu"
      aria-expanded="false"
    >
      <span class="block truncate">{{ selectedOption.label }}</span>
      <span
        class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
      >
        <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
      </span>
    </ListboxButton>

    <transition
      leave-active-class="transition duration-100 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <ListboxOptions
        class="min-w-fit z-10 absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
      >
        <ListboxOption
          v-slot="{ selected, active }"
          v-for="option in options"
          :key="option.value"
          :value="option"
          as="template"
          @click="handleClick(option)"
        >
          <li
            :class="[
              active
                ? 'bg-amber-100 text-amber-900'
                : 'text-gray-900',
              'relative cursor-default select-none py-2 pl-10 pr-4',
            ]"
          >
            <span
              :class="[
                selected ? 'font-medium' : 'font-normal',
                'block truncate',
              ]"
              >{{ option.label }}</span
            >
            <span
              v-if="selected"
              class="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600"
            >
              <CheckIcon class="h-5 w-5" aria-hidden="true" />
            </span>
          </li>
        </ListboxOption>
      </ListboxOptions>
    </transition>
  </Listbox>
</template>

<script setup lang="ts">
import { ref } from "vue";
import {
  Listbox,
  ListboxLabel,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/vue";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/vue/20/solid";

type Option = {
  label: string;
  value: string; // Use lowercase 'string' here
};

const props = defineProps({
  options: {
    type: Array as () => Option[],
    required: true,
  },
  selectedOption: {
    type: Object as () => Option,
    required: true,
  },
});

const {selectedOption, options} = props

const emits = defineEmits<{
  (e: "update:selectedOption", option: Option): void;
}>();

const handleClick = (option: Option) => {
  emits("update:selectedOption", option);
};
</script>
