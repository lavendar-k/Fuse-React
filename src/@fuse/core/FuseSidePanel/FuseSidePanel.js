import FuseScrollbars from '@fuse/core/FuseScrollbars';
import Fab from '@material-ui/core/Fab';
import Hidden from '@material-ui/core/Hidden';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Tooltip from '@material-ui/core/Tooltip';
import clsx from 'clsx';
import { memo, useState } from 'react';

const useStyles = makeStyles((theme) => ({
  paper: {
    display: 'flex',
    width: 56,
  },
  root: {
    transition: theme.transitions.create(['transform', 'width', 'min-width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.shorter,
    }),
    paddingBottom: 64,
    maxHeight: '100vh',
    position: 'sticky',
    top: 0,
    zIndex: 999,
    '&.left': {
      '& $buttonWrapper': {
        left: 0,
        right: 'auto',
      },
      '& $buttonIcon': {
        transform: 'rotate(0deg)',
      },
    },
    '&.right': {
      '& $buttonWrapper': {
        right: 0,
        left: 'auto',
      },
      '& $buttonIcon': {
        transform: 'rotate(-180deg)',
      },
    },
    '&.closed': {
      [theme.breakpoints.up('lg')]: {
        width: 0,
      },
      '&.left': {
        '& $buttonWrapper': {
          justifyContent: 'start',
        },
        '& $button': {
          borderBottomLeftRadius: 0,
          borderTopLeftRadius: 0,
          paddingLeft: 4,
        },
        '& $buttonIcon': {
          transform: 'rotate(-180deg)',
        },
      },
      '&.right': {
        '& $buttonWrapper': {
          justifyContent: 'flex-end',
        },
        '& $button': {
          borderBottomRightRadius: 0,
          borderTopRightRadius: 0,
          paddingRight: 4,
        },
        '& $buttonIcon': {
          transform: 'rotate(0deg)',
        },
      },
      '& $buttonWrapper': {
        width: 'auto',
      },
      '& $button': {
        backgroundColor: theme.palette.background.paper,
        borderRadius: 38,
        transition: theme.transitions.create(
          ['background-color', 'border-radius', 'width', 'min-width', 'padding'],
          {
            easing: theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.shorter,
          }
        ),
        width: 24,
        '&:hover': {
          width: 52,
          paddingLeft: 8,
          paddingRight: 8,
        },
      },
      '& $content': {
        opacity: 0,
      },
    },
  },
  content: {
    overflow: 'hidden',
    opacity: 1,
    transition: theme.transitions.create(['opacity'], {
      easing: theme.transitions.easing.easeInOut,
      duration: theme.transitions.duration.short,
    }),
  },
  buttonWrapper: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '12px 0',
    width: '100%',
    minWidth: 56,
  },
  button: {
    padding: 8,
    width: 40,
    height: 40,
  },
  buttonIcon: {
    transition: theme.transitions.create(['transform'], {
      easing: theme.transitions.easing.easeInOut,
      duration: theme.transitions.duration.short,
    }),
  },
  mobileButton: {
    height: 40,
    position: 'absolute',
    zIndex: 99,
    bottom: 12,
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

function FuseSidePanel(props) {
  const classes = useStyles(props);
  const [opened, setOpened] = useState(props.opened);
  const [mobileOpen, setMobileOpen] = useState(false);

  function toggleOpened() {
    setOpened(!opened);
  }

  function toggleMobileDrawer() {
    setMobileOpen(!mobileOpen);
  }

  return (
    <>
      <Hidden mdDown>
        <Paper
          className={clsx(
            classes.root,
            classes.paper,
            props.className,
            opened ? 'opened' : 'closed',
            props.position,
            'shadow-lg'
          )}
          square
        >
          <FuseScrollbars className={clsx('content', classes.content)}>
            {props.children}
          </FuseScrollbars>

          <div className={classes.buttonWrapper}>
            <Tooltip
              title="Toggle side panel"
              placement={props.position === 'left' ? 'right' : 'right'}
            >
              <IconButton className={classes.button} onClick={toggleOpened} disableRipple>
                <Icon className={classes.buttonIcon}>keyboard_arrow_left</Icon>
              </IconButton>
            </Tooltip>
          </div>
        </Paper>
      </Hidden>
      <Hidden lgUp>
        <SwipeableDrawer
          classes={{
            paper: clsx(classes.paper, props.className),
          }}
          anchor={props.position}
          open={mobileOpen}
          onOpen={(ev) => {}}
          onClose={toggleMobileDrawer}
          disableSwipeToOpen
        >
          <FuseScrollbars className={clsx('content', classes.content)}>
            {props.children}
          </FuseScrollbars>
        </SwipeableDrawer>

        <Tooltip title="Hide side panel" placement={props.position === 'left' ? 'right' : 'right'}>
          <Fab
            className={clsx(classes.mobileButton, props.position)}
            onClick={toggleMobileDrawer}
            disableRipple
          >
            <Icon className={classes.buttonIcon} color="action">
              keyboard_arrow_right
            </Icon>
          </Fab>
        </Tooltip>
      </Hidden>
    </>
  );
}

FuseSidePanel.propTypes = {};
FuseSidePanel.defaultProps = {
  position: 'left',
  opened: true,
};

export default memo(FuseSidePanel);
