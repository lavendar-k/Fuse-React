import { lazy } from 'react';

const ModernInvoicePageConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/pages/invoices/modern',
      component: lazy(() => import('./ModernInvoicePage')),
    },
  ],
};

export default ModernInvoicePageConfig;
