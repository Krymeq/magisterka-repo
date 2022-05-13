import { defineStore } from 'pinia';
import { getDisciplines } from '@/api/backend';

export const useDisciplines = defineStore('disciplines', {
  state: () => {
    return {
      disciplines: [],
    }
  },
  actions: {
    async fetchDisciplines() {
      this.disciplines = await getDisciplines();
    }
  }
});