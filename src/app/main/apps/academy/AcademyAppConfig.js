import { lazy } from 'react';
import { Redirect } from 'react-router-dom';

const AcademyAppConfig = {
  settings: {
    layout: {},
  },
  routes: [
    {
      path: '/apps/academy/courses/:courseId/:courseHandle?',
      component: lazy(() => import('./course/Course')),
    },
    {
      path: '/apps/academy/courses',
      component: lazy(() => import('./courses/Courses')),
    },
    {
      path: '/apps/academy',
      component: () => <Redirect to="/apps/academy/courses" />,
    },
  ],
};

export default AcademyAppConfig;
