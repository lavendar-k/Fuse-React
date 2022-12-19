import { lazy } from 'react';

const FaqPageConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/pages/faq',
      component: lazy(() => import('./FaqPage')),
    },
  ],
};

export default FaqPageConfig;
