import { lazy } from 'react';

const ModernSearchPageConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/pages/search/modern',
      component: lazy(() => import('./ModernSearchPage')),
    },
  ],
};

export default ModernSearchPageConfig;
