import Hidden from '@material-ui/core/Hidden';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import clsx from 'clsx';
import { useRef } from 'react';

import FuseNavigation from '@fuse/core/FuseNavigation/FuseNavigation';
import FusePageSimple from '@fuse/core/FusePageSimple/FusePageSimple';
import FuseSuspense from '@fuse/core/FuseSuspense';
import { renderRoutes } from 'react-router-config';
import { Link } from 'react-router-dom';

import DocumentationNavigation from './DocumentationNavigation';
import DocumentationPageBreadcrumb from './DocumentationPageBreadcrumb';

function DocumentationPageLayout({ content, route }) {
  const pageLayout = useRef(null);

  return (
    <FusePageSimple
      classes={{
        root: 'h-full',
        contentWrapper: '',
        content: 'p-16 md:p-24 flex flex-col h-full',
        leftSidebar: 'w-288 pt-8',
        header: 'h-64 min-h-64',
        wrapper: 'min-h-0',
      }}
      header={
        <div className="flex items-center justify-center px-4 md:px-12 h-full w-full">
          <Hidden lgUp>
            <IconButton
              onClick={(ev) => pageLayout.current.toggleLeftSidebar()}
              aria-label="open left sidebar"
            >
              <Icon>menu</Icon>
            </IconButton>
          </Hidden>
          <div className="flex flex-1 items-center sm:justify-center px-8 lg:px-12">
            <Link
              color="inherit"
              to="/documentation"
              className="text-14 md:text-18 font-medium flex items-center"
              role="button"
            >
              <Icon className="mr-8">import_contacts</Icon> <span>Fuse React - Documentation</span>
            </Link>
          </div>
        </div>
      }
      content={
        <div className="max-w-2xl min-h-full flex flex-auto flex-col">
          <DocumentationPageBreadcrumb />
          <div className="flex flex-col flex-1 relative py-32">
            <FuseSuspense>{renderRoutes(route.routes)}</FuseSuspense>
          </div>
        </div>
      }
      leftSidebarContent={
        <FuseNavigation
          className={clsx('navigation')}
          navigation={DocumentationNavigation.children}
        />
      }
      innerScroll
      ref={pageLayout}
    />
  );
}

export default DocumentationPageLayout;
