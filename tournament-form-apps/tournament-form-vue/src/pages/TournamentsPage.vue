<template>
  <div class="tournament-container">
    <div class="page-control">
      <button class="control-button" @click="() => { loadTournaments(page + 1) }">
        +1
      </button>
      <button v-if="page > 1" class="control-button" @click="() => { loadTournaments(page - 1) }">
        -1
      </button>
      <span>Current page: {{ page }}</span>
    </div>

    <div v-for="tournament in state.tournaments" class="tournament-node" :key="tournament.id">
      <span>{{ tournament.name }}</span>
      <button class="apply-button" @click="this.selectTournament(tournament.id)">
        Sign in
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useTournaments } from '@/store/tournamentsStore';
import { useRoute } from "vue-router";

const page = ref(1);
const route = useRoute();
const state = useTournaments();
const loadTournaments = (newPage) => {
  page.value = newPage;
  state.fetchTournaments(route.params.disciplineId, newPage);
}

loadTournaments(page.value);

</script>

<style lang="scss">
.tournament-container {
  max-width: 1200px;
  margin: 20px auto;

  .page-control {
    margin-bottom: 10px;

    .control-button {
      border: none;
      cursor: pointer;
      padding: 7px 15px;
      border-radius: 5px;
      margin-right: 5px;
    }
  }

  .tournament-node {
    font-size: 1.1em;
    background-color: #def;
    display: flex;
    justify-content: space-between;
    padding: 12px;
    margin-bottom: 10px;
    border-radius: 10px;
  }

  .apply-button {
    all: unset;
    margin-left: 300px;
    text-transform: uppercase;
    letter-spacing: 1px;
    user-select: none;
    color: #00a;
    cursor: pointer;
    &:hover {
      color: #39f;
    }

    &:active {
      color: #6cf;
    }
  }
}

</style>