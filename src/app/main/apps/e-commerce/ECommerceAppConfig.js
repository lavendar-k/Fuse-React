import { lazy } from 'react';
import { Redirect } from 'react-router-dom';

const ECommerceAppConfig = {
  settings: {
    layout: {},
  },
  routes: [
    {
      path: '/apps/e-commerce/products/:productId/:productHandle?',
      component: lazy(() => import('./product/Product')),
    },
    {
      path: '/apps/e-commerce/products',
      component: lazy(() => import('./products/Products')),
    },
    {
      path: '/apps/e-commerce/orders/:orderId',
      component: lazy(() => import('./order/Order')),
    },
    {
      path: '/apps/e-commerce/orders',
      component: lazy(() => import('./orders/Orders')),
    },
    {
      path: '/apps/e-commerce',
      component: () => <Redirect to="/apps/e-commerce/products" />,
    },
  ],
};

export default ECommerceAppConfig;
