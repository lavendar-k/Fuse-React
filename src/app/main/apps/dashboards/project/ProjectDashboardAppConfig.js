import { lazy } from 'react';

const ProjectDashboardAppConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/apps/dashboards/project',
      component: lazy(() => import('./ProjectDashboardApp')),
    },
  ],
};

export default ProjectDashboardAppConfig;
