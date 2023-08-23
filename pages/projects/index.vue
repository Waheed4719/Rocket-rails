<template>
  <div class="px-8">
    <BreadCrumbs :crumbs="breadCrumbs"/>
    <div class="flex justify-between">
      <h1 class="text-3xl font-bold text-gray-700">🚀 All Projects</h1>
    </div>
  </div>
  <div class="h-[1px] w-full bg-gray-200 my-5"></div>
  <div
    class="grid px-8"
    style="grid-template-columns: repeat(6, minmax(320px, 1fr))"
  >
    <nuxt-link
      v-for="project in projects"
      :key="(project._id as string)"
      :to="`/projects/${project._id}`"
      
    >
      <ProjectCard
        :project="project"
      />
    </nuxt-link>
    <div></div>
  </div>
</template>
<script setup lang="ts">
import ProjectCard from "@/components/Kanban/ProjectCard.vue";
import { Project } from "types";


definePageMeta({
  layout: "authenticated",
  key: "projects",
});

useSeoMeta({
  title: "Projects",
  description: "Projects",
  keywords: "Projects",
});

const breadCrumbs = [
  { name: "Projects", href: "/projects", disabled: true },
];

type ProjectResponse = {
  projects: Project[];
};

let projects = reactive<Project[]>([]);

const { data: projectsData } = useFetch<ProjectResponse>("/api/projects");

watchEffect(() => {
  if (projectsData.value) {
    projects.splice(
      0,
      projects.length,
      ...(projectsData.value?.projects || [])
    );
  }
});

let isThrottled = false;

function throttle(fn: Function, delay: number) {
  if (!isThrottled) {
    fn();
    isThrottled = true;
    setTimeout(() => {
      isThrottled = false;
    }, delay);
  }
}
</script>
