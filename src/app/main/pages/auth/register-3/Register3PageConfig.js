import { lazy } from 'react';

const Register3PageConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/pages/auth/register-3',
      component: lazy(() => import('./Register3Page')),
    },
  ],
};

export default Register3PageConfig;
