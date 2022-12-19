import { lazy } from 'react';

const Register2PageConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/pages/auth/register-2',
      component: lazy(() => import('./Register2Page')),
    },
  ],
};

export default Register2PageConfig;
