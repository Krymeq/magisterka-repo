<template>
  <div>
    <ListItem v-for="item in state" :key="item.id" :item="item" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import ListItem from "./ListItem.vue";

const state = ref([]);

fetch("http://localhost:3456/list")
  .then((res) => res.json())
  .then((res) => {
    state.value = res;
  });
</script>


