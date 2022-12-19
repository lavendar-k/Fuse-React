import { lazy } from 'react';

const ResetPasswordPageConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/pages/auth/reset-password',
      component: lazy(() => import('./ResetPasswordPage')),
    },
  ],
};

export default ResetPasswordPageConfig;
