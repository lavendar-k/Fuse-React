import { lazy } from 'react';

const DevelopmentDocRoutes = [
  {
    path: '/documentation/development/development-server',
    component: lazy(() => import('./development-server/DevelopmentServerDoc')),
  },
  {
    path: '/documentation/development/production',
    component: lazy(() => import('./production/ProductionDoc')),
  },
  {
    path: '/documentation/development/deployment',
    component: lazy(() => import('./deployment/DeploymentDoc')),
  },
  {
    path: '/documentation/development/project-structure',
    component: lazy(() => import('./project-structure/ProjectStructureDoc')),
  },
  {
    path: '/documentation/development/api-calls',
    component: lazy(() => import('./api-calls/ApiCallsDoc')),
  },
  {
    path: '/documentation/development/updating-fuse-react',
    component: lazy(() => import('./updating-fuse-react/UpdatingFuseReactDoc')),
  },
  {
    path: '/documentation/development/ides-vscode-webstorm',
    component: lazy(() => import('./ides-vscode-webstorm/IDEsDoc')),
  },
  {
    path: '/documentation/development/heroku-notes',
    component: lazy(() => import('./heroku-notes/HerokuNotesDoc')),
  },
];

export default DevelopmentDocRoutes;
