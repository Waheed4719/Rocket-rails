<template>
  <div
    class="flex flex-col gap-2 bg-white shadow-sm rounded-lg border p-4"
    draggable="true"
  >
    <img :src="ProjectImage" class="object-cover rounded-lg border border-px" />
    <div class="flex flex-col gap-1">
      <div class="mb-2">
        <h5 class="text-gray-400 text-xs font-medium">
          {{ project.category }}
        </h5>
        <h3 class="font-medium text-gray-600 mb-1">{{ project.title }}</h3>
        <p class="text-gray-400 text-xs">Web Design - Collaborate</p>
      </div>
      <div></div>
      <div>
        <div class="flex justify-between">
          <p class="text-gray-400 text-xs"><span>8</span> out of 10</p>
          <p class="text-gray-400 text-xs">2 days left</p>
        </div>
        <div class="h-[6px] w-full bg-gray-100 my-1">
          <div
            class="h-full bg-primaryColor rounded-md"
            :style="{ width: 80 + '%' }"
          ></div>
        </div>
      </div>

      <div class="flex items-center gap-3 text-xs text-gray-400 font-semibold">
        <div class="flex gap-2">
          <ChatBubbleLeftRightIcon class="h-4 text-gray-400" />
          <span class="">2</span>
        </div>
        <div class="flex gap-2">
          <LinkIcon class="h-4 text-gray-400" /> <span class="">1</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Project } from "../../types/index";
import { ChatBubbleLeftRightIcon, LinkIcon } from "@heroicons/vue/24/outline";
import ProjectImage from "@/assets/images/project-image.png";

defineProps<{
  project: Project;
}>();

// const emits = defineEmits<{
//   (e: "drag"): void;
// }>();

// const drag = (ev: DragEvent, taskId: number) => {
//   ev.dataTransfer!.setData("text", taskId.toString());
//   emits("drag");
// };
</script>
