import { lazy } from 'react';

const ThemingDocRoutes = [
  {
    path: '/documentation/theming/theme-schemes',
    component: lazy(() => import('./theme-schemes/ThemeShemesDoc')),
  },
  {
    path: '/documentation/theming/theme-layouts',
    component: lazy(() => import('./theme-layouts/ThemeLayoutsDoc')),
  },
  {
    path: '/documentation/theming/page-layouts',
    component: lazy(() => import('./page-layouts/PageLayoutsDoc')),
  },
  {
    path: '/documentation/theming/rtl-support',
    component: lazy(() => import('./rtl-support/RTLSupportDoc')),
  },
  {
    path: '/documentation/theming/changing-default-font',
    component: lazy(() => import('./changing-default-font/ChangingDefaultFontDoc')),
  },
];

export default ThemingDocRoutes;
