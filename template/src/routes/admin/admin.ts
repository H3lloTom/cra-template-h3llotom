import loadable from '@loadable/component';

const routes = [
  {
    path: '/admin/dashboard',
    label: '大盘',
    iconType: 'dashboardApp',
    component: loadable(() => import('pages/dashboard'))
  },
  {
    path: '/admin/list',
    label: '列表',
    iconType: 'reportingApp',
    component: loadable(() => import('pages/list'))
  }
]

export default routes;
