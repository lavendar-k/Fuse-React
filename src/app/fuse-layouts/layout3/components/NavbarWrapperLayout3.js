import Hidden from '@material-ui/core/Hidden';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import NavbarToggleFab from 'app/fuse-layouts/shared-components//NavbarToggleFab';
import { navbarCloseMobile } from 'app/store/fuse/navbarSlice';
import clsx from 'clsx';
import { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectNavbarTheme } from 'app/store/fuse/settingsSlice';
import NavbarLayout3 from './NavbarLayout3';
import NavbarMobileLayout3 from './NavbarMobileLayout3';

const navbarWidth = 280;

const useStyles = makeStyles((theme) => ({
  navbar: {
    height: 64,
    minHeight: 64,
    maxHeight: 64,
  },
  navbarMobile: {
    width: navbarWidth,
    minWidth: navbarWidth,
    transition: theme.transitions.create(['width', 'min-width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.shorter,
    }),
  },
}));

function NavbarWrapperLayout3(props) {
  const dispatch = useDispatch();
  const config = useSelector(({ fuse }) => fuse.settings.current.layout.config);
  const navbarTheme = useSelector(selectNavbarTheme);
  const navbar = useSelector(({ fuse }) => fuse.navbar);

  const classes = useStyles(props);

  return (
    <>
      <ThemeProvider theme={navbarTheme}>
        <Hidden mdDown>
          <NavbarLayout3 className={clsx(classes.navbar, props.className)} />
        </Hidden>

        <Hidden lgUp>
          <SwipeableDrawer
            anchor="left"
            variant="temporary"
            open={navbar.mobileOpen}
            classes={{
              paper: clsx(classes.navbarMobile, 'flex-col flex-auto h-full'),
            }}
            onClose={() => dispatch(navbarCloseMobile())}
            onOpen={() => {}}
            disableSwipeToOpen
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            <NavbarMobileLayout3 />
          </SwipeableDrawer>
        </Hidden>
      </ThemeProvider>

      {config.navbar.display && !config.toolbar.display && (
        <Hidden lgUp>
          <NavbarToggleFab />
        </Hidden>
      )}
    </>
  );
}

export default memo(NavbarWrapperLayout3);
