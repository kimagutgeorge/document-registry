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

router.beforeEach((to, from, next) => {
  const isLoggedIn = localStorage.getItem('is_logged_in') === 'true';

  if (!isLoggedIn && to.path !== '/') {
    next('/');
  } else {
    next();
  }
});


export default router
