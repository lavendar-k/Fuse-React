import { lazy } from 'react';

const LoginPageConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/pages/auth/login',
      component: lazy(() => import('./LoginPage')),
    },
  ],
};

export default LoginPageConfig;
