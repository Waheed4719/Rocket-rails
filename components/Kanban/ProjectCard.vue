<template>
  <div
    class="flex flex-col bg-white shadow-md rounded-lg border "
    draggable="true"
  >
    <img :src="ProjectImage" class="object-cover" />
    <div class="px-4 py-2 flex flex-col gap-1">
      <div>
        <h5 class="text-gray-400 text-xs font-semibold">
          {{ project.category }}
        </h5>
        <h3 class="font-bold text-gray-600">{{ project.title }}</h3>
      </div>
      <div class="h-[1px] w-full bg-gray-100 my-1"></div>
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
