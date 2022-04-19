<template>
  <div class="app-root">
    <MainList />
  </div>
</template>

<script>
import MainList from './components/MainList.vue';

export default {
  name: 'App',
  components: {
    MainList
  }
}
</script>

<style>
  .app-root {
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
