import loadable from '@loadable/component';
import adminRoutes from './admin';

const routes = [
  {
    component: loadable(() => import('pages/root')),
    routes: [
      {
        path: '/login',
        component: loadable(() => import('pages/login'))
      },
      {
        path: '/admin',
        component: loadable(() => import('layouts/Admin')),
        routes: adminRoutes
      },
      {
        path: '*',
        component: loadable(() => import('pages/404'))
      }
    ]
  }

]

export default routes;
