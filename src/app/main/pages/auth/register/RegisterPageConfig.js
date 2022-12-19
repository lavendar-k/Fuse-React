import { lazy } from 'react';

const RegisterPageConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/pages/auth/register',
      component: lazy(() => import('./RegisterPage')),
    },
  ],
};

export default RegisterPageConfig;
