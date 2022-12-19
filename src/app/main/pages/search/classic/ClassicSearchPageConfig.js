import { lazy } from 'react';

const ClassicSearchPageConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/pages/search/classic',
      component: lazy(() => import('./ClassicSearchPage')),
    },
  ],
};

export default ClassicSearchPageConfig;
