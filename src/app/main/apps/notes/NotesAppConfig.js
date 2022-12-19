import { lazy } from 'react';

const NotesAppConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/apps/notes/:id?/:labelHandle?/:labelId?',
      component: lazy(() => import('./NotesApp')),
    },
  ],
};

export default NotesAppConfig;
