import FuseDialog from '@fuse/core/FuseDialog';
import FuseMessage from '@fuse/core/FuseMessage';
import FuseSuspense from '@fuse/core/FuseSuspense';
import { makeStyles } from '@material-ui/core/styles';
import AppContext from 'app/AppContext';
import SettingsPanel from 'app/fuse-layouts/shared-components/SettingsPanel';
import clsx from 'clsx';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import FooterLayout2 from './components/FooterLayout2';
import LeftSideLayout2 from './components/LeftSideLayout2';
import NavbarWrapperLayout2 from './components/NavbarWrapperLayout2';
import RightSideLayout2 from './components/RightSideLayout2';
import ToolbarLayout2 from './components/ToolbarLayout2';

const useStyles = makeStyles((theme) => ({
  root: {
    '&.boxed': {
      clipPath: 'inset(0)',
      maxWidth: (props) => `${props.config.containerWidth}px`,
      margin: '0 auto',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    },
    '&.container': {
      '& .container': {
        maxWidth: (props) => `${props.config.containerWidth}px`,
        width: '100%',
        margin: '0 auto',
      },
    },
  },
}));

function Layout2(props) {
  const config = useSelector(({ fuse }) => fuse.settings.current.layout.config);
  const classes = useStyles({ ...props, config });

  return (
    <AppContext.Consumer>
      {({ routes }) => (
        <div id="fuse-layout" className={clsx(classes.root, config.mode, 'w-full flex flex')}>
          {config.leftSidePanel.display && <LeftSideLayout2 />}

          <div className="flex flex-col flex-auto min-w-0">
            <main id="fuse-main" className="flex flex-col flex-auto min-h-screen min-w-0 relative">
              {config.navbar.display && (
                <NavbarWrapperLayout2
                  className={clsx(config.navbar.style === 'fixed' && 'sticky top-0 z-50')}
                />
              )}

              {config.toolbar.display && (
                <ToolbarLayout2
                  className={clsx(
                    config.toolbar.style === 'fixed' && 'sticky top-0',
                    config.toolbar.position === 'above' && 'order-first z-40'
                  )}
                />
              )}

              <div className="sticky top-0 z-99">
                <SettingsPanel />
              </div>

              <div className="flex flex-col flex-auto min-h-0 relative z-10">
                <FuseDialog />

                <FuseSuspense>{renderRoutes(routes)}</FuseSuspense>

                {props.children}
              </div>

              {config.footer.display && (
                <FooterLayout2 className={config.footer.style === 'fixed' && 'sticky bottom-0'} />
              )}
            </main>
          </div>

          {config.rightSidePanel.display && <RightSideLayout2 />}
          <FuseMessage />
        </div>
      )}
    </AppContext.Consumer>
  );
}

export default memo(Layout2);
