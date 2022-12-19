import { lazy } from 'react';
import { Redirect } from 'react-router-dom';

const ScrumboardAppConfig = {
  settings: {
    layout: {},
  },
  routes: [
    {
      path: '/apps/scrumboard/boards/:boardId/:boardUri?',
      component: lazy(() => import('./board/Board')),
    },
    {
      path: '/apps/scrumboard/boards',
      component: lazy(() => import('./boards/Boards')),
    },
    {
      path: '/apps/scrumboard',
      component: () => <Redirect to="/apps/scrumboard/boards" />,
    },
  ],
};

export default ScrumboardAppConfig;
