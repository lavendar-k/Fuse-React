import FuseScrollbars from '@fuse/core/FuseScrollbars';
import FuseSettings from '@fuse/core/FuseSettings';
import Button from '@material-ui/core/Button';
import { red } from '@material-ui/core/colors';
import Dialog from '@material-ui/core/Dialog';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Slide from '@material-ui/core/Slide';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import { forwardRef, memo, useState } from 'react';
import FuseThemeSchemes from '@fuse/core/FuseThemeSchemes';
import { useSwipeable } from 'react-swipeable';

const Transition = forwardRef(function Transition(props, ref) {
  const theme = useTheme();
  return <Slide direction={theme.direction === 'ltr' ? 'left' : 'right'} ref={ref} {...props} />;
});

const useStyles = makeStyles((theme) => ({
  buttonWrapper: {
    position: 'absolute',
    height: 80,
    right: 0,
    top: 160,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    opacity: 0.9,
    padding: 0,
    borderTopLeftRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
    zIndex: 999,
    color: theme.palette.getContrastText(red[500]),
    backgroundColor: red[500],
    '&:hover': {
      backgroundColor: red[500],
      opacity: 1,
    },
  },
  button: {
    minWidth: 40,
    width: 40,
    height: 40,
    margin: 0,
  },
  settingsButton: {
    '& $buttonIcon': {
      animation: '$rotating 3s linear infinite',
    },
  },
  schemesButton: {},
  '@keyframes rotating': {
    from: {
      transform: 'rotate(0deg)',
    },
    to: {
      transform: 'rotate(360deg)',
    },
  },
  buttonIcon: {
    fontSize: 20,
  },
  dialogPaper: {
    position: 'fixed',
    width: 380,
    maxWidth: '90vw',
    backgroundColor: theme.palette.background.paper,
    top: 0,
    height: '100%',
    minHeight: '100%',
    bottom: 0,
    right: 0,
    margin: 0,
    zIndex: 1000,
    borderRadius: 0,
  },
}));

function SettingsPanel() {
  const classes = useStyles();
  const theme = useTheme();

  const [open, setOpen] = useState(false);
  const handlerOptions = {
    onSwipedLeft: () => {
      return open && theme.direction === 'rtl' && handleClose();
    },
    onSwipedRight: () => {
      return open && theme.direction === 'ltr' && handleClose();
    },
  };

  const settingsHandlers = useSwipeable(handlerOptions);
  const shemesHandlers = useSwipeable(handlerOptions);

  const handleOpen = (panelId) => {
    setOpen(panelId);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className={classes.buttonWrapper} id="fuse-settings-schemes">
        <Button
          className={clsx(classes.button, classes.settingsButton)}
          onClick={() => handleOpen('settings')}
          variant="text"
          color="inherit"
        >
          <Icon className={classes.buttonIcon}>settings</Icon>
        </Button>

        <Button
          className={clsx(classes.button, classes.schemesButton)}
          onClick={() => handleOpen('schemes')}
          variant="text"
          color="inherit"
        >
          <Icon className={classes.buttonIcon}>palette</Icon>
        </Button>
      </div>

      <Dialog
        TransitionComponent={Transition}
        aria-labelledby="settings-panel"
        aria-describedby="settings"
        open={open === 'settings'}
        keepMounted
        onClose={handleClose}
        BackdropProps={{ invisible: true }}
        classes={{
          paper: clsx(classes.dialogPaper, 'shadow-lg'),
        }}
        {...settingsHandlers}
      >
        <FuseScrollbars className="p-16 sm:p-32">
          <IconButton className="fixed top-0 ltr:right-0 rtl:left-0 z-10" onClick={handleClose}>
            <Icon>close</Icon>
          </IconButton>

          <Typography className="mb-32 font-semibold" variant="h6">
            Theme Settings
          </Typography>

          <FuseSettings />
        </FuseScrollbars>
      </Dialog>

      <Dialog
        TransitionComponent={Transition}
        aria-labelledby="schemes-panel"
        aria-describedby="schemes"
        open={open === 'schemes'}
        keepMounted
        onClose={handleClose}
        BackdropProps={{ invisible: true }}
        classes={{
          paper: clsx(classes.dialogPaper, 'shadow-lg'),
        }}
        {...shemesHandlers}
      >
        <FuseScrollbars className="p-16 sm:p-32">
          <IconButton className="fixed top-0 ltr:right-0 rtl:left-0 z-10" onClick={handleClose}>
            <Icon>close</Icon>
          </IconButton>

          <Typography className="mb-32" variant="h6">
            Theme Color Schemes
          </Typography>

          <Typography className="mb-24 text-12 italic text-justify" color="textSecondary">
            * Selected color scheme will be applied to all theme layout elements (navbar, toolbar,
            etc.). You can also select a different color scheme for each layout element at theme
            settings.
          </Typography>

          <FuseThemeSchemes />
        </FuseScrollbars>
      </Dialog>
    </>
  );
}

export default memo(SettingsPanel);
