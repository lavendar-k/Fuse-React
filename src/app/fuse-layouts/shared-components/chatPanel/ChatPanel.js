import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import { useTheme, makeStyles } from '@material-ui/core/styles';

import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import withReducer from 'app/store/withReducer';
import clsx from 'clsx';
import keycode from 'keycode';
import { memo, useCallback, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSwipeable } from 'react-swipeable';
import Chat from './Chat';
import ContactList from './ContactList';
import reducer from './store';
import { getContacts, selectContacts } from './store/contactsSlice';
import { openChatPanel, closeChatPanel } from './store/stateSlice';

import { getUserData } from './store/userSlice';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'sticky',
    display: 'flex',
    top: 0,
    width: 70,
    maxWidth: 70,
    minWidth: 70,
    height: '100vh',
    zIndex: 1000,
    '&.opened': {
      overflow: 'visible',
    },
    '&:not(.opened)': {
      overflow: 'hidden',
      animation: `$hide-panel 1ms linear ${theme.transitions.duration.standard}`,
      animationFillMode: 'forwards',
    },
    [theme.breakpoints.down('md')]: {
      width: 0,
      maxWidth: 0,
      minWidth: 0,
    },
  },
  panel: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    width: 360,
    minWidth: 360,
    height: '100vh',
    margin: 0,
    overflow: 'hidden',
    zIndex: 1000,
    backgroundColor: theme.palette.background.paper,
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    transform: 'translate3d(0,0,0)',
    transition: theme.transitions.create(['transform'], {
      easing: theme.transitions.easing.easeInOut,
      duration: theme.transitions.duration.standard,
    }),
    '&.opened': {
      transform: 'translate3d(-290px,0,0)',
    },
    [theme.breakpoints.down('md')]: {
      left: 'auto',
      position: 'fixed',
      transform: 'translate3d(360px,0,0)!important',
      boxShadow: 'none',
      width: 320,
      minWidth: 320,
      maxWidth: '100%',
      '&.opened': {
        transform: 'translate3d(0,0,0)!important',
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  '@keyframes hide-panel': {
    '0%': {
      overflow: 'visible',
    },
    '99%': {
      overflow: 'visible',
    },
    '100%': {
      overflow: 'hidden',
    },
  },
}));

function ChatPanel(props) {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const selectedContactId = useSelector(({ chatPanel }) => chatPanel.contacts.selectedContactId);
  const state = useSelector(({ chatPanel }) => chatPanel.state);
  const theme = useTheme();

  const ref = useRef();
  const handlers = useSwipeable({
    onSwipedLeft: () => {
      return state && theme.direction === 'rtl' && dispatch(closeChatPanel());
    },
    onSwipedRight: () => {
      return state && theme.direction === 'ltr' && dispatch(closeChatPanel());
    },
  });

  const classes = useStyles(props);
  const selectedContact = contacts.find((_contact) => _contact.id === selectedContactId);

  const handleDocumentKeyDown = useCallback(
    (event) => {
      if (keycode(event) === 'esc') {
        dispatch(closeChatPanel());
      }
    },
    [dispatch]
  );

  useEffect(() => {
    dispatch(getUserData());
    dispatch(getContacts());
    return () => {
      document.removeEventListener('keydown', handleDocumentKeyDown);
    };
  }, [dispatch, handleDocumentKeyDown]);

  useEffect(() => {
    if (state) {
      document.addEventListener('keydown', handleDocumentKeyDown);
    } else {
      document.removeEventListener('keydown', handleDocumentKeyDown);
    }
  }, [handleDocumentKeyDown, state]);

  /**
   * Click Away Listener
   */
  useEffect(() => {
    function handleDocumentClick(ev) {
      if (ref.current && !ref.current.contains(ev.target)) {
        dispatch(closeChatPanel());
      }
    }

    if (state) {
      document.addEventListener('click', handleDocumentClick, true);
    } else {
      document.removeEventListener('click', handleDocumentClick, true);
    }

    return () => {
      document.removeEventListener('click', handleDocumentClick, true);
    };
  }, [state, dispatch]);

  return (
    <div className={clsx(classes.root, { opened: state })} {...handlers}>
      <div className={clsx(classes.panel, { opened: state }, 'flex flex-col max-w-full')} ref={ref}>
        <AppBar position="static" className="shadow-md">
          <Toolbar className="px-4">
            {(!state || !selectedContactId) && (
              <div className="flex flex-1 items-center px-4">
                <IconButton
                  className=""
                  color="inherit"
                  onClick={(ev) => dispatch(openChatPanel())}
                >
                  <Icon className="text-32">chat</Icon>
                </IconButton>
                {!selectedContactId && (
                  <Typography className="mx-8 text-16" color="inherit">
                    Team Chat
                  </Typography>
                )}
              </div>
            )}
            {state && selectedContact && (
              <div className="flex flex-1 items-center px-12">
                <Avatar src={selectedContact.avatar} />
                <Typography className="mx-16 text-16" color="inherit">
                  {selectedContact.name}
                </Typography>
              </div>
            )}
            <div className="flex px-4">
              <IconButton onClick={(ev) => dispatch(closeChatPanel())} color="inherit">
                <Icon>close</Icon>
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        <Paper className="flex flex-1 flex-row min-h-px shadow-0">
          <ContactList className="flex flex-shrink-0" />
          <Chat className="flex flex-1 z-10" />
        </Paper>
      </div>
    </div>
  );
}

export default withReducer('chatPanel', reducer)(memo(ChatPanel));
