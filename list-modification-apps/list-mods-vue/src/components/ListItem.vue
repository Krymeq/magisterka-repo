<template>
  <div class="root">
    <div class="id-container">{{ props.item.id }}</div>
    <div>
      <div>{{ props.item.header }}</div>
      <div>{{ props.item.text }}</div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps(["item"]);
</script>

<style>
.root {
  margin-bottom: 10px;
  display: flex;
  padding: 10px;
  background-color: #f5f5f5;
}

.id-container {
  text-align: center;
  padding: 5px;
  margin-right: 10px;
  display: flex;
  align-items: center;
}
</style>