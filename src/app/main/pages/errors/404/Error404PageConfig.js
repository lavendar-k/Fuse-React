import { lazy } from 'react';

const Error404PageConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/pages/errors/error-404',
      component: lazy(() => import('./Error404Page')),
    },
  ],
};

export default Error404PageConfig;
