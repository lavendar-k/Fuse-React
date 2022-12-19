import { lazy } from 'react';

const KnowledgeBasePageConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/pages/knowledge-base',
      component: lazy(() => import('./KnowledgeBasePage')),
    },
  ],
};

export default KnowledgeBasePageConfig;
