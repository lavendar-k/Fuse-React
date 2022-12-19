import { lazy } from 'react';

const GettingStartedDocRoutes = [
  {
    path: '/documentation/getting-started/introduction',
    component: lazy(() => import('./introduction/IntroductionDoc')),
  },
  {
    path: '/documentation/getting-started/installation',
    component: lazy(() => import('./installation/InstallationDoc')),
  },
  {
    path: '/documentation/getting-started/git-repository',
    component: lazy(() => import('./git-repository/GitRepositoryDoc')),
  },
];

export default GettingStartedDocRoutes;
