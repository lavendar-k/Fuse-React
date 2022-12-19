import { lazy } from 'react';

const AnalyticsDashboardAppConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/apps/dashboards/analytics',
      component: lazy(() => import('./AnalyticsDashboardApp')),
    },
  ],
};

export default AnalyticsDashboardAppConfig;
