import { lazy } from 'react';

const PricingStyle2PageConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/pages/pricing/style-2',
      component: lazy(() => import('./PricingStyle2Page')),
    },
  ],
};

export default PricingStyle2PageConfig;
