import { lazy } from 'react';

const LockPageConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/pages/auth/lock',
      component: lazy(() => import('./LockPage')),
    },
  ],
};

export default LockPageConfig;
