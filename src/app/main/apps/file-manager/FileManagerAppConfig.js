import { lazy } from 'react';

const FileManagerAppConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/apps/file-manager',
      component: lazy(() => import('./FileManagerApp')),
    },
  ],
};

export default FileManagerAppConfig;
