import { lazy } from 'react';

const FuseComponentsRoutes = [
  {
    path: '/documentation/fuse-components/fuse-theme',
    component: lazy(() => import('./fuse-theme/FuseThemeDoc')),
  },
  {
    path: '/documentation/fuse-components/fuse-authorization',
    component: lazy(() => import('./fuse-authorization/FuseAuthorizationDoc')),
  },
  {
    path: '/documentation/fuse-components/fuse-layout',
    component: lazy(() => import('./fuse-layout/FuseLayoutDoc')),
  },
  {
    path: '/documentation/fuse-components/fuse-page-carded',
    component: lazy(() => import('./fuse-page-carded/FusePageCardedDoc')),
  },
  {
    path: '/documentation/fuse-components/fuse-page-simple',
    component: lazy(() => import('./fuse-page-simple/FusePageSimpleDoc')),
  },
  {
    path: '/documentation/fuse-components/fuse-scrollbars',
    component: lazy(() => import('./fuse-scrollbars/FuseScrollbarsDoc')),
  },
  {
    path: '/documentation/fuse-components/fuse-highlight',
    component: lazy(() => import('./fuse-highlight/FuseHighlightDoc')),
  },
  {
    path: '/documentation/fuse-components/fuse-countdown',
    component: lazy(() => import('./fuse-countdown/FuseCountdownDoc')),
  },
  {
    path: '/documentation/fuse-components/fuse-navigation',
    component: lazy(() => import('./fuse-navigation/FuseNavigationDoc')),
  },
  {
    path: '/documentation/fuse-components/fuse-message',
    component: lazy(() => import('./fuse-message/FuseMessageDoc')),
  },
  {
    path: '/documentation/fuse-components/fuse-dialog',
    component: lazy(() => import('./fuse-dialog/FuseDialogDoc')),
  },
  {
    path: '/documentation/fuse-components/fuse-animate',
    component: lazy(() => import('./fuse-animate/FuseAnimateDoc')),
  },
  {
    path: '/documentation/fuse-components/fuse-animate-group',
    component: lazy(() => import('./fuse-animate-group/FuseAnimateGroupDoc')),
  },
  {
    path: '/documentation/fuse-components/fuse-chip-select',
    component: lazy(() => import('./fuse-chip-select/FuseChipSelectDoc')),
  },
];

export default FuseComponentsRoutes;
