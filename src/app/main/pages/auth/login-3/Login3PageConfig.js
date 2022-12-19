import { lazy } from 'react';

const Login3PageConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/pages/auth/login-3',
      component: lazy(() => import('./Login3Page')),
    },
  ],
};

export default Login3PageConfig;
