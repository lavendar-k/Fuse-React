import FuseScrollbars from '@fuse/core/FuseScrollbars';
import Avatar from '@material-ui/core/Avatar';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from './store/contactsSlice';
import { sendMessage } from './store/chatSlice';

const useStyles = makeStyles((theme) => ({
  messageRow: {
    '&.contact': {
      '& .bubble': {
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.getContrastText(theme.palette.background.paper),
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        '& .time': {
          marginLeft: 12,
        },
      },
      '&.first-of-group': {
        '& .bubble': {
          borderTopLeftRadius: 20,
        },
      },
      '&.last-of-group': {
        '& .bubble': {
          borderBottomLeftRadius: 20,
        },
      },
    },
    '&.me': {
      paddingLeft: 40,

      '& .avatar': {
        order: 2,
        margin: '0 0 0 16px',
      },
      '& .bubble': {
        marginLeft: 'auto',
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        '& .time': {
          justifyContent: 'flex-end',
          right: 0,
          marginRight: 12,
        },
      },
      '&.first-of-group': {
        '& .bubble': {
          borderTopRightRadius: 20,
        },
      },

      '&.last-of-group': {
        '& .bubble': {
          borderBottomRightRadius: 20,
        },
      },
    },
    '&.contact + .me, &.me + .contact': {
      paddingTop: 20,
      marginTop: 20,
    },
    '&.first-of-group': {
      '& .bubble': {
        borderTopLeftRadius: 20,
        paddingTop: 13,
      },
    },
    '&.last-of-group': {
      '& .bubble': {
        borderBottomLeftRadius: 20,
        paddingBottom: 13,
        '& .time': {
          display: 'flex',
        },
      },
    },
  },
}));

function Chat(props) {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const selectedContactId = useSelector(({ chatApp }) => chatApp.contacts.selectedContactId);
  const chat = useSelector(({ chatApp }) => chatApp.chat);
  const user = useSelector(({ chatApp }) => chatApp.user);

  const classes = useStyles(props);
  const chatRef = useRef(null);
  const [messageText, setMessageText] = useState('');

  useEffect(() => {
    if (chat) {
      scrollToBottom();
    }
  }, [chat]);

  function scrollToBottom() {
    chatRef.current.scrollTop = chatRef.current.scrollHeight;
  }

  function shouldShowContactAvatar(item, i) {
    return (
      item.who === selectedContactId &&
      ((chat.dialog[i + 1] && chat.dialog[i + 1].who !== selectedContactId) || !chat.dialog[i + 1])
    );
  }

  function isFirstMessageOfGroup(item, i) {
    return i === 0 || (chat.dialog[i - 1] && chat.dialog[i - 1].who !== item.who);
  }

  function isLastMessageOfGroup(item, i) {
    return (
      i === chat.dialog.length - 1 || (chat.dialog[i + 1] && chat.dialog[i + 1].who !== item.who)
    );
  }

  function onInputChange(ev) {
    setMessageText(ev.target.value);
  }

  function onMessageSubmit(ev) {
    ev.preventDefault();
    if (messageText === '') {
      return;
    }

    dispatch(
      sendMessage({
        messageText,
        chatId: chat.id,
        contactId: selectedContactId,
      })
    ).then(() => {
      setMessageText('');
    });
  }

  return (
    <div className={clsx('flex flex-col relative', props.className)}>
      <FuseScrollbars ref={chatRef} className="flex flex-1 flex-col overflow-y-auto">
        {chat && chat.dialog.length > 0 ? (
          <div className="flex flex-col pt-16 px-16 ltr:pl-56 rtl:pr-56 pb-40">
            {chat.dialog.map((item, i) => {
              const contact =
                item.who === user.id ? user : contacts.find((_contact) => _contact.id === item.who);
              return (
                <div
                  key={item.time}
                  className={clsx(
                    classes.messageRow,
                    'flex flex-col flex-grow-0 flex-shrink-0 items-start justify-end relative px-16 pb-4',
                    { me: item.who === user.id },
                    { contact: item.who !== user.id },
                    { 'first-of-group': isFirstMessageOfGroup(item, i) },
                    { 'last-of-group': isLastMessageOfGroup(item, i) },
                    i + 1 === chat.dialog.length && 'pb-96'
                  )}
                >
                  {shouldShowContactAvatar(item, i) && (
                    <Avatar
                      className="avatar absolute ltr:left-0 rtl:right-0 m-0 -mx-32"
                      src={contact.avatar}
                    />
                  )}
                  <div className="bubble flex relative items-center justify-center p-12 max-w-full shadow">
                    <div className="leading-tight whitespace-pre-wrap">{item.message}</div>
                    <Typography
                      className="time absolute hidden w-full text-11 mt-8 -mb-24 ltr:left-0 rtl:right-0 bottom-0 whitespace-nowrap"
                      color="textSecondary"
                    >
                      {formatDistanceToNow(new Date(item.time), { addSuffix: true })}
                    </Typography>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="flex flex-col flex-1">
            <div className="flex flex-col flex-1 items-center justify-center">
              <Icon className="text-128" color="disabled">
                chat
              </Icon>
            </div>
            <Typography className="px-16 pb-24 text-center" color="textSecondary">
              Start a conversation by typing your message below.
            </Typography>
          </div>
        )}
      </FuseScrollbars>
      {chat && (
        <form onSubmit={onMessageSubmit} className="absolute bottom-0 right-0 left-0 py-16 px-8">
          <Paper className="flex items-center relative rounded-24 shadow">
            <TextField
              autoFocus={false}
              id="message-input"
              className="flex-1"
              InputProps={{
                disableUnderline: true,
                classes: {
                  root: 'flex flex-grow flex-shrink-0 mx-16 ltr:mr-48 rtl:ml-48 my-8',
                  input: '',
                },
                placeholder: 'Type your message',
              }}
              InputLabelProps={{
                shrink: false,
                className: classes.bootstrapFormLabel,
              }}
              onChange={onInputChange}
              value={messageText}
            />
            <IconButton className="absolute ltr:right-0 rtl:left-0 top-0" type="submit">
              <Icon className="text-24" color="action">
                send
              </Icon>
            </IconButton>
          </Paper>
        </form>
      )}
    </div>
  );
}

export default Chat;
