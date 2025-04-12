import { createRouter, createWebHistory } from 'vue-router';
import allRoutes from './routes';
import NotFound from '@/components/NotFound.vue';
// import userRoutes from './users';

const routes = [...allRoutes, {
  path: '/:pathMatch(.*)*',
  name: 'NotFound',
  component: NotFound
}];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router
