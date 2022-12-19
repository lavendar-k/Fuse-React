import { lazy } from 'react';

const AuthenticationDocRoutes = [
  {
    path: '/documentation/authentication/jwt',
    component: lazy(() => import('./jwt/jwtAuthDoc')),
  },
  {
    path: '/documentation/authentication/firebase',
    component: lazy(() => import('./firebase/FirebaseAuthDoc')),
  },
  {
    path: '/documentation/authentication/auth0',
    component: lazy(() => import('./auth0/Auth0AuthDoc')),
  },
];

export default AuthenticationDocRoutes;
