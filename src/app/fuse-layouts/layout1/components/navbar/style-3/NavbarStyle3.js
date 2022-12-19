import Hidden from '@material-ui/core/Hidden';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import { navbarCloseMobile } from 'app/store/fuse/navbarSlice';
import NavbarStyle3Content from './NavbarStyle3Content';

const navbarWidth = 120;
const navbarWidthDense = 64;
const panelWidth = 280;

const useStyles = makeStyles((theme) => ({
  '@global': {
    '#fuse-navbar-side-panel': {
      width: (props) => (props.dense ? navbarWidthDense : navbarWidth),
      minWidth: (props) => (props.dense ? navbarWidthDense : navbarWidth),
      maxWidth: (props) => (props.dense ? navbarWidthDense : navbarWidth),
    },
    '#fuse-navbar-panel': {
      maxWidth: '100%',
      width: panelWidth,
      [theme.breakpoints.up('lg')]: {
        minWidth: panelWidth,
        maxWidth: 'initial',
      },
    },
  },
  navbar: {
    minWidth: navbarWidth,
    width: navbarWidth,
    maxWidth: navbarWidth,
    '&.dense': {
      minWidth: navbarWidthDense,
      width: navbarWidthDense,
      maxWidth: navbarWidthDense,
      '&.closed': {
        '&.left': {
          marginLeft: -navbarWidthDense,
        },
        '&.right': {
          marginRight: -navbarWidthDense,
        },
      },
    },
    '&.folded-disabled': {
      minWidth: (props) => (props.dense ? navbarWidthDense + panelWidth : navbarWidth + panelWidth),
      width: (props) => (props.dense ? navbarWidthDense + panelWidth : navbarWidth + panelWidth),
      maxWidth: (props) => (props.dense ? navbarWidthDense + panelWidth : navbarWidth + panelWidth),
      '& #fuse-navbar-panel': {
        opacity: '1!important',
        pointerEvents: 'initial!important',
      },
      '&.closed': {
        '&.left': {
          marginLeft: (props) =>
            -(props.dense ? navbarWidthDense + panelWidth : navbarWidth + panelWidth),
        },
        '&.right': {
          marginRight: (props) =>
            -(props.dense ? navbarWidthDense + panelWidth : navbarWidth + panelWidth),
        },
      },
    },
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
  navbarMobile: {
    '& #fuse-navbar-side-panel': {
      minWidth: 'auto',
      wdith: 'auto',
    },
    '& #fuse-navbar-panel': {
      opacity: '1!important',
      pointerEvents: 'initial!important',
    },
  },
}));

function NavbarStyle3(props) {
  const dispatch = useDispatch();
  const config = useSelector(({ fuse }) => fuse.settings.current.layout.config);
  const navbar = useSelector(({ fuse }) => fuse.navbar);
  const { folded } = config.navbar;
  const classes = useStyles({
    ...props,
    folded: config.navbar.folded,
    navbarPosition: config.navbar.position,
    open: navbar.open,
  });

  return (
    <>
      <Hidden mdDown>
        <div
          className={clsx(
            classes.navbar,
            config.navbar.position,
            navbar.open ? 'opened' : 'closed',
            props.dense && 'dense',
            !folded && 'folded-disabled',
            'flex-col flex-auto sticky top-0 h-screen flex-shrink-0 z-20 shadow-5'
          )}
        >
          <NavbarStyle3Content dense={props.dense} folded={folded} />
        </div>
      </Hidden>

      <Hidden lgUp>
        <SwipeableDrawer
          classes={{
            paper: clsx(
              classes.navbarMobile,
              'flex-col flex-auto h-screen max-w-full w-auto overflow-hidden'
            ),
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
          <NavbarStyle3Content dense={props.dense} folded={folded} />
        </SwipeableDrawer>
      </Hidden>
    </>
  );
}

export default NavbarStyle3;
