import { getTournaments } from '@/api/backend';
import { defineStore } from 'pinia';

export const useTournaments = defineStore('tournaments', {
  state: () => {
    return {
      tournaments: [],
      selectedTournament: undefined,
    }
  },
  actions: {
    async fetchTournaments(disciplineId, page) {
      this.tournaments = await getTournaments(disciplineId, page)
    },

    selectTournament(tournamentId) {
      this.selectedTournament = tournamentId;
    }
  }
});
