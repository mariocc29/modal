import { createWebHashHistory, createRouter } from 'vue-router';
import MainView from '@/views/main.vue';

const routes = [
  { path: '/', component: MainView },
  { path: '/:pathMatch(.*)*', component: MainView }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
