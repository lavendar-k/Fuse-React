import { lazy } from 'react';

const ConfigurationDocRoutes = [
  {
    path: '/documentation/configuration/settings',
    component: lazy(() => import('./settings/SettingsDoc')),
  },
  {
    path: '/documentation/configuration/routing',
    component: lazy(() => import('./routing/RoutingDoc')),
  },
  {
    path: '/documentation/configuration/navigation',
    component: lazy(() => import('./navigation/NavigationDoc')),
  },
  {
    path: '/documentation/configuration/code-splitting',
    component: lazy(() => import('./code-splitting/CodeSplittingDoc')),
  },
  {
    path: '/documentation/configuration/multi-language',
    component: lazy(() => import('./multi-language/MultiLanguageDoc')),
  },
];

export default ConfigurationDocRoutes;
