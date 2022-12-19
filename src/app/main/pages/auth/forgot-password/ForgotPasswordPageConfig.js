import { lazy } from 'react';

const ForgotPasswordPageConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/pages/auth/forgot-password',
      component: lazy(() => import('./ForgotPasswordPage')),
    },
  ],
};

export default ForgotPasswordPageConfig;
