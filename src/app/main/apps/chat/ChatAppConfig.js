import { lazy } from 'react';

const ChatAppConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/apps/chat',
      component: lazy(() => import('./ChatApp')),
    },
  ],
};

export default ChatAppConfig;
