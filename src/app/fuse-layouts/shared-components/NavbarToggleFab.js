import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';
import { useTheme, makeStyles } from '@material-ui/core/styles';

import Tooltip from '@material-ui/core/Tooltip';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { navbarToggle, navbarToggleMobile } from 'app/store/fuse/navbarSlice';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  buttonIcon: {
    fontSize: 18,
    transition: theme.transitions.create(['transform'], {
      easing: theme.transitions.easing.easeInOut,
      duration: theme.transitions.duration.short,
    }),
  },
  mobileButton: {
    height: 40,
    position: 'absolute',
    zIndex: 99,
    top: 12,
    width: 24,
    borderRadius: 38,
    padding: 8,
    backgroundColor: theme.palette.background.paper,
    transition: theme.transitions.create(
      ['background-color', 'border-radius', 'width', 'min-width', 'padding'],
      {
        easing: theme.transitions.easing.easeInOut,
        duration: theme.transitions.duration.shorter,
      }
    ),
    '&:hover': {
      width: 52,
      paddingLeft: 8,
      paddingRight: 8,
    },
    '&.left': {
      borderBottomLeftRadius: 0,
      borderTopLeftRadius: 0,
      paddingLeft: 4,
      left: 0,
    },

    '&.right': {
      borderBottomRightRadius: 0,
      borderTopRightRadius: 0,
      paddingRight: 4,
      right: 0,
      '& $buttonIcon': {
        transform: 'rotate(-180deg)',
      },
    },
  },
}));

function NavbarToggleFab(props) {
  const classes = useStyles(props);
  const theme = useTheme();
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));
  const config = useSelector(({ fuse }) => fuse.settings.current.layout.config);

  const dispatch = useDispatch();

  return (
    <Tooltip
      title="Show Navigation"
      placement={config.navbar.position === 'left' ? 'right' : 'left'}
    >
      <Fab
        className={clsx(classes.mobileButton, config.navbar.position, props.className)}
        onClick={(ev) => dispatch(mdDown ? navbarToggleMobile() : navbarToggle())}
        disableRipple
      >
        <Icon className={classes.buttonIcon} color="action">
          menu
        </Icon>
      </Fab>
    </Tooltip>
  );
}

NavbarToggleFab.defaultProps = {};

export default NavbarToggleFab;
