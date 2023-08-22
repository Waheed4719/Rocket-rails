<template lang="">
  <Table :data="data">
    <template #body>
      <TableRow
        v-for="(item, index) in data"
        :key="item._id"
        :class="{
          'bg-white': index % 2 === 0,
          'bg-gray-100': index % 2 !== 0,
        }"
      >
        <TableCol>{{ index + 1 }}</TableCol>
        <TableCol>{{ item.title }}</TableCol>
        <TableCol>{{ item.category }}</TableCol>
        <TableCol>
          <span
            class="py-1 px-2 bg-[#fcefde] text-[#f2c37c] rounded-md text-xs font-semibold"
            >{{ item.priority }}</span
          ></TableCol
        >
        <TableCol>{{ item.status }}</TableCol>
      </TableRow>
    </template>
  </Table>

  {{ console.log(data) }}
</template>
<script setup lang="ts">
defineProps<{
  data: any[];
}>();
</script>
<style lang=""></style>
