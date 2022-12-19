import { lazy } from 'react';

const PricingStyle1PageConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/pages/pricing/style-1',
      component: lazy(() => import('./PricingStyle1Page')),
    },
  ],
};

export default PricingStyle1PageConfig;
