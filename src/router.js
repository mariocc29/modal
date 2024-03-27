import { createWebHashHistory, createRouter } from 'vue-router';
import MainPage from '@/pages/MainPage.vue';

const routes = [
  { path: '/', component: MainPage },
  { path: '/:pathMatch(.*)*', component: MainPage }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
