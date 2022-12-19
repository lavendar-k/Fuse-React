import { lazy } from 'react';

const CalendarAppConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/apps/calendar',
      component: lazy(() => import('./CalendarApp')),
    },
  ],
};

export default CalendarAppConfig;
