import { lazy } from 'react';
import { Redirect } from 'react-router-dom';
import AuthenticationDocRoutes from './authentication/AuthenticationDocRoutes';
import DevelopmentDocRoutes from './development/DevelopmentDocRoutes';
import FuseComponentsRoutes from './fuse-components/FuseComponentsRoutes';
import GettingStartedDocRoutes from './getting-started/GettingStartedDocRoutes';
import MaterialUIComponentsRoutes from './material-ui-components/MaterialUIComponentsRoutes';
import ThemingDocRoutes from './theming/ThemingDocRoutes';
import ThirdPartyComponentsRoutes from './third-party-components/ThirdPartyComponentsRoutes';
import ConfigurationDocRoutes from './configuration/ConfigurationDocRoutes';

const DocumentationConfig = {
  routes: [
    {
      path: '/documentation',
      component: lazy(() => import('./DocumentationPageLayout')),
      routes: [
        {
          path: '/documentation/changelog',
          component: lazy(() => import('./changelog/ChangelogDoc')),
        },
        ...GettingStartedDocRoutes,
        ...DevelopmentDocRoutes,
        ...ThemingDocRoutes,
        ...ConfigurationDocRoutes,
        ...AuthenticationDocRoutes,
        ...FuseComponentsRoutes,
        ...MaterialUIComponentsRoutes,
        ...ThirdPartyComponentsRoutes,
        {
          path: '/documentation',
          component: () => <Redirect to="/documentation/getting-started/introduction" />,
        },
      ],
    },
  ],
};

export default DocumentationConfig;
