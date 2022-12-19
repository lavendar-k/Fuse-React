import { lazy } from 'react';

const MaintenancePageConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/pages/maintenance',
      component: lazy(() => import('./MaintenancePage')),
    },
  ],
};

export default MaintenancePageConfig;
