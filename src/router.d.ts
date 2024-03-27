import { Router } from 'vue-router';

interface RouteConfig {
  path: string;
  component: any;
  meta?: any;
}

declare const router: Router;

export default router;
