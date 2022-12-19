import { lazy } from 'react';
import { Redirect } from 'react-router-dom';

const TodoAppConfig = {
  settings: {
    layout: {},
  },
  routes: [
    {
      path: [
        '/apps/todo/label/:labelHandle/:todoId?',
        '/apps/todo/filter/:filterHandle/:todoId?',
        '/apps/todo/:folderHandle/:todoId?',
      ],
      component: lazy(() => import('./TodoApp')),
    },
    {
      path: '/apps/todo',
      component: () => <Redirect to="/apps/todo/all" />,
    },
  ],
};

export default TodoAppConfig;
