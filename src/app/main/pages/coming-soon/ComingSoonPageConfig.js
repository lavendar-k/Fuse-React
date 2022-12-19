import { lazy } from 'react';

const ComingSoonPageConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/pages/coming-soon',
      component: lazy(() => import('./ComingSoonPage')),
    },
  ],
};

export default ComingSoonPageConfig;
