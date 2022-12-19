import { lazy } from 'react';
import cardedLayoutRoutes from './page-layouts/carded/cardedLayoutRoutes';
import simpleLayoutRoutes from './page-layouts/simple/simpleLayoutRoutes';

const UserInterfaceConfig = {
  routes: [
    ...cardedLayoutRoutes,
    ...simpleLayoutRoutes,
    {
      path: '/ui/page-layouts/blank',
      component: lazy(() => import('./page-layouts/blank')),
    },
    {
      path: '/ui/icons',
      component: lazy(() => import('./icons/IconsUI')),
    },
    {
      path: '/ui/typography',
      component: lazy(() => import('./typography/TypographyUI')),
    },
    {
      path: '/ui/helper-classes',
      component: lazy(() => import('./helper-classes/HelperClassesUI')),
    },
  ],
};

export default UserInterfaceConfig;
