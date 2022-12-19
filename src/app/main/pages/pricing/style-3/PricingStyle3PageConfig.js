import { lazy } from 'react';

const PricingStyle3PageConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/pages/pricing/style-3',
      component: lazy(() => import('./PricingStyle3Page')),
    },
  ],
};

export default PricingStyle3PageConfig;
