<template>
  <div class="page-root">
    <div class="link-root" v-for="discipline in store.disciplines" :key="discipline.id">
      <router-link :to="`/disciplines/${discipline.id}/tournaments`" class='discipline-link'>
        {{discipline.name}}
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { useDisciplines } from '../store/disciplineStore';

const store = useDisciplines();
store.fetchDisciplines();

</script>

<style lang="scss">
.page-root {
  margin: 20px auto;
  max-width: 1200px;

  .link-root {
    margin-bottom: 5px;
  }

  .discipline-link {
    color: #009;
    text-decoration: none;
    font-size: 1.1em;
    background-color: #def;
    display: block;
    padding: 12px;
    border-radius: 10px;
    &:hover {
      background-color: #ace;
    }
  }
}
</style>