import { lazy } from 'react';

const MaterialUIComponentsRoutes = [
  {
    path: '/documentation/material-ui-components/accordion',
    component: lazy(() => import('app/main/documentation/material-ui-components/pages/Accordion')),
  },
  {
    path: '/documentation/material-ui-components/alert',
    component: lazy(() => import('app/main/documentation/material-ui-components/pages/Alert')),
  },
  {
    path: '/documentation/material-ui-components/app-bar',
    component: lazy(() => import('app/main/documentation/material-ui-components/pages/AppBar')),
  },
  {
    path: '/documentation/material-ui-components/autocomplete',
    component: lazy(() =>
      import('app/main/documentation/material-ui-components/pages/Autocomplete')
    ),
  },
  {
    path: '/documentation/material-ui-components/avatars',
    component: lazy(() => import('app/main/documentation/material-ui-components/pages/Avatars')),
  },
  {
    path: '/documentation/material-ui-components/backdrop',
    component: lazy(() => import('app/main/documentation/material-ui-components/pages/Backdrop')),
  },
  {
    path: '/documentation/material-ui-components/badges',
    component: lazy(() => import('app/main/documentation/material-ui-components/pages/Badges')),
  },
  {
    path: '/documentation/material-ui-components/bottom-navigation',
    component: lazy(() =>
      import('app/main/documentation/material-ui-components/pages/BottomNavigation')
    ),
  },
  {
    path: '/documentation/material-ui-components/box',
    component: lazy(() => import('app/main/documentation/material-ui-components/pages/Box')),
  },
  {
    path: '/documentation/material-ui-components/breadcrumbs',
    component: lazy(() =>
      import('app/main/documentation/material-ui-components/pages/Breadcrumbs')
    ),
  },
  {
    path: '/documentation/material-ui-components/button-group',
    component: lazy(() =>
      import('app/main/documentation/material-ui-components/pages/ButtonGroup')
    ),
  },
  {
    path: '/documentation/material-ui-components/buttons',
    component: lazy(() => import('app/main/documentation/material-ui-components/pages/Buttons')),
  },
  {
    path: '/documentation/material-ui-components/cards',
    component: lazy(() => import('app/main/documentation/material-ui-components/pages/Cards')),
  },
  {
    path: '/documentation/material-ui-components/checkboxes',
    component: lazy(() => import('app/main/documentation/material-ui-components/pages/Checkboxes')),
  },
  {
    path: '/documentation/material-ui-components/chips',
    component: lazy(() => import('app/main/documentation/material-ui-components/pages/Chips')),
  },
  {
    path: '/documentation/material-ui-components/click-away-listener',
    component: lazy(() =>
      import('app/main/documentation/material-ui-components/pages/ClickAwayListener')
    ),
  },
  {
    path: '/documentation/material-ui-components/container',
    component: lazy(() => import('app/main/documentation/material-ui-components/pages/Container')),
  },
  {
    path: '/documentation/material-ui-components/css-baseline',
    component: lazy(() =>
      import('app/main/documentation/material-ui-components/pages/CssBaseline')
    ),
  },
  {
    path: '/documentation/material-ui-components/dialogs',
    component: lazy(() => import('app/main/documentation/material-ui-components/pages/Dialogs')),
  },
  {
    path: '/documentation/material-ui-components/dividers',
    component: lazy(() => import('app/main/documentation/material-ui-components/pages/Dividers')),
  },
  {
    path: '/documentation/material-ui-components/drawers',
    component: lazy(() => import('app/main/documentation/material-ui-components/pages/Drawers')),
  },
  {
    path: '/documentation/material-ui-components/floating-action-button',
    component: lazy(() =>
      import('app/main/documentation/material-ui-components/pages/FloatingActionButton')
    ),
  },
  {
    path: '/documentation/material-ui-components/grid',
    component: lazy(() => import('app/main/documentation/material-ui-components/pages/Grid')),
  },
  {
    path: '/documentation/material-ui-components/hidden',
    component: lazy(() => import('app/main/documentation/material-ui-components/pages/Hidden')),
  },
  {
    path: '/documentation/material-ui-components/image-list',
    component: lazy(() => import('app/main/documentation/material-ui-components/pages/ImageList')),
  },
  {
    path: '/documentation/material-ui-components/links',
    component: lazy(() => import('app/main/documentation/material-ui-components/pages/Links')),
  },
  {
    path: '/documentation/material-ui-components/lists',
    component: lazy(() => import('app/main/documentation/material-ui-components/pages/Lists')),
  },
  {
    path: '/documentation/material-ui-components/menus',
    component: lazy(() => import('app/main/documentation/material-ui-components/pages/Menus')),
  },
  {
    path: '/documentation/material-ui-components/modal',
    component: lazy(() => import('app/main/documentation/material-ui-components/pages/Modal')),
  },
  {
    path: '/documentation/material-ui-components/no-ssr',
    component: lazy(() => import('app/main/documentation/material-ui-components/pages/NoSsr')),
  },
  {
    path: '/documentation/material-ui-components/pagination',
    component: lazy(() => import('app/main/documentation/material-ui-components/pages/Pagination')),
  },
  {
    path: '/documentation/material-ui-components/paper',
    component: lazy(() => import('app/main/documentation/material-ui-components/pages/Paper')),
  },
  {
    path: '/documentation/material-ui-components/pickers',
    component: lazy(() => import('app/main/documentation/material-ui-components/pages/Pickers')),
  },
  {
    path: '/documentation/material-ui-components/popover',
    component: lazy(() => import('app/main/documentation/material-ui-components/pages/Popover')),
  },
  {
    path: '/documentation/material-ui-components/popper',
    component: lazy(() => import('app/main/documentation/material-ui-components/pages/Popper')),
  },
  {
    path: '/documentation/material-ui-components/portal',
    component: lazy(() => import('app/main/documentation/material-ui-components/pages/Portal')),
  },
  {
    path: '/documentation/material-ui-components/progress',
    component: lazy(() => import('app/main/documentation/material-ui-components/pages/Progress')),
  },
  {
    path: '/documentation/material-ui-components/radio-buttons',
    component: lazy(() =>
      import('app/main/documentation/material-ui-components/pages/RadioButtons')
    ),
  },
  {
    path: '/documentation/material-ui-components/selects',
    component: lazy(() => import('app/main/documentation/material-ui-components/pages/Selects')),
  },
  {
    path: '/documentation/material-ui-components/slider',
    component: lazy(() => import('app/main/documentation/material-ui-components/pages/Slider')),
  },
  {
    path: '/documentation/material-ui-components/snackbars',
    component: lazy(() => import('app/main/documentation/material-ui-components/pages/Snackbars')),
  },
  {
    path: '/documentation/material-ui-components/steppers',
    component: lazy(() => import('app/main/documentation/material-ui-components/pages/Steppers')),
  },
  {
    path: '/documentation/material-ui-components/switches',
    component: lazy(() => import('app/main/documentation/material-ui-components/pages/Switches')),
  },
  {
    path: '/documentation/material-ui-components/tables',
    component: lazy(() => import('app/main/documentation/material-ui-components/pages/Tables')),
  },
  {
    path: '/documentation/material-ui-components/tabs',
    component: lazy(() => import('app/main/documentation/material-ui-components/pages/Tabs')),
  },
  {
    path: '/documentation/material-ui-components/text-fields',
    component: lazy(() => import('app/main/documentation/material-ui-components/pages/TextFields')),
  },
  {
    path: '/documentation/material-ui-components/textarea-autosize',
    component: lazy(() =>
      import('app/main/documentation/material-ui-components/pages/TextareaAutosize')
    ),
  },
  {
    path: '/documentation/material-ui-components/timeline',
    component: lazy(() => import('app/main/documentation/material-ui-components/pages/Timeline')),
  },
  {
    path: '/documentation/material-ui-components/tooltips',
    component: lazy(() => import('app/main/documentation/material-ui-components/pages/Tooltips')),
  },
  {
    path: '/documentation/material-ui-components/transfer-list',
    component: lazy(() =>
      import('app/main/documentation/material-ui-components/pages/TransferList')
    ),
  },
  {
    path: '/documentation/material-ui-components/transitions',
    component: lazy(() =>
      import('app/main/documentation/material-ui-components/pages/Transitions')
    ),
  },
  {
    path: '/documentation/material-ui-components/typography',
    component: lazy(() => import('app/main/documentation/material-ui-components/pages/Typography')),
  },
];

export default MaterialUIComponentsRoutes;
