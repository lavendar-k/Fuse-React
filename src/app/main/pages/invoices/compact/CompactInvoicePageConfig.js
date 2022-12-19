import { lazy } from 'react';

const CompactInvoicePageConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/pages/invoices/compact',
      component: lazy(() => import('./CompactInvoicePage')),
    },
  ],
};

export default CompactInvoicePageConfig;
