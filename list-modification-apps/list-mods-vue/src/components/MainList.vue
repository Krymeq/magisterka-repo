<template>
  <div>
    <div class="button-panel">
      <button @click="removeFivePercent">Remove 5%</button>
      <button @click="removeHalf">Remove 50%</button>
      <button @click="modifyFivePercent">Modify 5%</button>
      <button @click="modifyHalf">Modify 50%</button>
      <button @click="addFivePercent">Add 5%</button>
      <button @click="addHalf">Add 50%</button>
    </div>
    <div class="list-container">
      <ListItem v-for="item in list" :key="item.id" :item="item" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import ListItem from "./ListItem.vue";

const list = ref([]);

const createElements = (startingId, amount) => Array(amount).fill(0).map((_, index) => ({
  id: startingId + index,
  header: `Added element ${startingId + index}`,
  text: `Added element text text text text text text text text ${startingId + index}`,
}));

fetch("http://localhost:3456/list")
  .then((res) => res.json())
  .then((res) => {
    list.value = res;
  });

const removeHalf = () => {
  list.value = list.value.filter((elem, index) => index % 2 === 0);
}

const removeFivePercent = () => {
  list.value = list.value.filter((elem, index) => index % 20 === 0);
}

const modifyHalf = () => {
  list.value = list.value.map((elem, index) => {
    if (index % 2 !== 0) return elem;
    else return {
      id: elem.id,
      header: `Header: ${elem.id}`,
      text: `sampletextsampletextsampletextsampletextsampletext ${elem.id}`
    }
  })
}

const modifyFivePercent = () => {
  list.value = list.value.map((elem, index) => {
    if (index % 20 !== 0) return elem;
    else return {
      id: elem.id,
      header: `Header: ${elem.id}`,
      text: `sampletextsampletextsampletextsampletextsampletext ${elem.id}`
    }
  })
}

const addHalf = () => {
  const newElements = createElements(list.value.length + 1, list.value.length / 2);
  list.value = [...list.value, ...newElements];
}

const addFivePercent = () => {
  const newElements = createElements(list.value.length + 1, list.value.length / 20);
  list.value = [...list.value, ...newElements];
}
</script>


