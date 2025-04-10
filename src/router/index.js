import { createRouter, createWebHistory } from 'vue-router';
import allRoutes from './routes';
// import userRoutes from './users';

const routes = [...allRoutes/*, ...userRoutes*/];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router
