import { createRouter, createWebHistory } from 'vue-router';
import DisciplinesPage from './pages/DisciplinesPage.vue';
import TournamentsPage from './pages/TournamentsPage.vue';

const routes = [
  {
    path:'/disciplines/:disciplineId/tournaments',
    name: 'tournaments',
    component: TournamentsPage,
  },
  {
    path: '/disciplines',
    name: 'disciplines',
    component: DisciplinesPage,
  },
  {
    path: '/',
    redirect: '/disciplines'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
