import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { alpha } from '@material-ui/core/styles/colorManipulator';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import withReducer from 'app/store/withReducer';
import clsx from 'clsx';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Chat from './Chat';
import ChatsSidebar from './ChatsSidebar';
import ContactSidebar from './ContactSidebar';
import StatusIcon from './StatusIcon';
import reducer from './store';
import { getUserData } from './store/userSlice';
import { selectContactById, getContacts } from './store/contactsSlice';
import {
  closeContactSidebar,
  openContactSidebar,
  openMobileChatsSidebar,
  closeUserSidebar,
  closeMobileChatsSidebar,
} from './store/sidebarsSlice';

import UserSidebar from './UserSidebar';

const drawerWidth = 400;
const headerHeight = 200;

const useStyles = makeStyles((theme) => ({
  '@global': {
    '#fuse-main': {
      height: '100vh',
    },
  },
  root: {
    display: 'flex',
    flexDirection: 'row',
    minHeight: '100%',
    position: 'relative',
    flex: '1 1 auto',
    height: 'auto',
    backgroundColor: theme.palette.background.default,
  },
  topBg: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: headerHeight,
    backgroundImage: 'url("../../assets/images/backgrounds/header-bg.png")',
    backgroundColor: theme.palette.primary.dark,
    backgroundSize: 'cover',
    pointerEvents: 'none',
  },
  contentCardWrapper: {
    position: 'relative',
    padding: 24,
    maxWidth: 1400,
    display: 'flex',
    flexDirection: 'column',
    flex: '1 0 auto',
    width: '100%',
    minWidth: '0',
    maxHeight: '100%',
    margin: '0 auto',
    [theme.breakpoints.down('sm')]: {
      padding: 16,
    },
    [theme.breakpoints.down('xs')]: {
      padding: 12,
    },
  },
  contentCard: {
    display: 'flex',
    position: 'relative',
    flex: '1 1 100%',
    flexDirection: 'row',
    backgroundImage: 'url("/assets/images/patterns/rain-grey.png")',
    backgroundColor: theme.palette.background.paper,
    minHeight: 0,
    overflow: 'hidden',
  },
  drawerPaper: {
    width: drawerWidth,
    maxWidth: '100%',
    overflow: 'hidden',
    height: '100%',
    [theme.breakpoints.up('md')]: {
      position: 'relative',
    },
  },
  contentWrapper: {
    display: 'flex',
    flexDirection: 'column',
    flex: '1 1 100%',
    zIndex: 10,
    background: `linear-gradient(to bottom, ${alpha(theme.palette.background.paper, 0.8)} 0,${alpha(
      theme.palette.background.paper,
      0.6
    )} 20%,${alpha(theme.palette.background.paper, 0.8)})`,
  },
  content: {
    display: 'flex',
    flex: '1 1 100%',
    minHeight: 0,
  },
}));

function ChatApp(props) {
  const dispatch = useDispatch();
  const chat = useSelector(({ chatApp }) => chatApp.chat);
  const mobileChatsSidebarOpen = useSelector(
    ({ chatApp }) => chatApp.sidebars.mobileChatsSidebarOpen
  );
  const userSidebarOpen = useSelector(({ chatApp }) => chatApp.sidebars.userSidebarOpen);
  const contactSidebarOpen = useSelector(({ chatApp }) => chatApp.sidebars.contactSidebarOpen);
  const selectedContact = useSelector((state) =>
    selectContactById(state, state.chatApp.contacts.selectedContactId)
  );

  const classes = useStyles(props);

  useEffect(() => {
    dispatch(getUserData());
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <div className={clsx(classes.root)}>
      <div className={classes.topBg} />

      <div className={clsx(classes.contentCardWrapper, 'container')}>
        <div className={clsx(classes.contentCard, 'shadow rounded-20')}>
          <Hidden mdUp>
            <SwipeableDrawer
              className="h-full absolute z-20"
              variant="temporary"
              anchor="left"
              open={mobileChatsSidebarOpen}
              onOpen={(ev) => {}}
              onClose={() => dispatch(closeMobileChatsSidebar())}
              disableSwipeToOpen
              classes={{
                paper: clsx(classes.drawerPaper, 'absolute ltr:left-0 rtl:right-0'),
              }}
              style={{ position: 'absolute' }}
              ModalProps={{
                keepMounted: true,
                disablePortal: true,
                BackdropProps: {
                  classes: {
                    root: 'absolute',
                  },
                },
              }}
            >
              <ChatsSidebar />
            </SwipeableDrawer>
          </Hidden>
          <Hidden smDown>
            <Drawer
              className="h-full z-20"
              variant="permanent"
              open
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              <ChatsSidebar />
            </Drawer>
          </Hidden>
          <SwipeableDrawer
            className="h-full absolute z-30"
            variant="temporary"
            anchor="left"
            open={userSidebarOpen}
            onOpen={(ev) => {}}
            onClose={() => dispatch(closeUserSidebar())}
            classes={{
              paper: clsx(classes.drawerPaper, 'absolute left-0'),
            }}
            style={{ position: 'absolute' }}
            ModalProps={{
              keepMounted: false,
              disablePortal: true,
              BackdropProps: {
                classes: {
                  root: 'absolute',
                },
              },
            }}
          >
            <UserSidebar />
          </SwipeableDrawer>

          <main className={clsx(classes.contentWrapper, 'z-10')}>
            {!chat ? (
              <div className="flex flex-col flex-1 items-center justify-center p-24">
                <Paper className="rounded-full p-48 md:p-64 shadow-xl">
                  <Icon className="block text-48 md:text-64" color="secondary">
                    chat
                  </Icon>
                </Paper>
                <Typography variant="h6" className="mt-24 mb-12 text-32 font-700">
                  Chat App
                </Typography>
                <Typography
                  className="hidden md:flex px-16 pb-24 text-16 text-center"
                  color="textSecondary"
                >
                  Select a contact to start a conversation!..
                </Typography>
                <Button
                  variant="outlined"
                  color="primary"
                  className="flex md:hidden"
                  onClick={() => dispatch(openMobileChatsSidebar())}
                >
                  Select a contact to start a conversation!..
                </Button>
              </div>
            ) : (
              <>
                <AppBar className="w-full" elevation={0} position="static">
                  <Toolbar className="px-16">
                    <IconButton
                      color="inherit"
                      aria-label="Open drawer"
                      onClick={() => dispatch(openMobileChatsSidebar())}
                      className="flex md:hidden"
                    >
                      <Icon>chat</Icon>
                    </IconButton>
                    <div
                      className="flex items-center cursor-pointer"
                      onClick={() => dispatch(openContactSidebar())}
                      onKeyDown={() => dispatch(openContactSidebar())}
                      role="button"
                      tabIndex={0}
                    >
                      <div className="relative mx-8">
                        <div className="absolute right-0 bottom-0 -m-4 z-10">
                          <StatusIcon status={selectedContact.status} />
                        </div>

                        <Avatar src={selectedContact.avatar} alt={selectedContact.name}>
                          {!selectedContact.avatar || selectedContact.avatar === ''
                            ? selectedContact.name[0]
                            : ''}
                        </Avatar>
                      </div>
                      <Typography color="inherit" className="text-18 font-semibold px-4">
                        {selectedContact.name}
                      </Typography>
                    </div>
                  </Toolbar>
                </AppBar>

                <div className={classes.content}>
                  <Chat className="flex flex-1 z-10" />
                </div>
              </>
            )}
          </main>

          <SwipeableDrawer
            className="h-full absolute z-30"
            variant="temporary"
            anchor="right"
            open={contactSidebarOpen}
            onOpen={(ev) => {}}
            onClose={() => dispatch(closeContactSidebar())}
            classes={{
              paper: clsx(classes.drawerPaper, 'absolute ltr:right-0 rtl:left-0'),
            }}
            style={{ position: 'absolute' }}
            ModalProps={{
              keepMounted: true,
              disablePortal: true,
              BackdropProps: {
                classes: {
                  root: 'absolute',
                },
              },
            }}
          >
            <ContactSidebar />
          </SwipeableDrawer>
        </div>
      </div>
    </div>
  );
}

export default withReducer('chatApp', reducer)(ChatApp);
