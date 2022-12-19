import Hidden from '@material-ui/core/Hidden';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import { navbarCloseMobile } from 'app/store/fuse/navbarSlice';
import NavbarStyle1Content from './NavbarStyle1Content';

const navbarWidth = 280;

const useStyles = makeStyles((theme) => ({
  navbar: {
    minWidth: navbarWidth,
    width: navbarWidth,
    maxWidth: navbarWidth,
    '&.closed': {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.leavingScreen,
      }),
      '&.left': {
        marginLeft: -navbarWidth,
      },
      '&.right': {
        marginRight: -navbarWidth,
      },
    },
    '&.opened': {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
  },
  navbarPaper: {
    minWidth: navbarWidth,
    width: navbarWidth,
    maxWidth: navbarWidth,
  },
}));

function NavbarStyle1(props) {
  const dispatch = useDispatch();
  const config = useSelector(({ fuse }) => fuse.settings.current.layout.config);
  const navbar = useSelector(({ fuse }) => fuse.navbar);
  const classes = useStyles({
    ...props,
    navbarPosition: config.navbar.position,
    open: navbar.open,
  });

  return (
    <>
      <Hidden mdDown>
        <div
          className={clsx(
            classes.navbar,
            classes.navbarPaper,
            config.navbar.position,
            navbar.open ? 'opened' : 'closed',
            'flex-col flex-auto sticky top-0 overflow-hidden h-screen flex-shrink-0 z-20 shadow-5'
          )}
        >
          <NavbarStyle1Content />
        </div>
      </Hidden>

      <Hidden lgUp>
        <SwipeableDrawer
          classes={{
            paper: clsx(classes.navbarPaper, 'flex-col flex-auto h-full'),
          }}
          anchor={config.navbar.position}
          variant="temporary"
          open={navbar.mobileOpen}
          onClose={() => dispatch(navbarCloseMobile())}
          onOpen={() => {}}
          disableSwipeToOpen
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          <NavbarStyle1Content />
        </SwipeableDrawer>
      </Hidden>
    </>
  );
}

export default NavbarStyle1;
