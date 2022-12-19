import Hidden from '@material-ui/core/Hidden';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import { navbarCloseFolded, navbarOpenFolded, navbarCloseMobile } from 'app/store/fuse/navbarSlice';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import NavbarStyle2Content from './NavbarStyle2Content';

const navbarWidth = 280;

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    zIndex: 4,
    [theme.breakpoints.up('lg')]: {
      width: navbarWidth,
      minWidth: navbarWidth,
    },
  },
  wrapperFolded: {
    [theme.breakpoints.up('lg')]: {
      width: 64,
      minWidth: 64,
    },
  },
  navbar: {
    minWidth: navbarWidth,
    width: navbarWidth,
    maxWidth: navbarWidth,
    maxHeight: '100%',
    transition: theme.transitions.create(['width', 'min-width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.shorter,
    }),
  },
  left: {
    left: 0,
  },
  right: {
    right: 0,
  },
  folded: {
    position: 'absolute',
    width: 64,
    minWidth: 64,
    top: 0,
    bottom: 0,
  },
  foldedAndOpened: {
    width: navbarWidth,
    minWidth: navbarWidth,
  },
  navbarContent: {},
  foldedAndClosed: {
    '& $navbarContent': {
      '& .logo-icon': {
        width: 32,
        height: 32,
      },
      '& .logo-text': {
        opacity: 0,
      },
      '& .react-badge': {
        opacity: 0,
      },
      '& .fuse-list-item-text, & .arrow-icon, & .item-badge': {
        opacity: 0,
      },
      '& .fuse-list-subheader .fuse-list-subheader-text': {
        opacity: 0,
      },
      '& .fuse-list-subheader:before': {
        content: '""',
        display: 'block',
        position: 'absolute',
        minWidth: 16,
        borderTop: '2px solid',
        opacity: 0.2,
      },
      '& .collapse-children': {
        display: 'none',
      },
      '& .user': {
        '& .username, & .email': {
          opacity: 0,
        },
        '& .avatar': {
          width: 40,
          height: 40,
          bottom: 104,
          padding: 0,
        },
      },
      '& .fuse-list-item.active': {
        width: 44,
      },
    },
  },
}));

function NavbarStyle2(props) {
  const dispatch = useDispatch();
  const config = useSelector(({ fuse }) => fuse.settings.current.layout.config);
  const navbar = useSelector(({ fuse }) => fuse.navbar);
  const classes = useStyles({
    ...props,
    navbarPosition: config.navbar.position,
    open: navbar.open,
  });
  // const folded = !navbar.open;
  const { folded } = config.navbar;
  const foldedAndClosed = folded && !navbar.foldedOpen;
  const foldedAndOpened = folded && navbar.foldedOpen;

  return (
    <>
      <div
        id="fuse-navbar"
        className={clsx(
          classes.wrapper,
          folded && classes.wrapperFolded,
          'sticky top-0 h-screen flex-shrink-0 z-20 shadow-5'
        )}
      >
        <Hidden mdDown>
          <div
            className={clsx(
              classes.navbar,
              classes[config.navbar.position],
              folded && classes.folded,
              foldedAndOpened && classes.foldedAndOpened,
              foldedAndClosed && classes.foldedAndClosed,
              'flex-col flex-auto'
            )}
            onMouseEnter={() => foldedAndClosed && dispatch(navbarOpenFolded())}
            onMouseLeave={() => foldedAndOpened && dispatch(navbarCloseFolded())}
          >
            <NavbarStyle2Content className={classes.navbarContent} />
          </div>
        </Hidden>

        <Hidden lgUp>
          <SwipeableDrawer
            anchor={config.navbar.position}
            variant="temporary"
            open={navbar.mobileOpen}
            classes={{
              paper: clsx(classes.navbar, 'flex-col flex-auto h-full'),
            }}
            onClose={() => dispatch(navbarCloseMobile())}
            onOpen={() => {}}
            disableSwipeToOpen
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            <NavbarStyle2Content className={classes.navbarContent} />
          </SwipeableDrawer>
        </Hidden>
      </div>
    </>
  );
}

export default NavbarStyle2;
