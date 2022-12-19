import { lazy } from 'react';

const ResetPassword2PageConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/pages/auth/reset-password-2',
      component: lazy(() => import('./ResetPassword2Page')),
    },
  ],
};

export default ResetPassword2PageConfig;
