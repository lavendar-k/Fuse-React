import { lazy } from 'react';

const MailConfirmPageConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/pages/auth/mail-confirm',
      component: lazy(() => import('./MailConfirmPage')),
    },
  ],
};

export default MailConfirmPageConfig;
