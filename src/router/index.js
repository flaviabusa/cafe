import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AvaliacaoView from '@/views/AvaliacaoView.vue'
import RankingView from '@/views/RankingView.vue'
import CoffeeDetailsView from '@/views/CoffeeDetailsView.vue'
import NotFoundView from '@/views/NotFoundView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: 'Home',
    },
  },
  {
    path: '/avaliacoes',
    name: 'avaliacoes',
    component: AvaliacaoView,
    meta: {
      title: 'Avaliações',
    },
  },
  {
    path: '/ranking',
    name: 'ranking',
    component: RankingView,
    meta: {
      title: 'Ranking Geral',
    },
  },
  {
    path: '/coffee/:id',
    name: 'coffee-details',
    component: CoffeeDetailsView,
    meta: {
      title: 'Detalhes do Café',
    },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: NotFoundView,
    meta: {
      title: 'Página não encontrada',
    },
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Coffee Quality Challenge'
  next()
})

export default router
