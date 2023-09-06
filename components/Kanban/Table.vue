<template lang="">
  <Table>
    <TableHeader>
      <td
        v-for="header in TableHeaderData"
        v-bind:key="header.id"
        scope="col"
        :class="[
          {
            'w-[100px]': header.key === 'id',
          },
          'px-6 py-3 font-semibold tracking-wide cursor-pointer',
        ]"
      >
        <div class="flex items-center">
          {{ header.name }}
          <a v-if="header.sortable" href="#"><SortIcon /></a>
        </div>
      </td>
    </TableHeader>
    <tbody>
      <TableRow
        v-for="(item, index) in data"
        :key="item._id"
        :class="{
          'bg-white': index % 2 === 0,
          'bg-gray-100': index % 2 !== 0,
        }"
      >
        <TableColumn
          ><span class="flex w-20">#TASK-{{ index + 1 }}</span></TableColumn
        >
        <TableColumn>{{ item.title }}</TableColumn>
        <TableColumn>{{ item.category }}</TableColumn>
        <TableColumn>
          <span
            class="py-1 px-2 bg-[#fcefde] text-[#f2c37c] rounded-md text-xs font-semibold"
            >{{ item.priority }}</span
          ></TableColumn
        >
        <TableColumn>{{ item.status }}</TableColumn>
      </TableRow>
    </tbody>
  </Table>

  {{ console.log(data) }}
</template>
<script setup lang="ts">
import { TableHeaderData } from "../../constants";
defineProps<{
  data: any[];
}>();
</script>
<style lang=""></style>
