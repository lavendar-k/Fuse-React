import FuseScrollbars from '@fuse/core/FuseScrollbars';
import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from './store/contactsSlice';
import { closeContactSidebar } from './store/sidebarsSlice';

function ContactSidebar(props) {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const selectedContactId = useSelector(({ chatApp }) => chatApp.contacts.selectedContactId);

  const contact = contacts.find((_contact) => _contact.id === selectedContactId);

  if (!contact) {
    return null;
  }

  return (
    <div className="flex flex-col flex-auto h-full">
      <AppBar position="static" color="primary" elevation={0}>
        <Toolbar className="flex justify-between items-center px-4">
          <Typography className="px-12" color="inherit" variant="subtitle1">
            Contact Info
          </Typography>
          <IconButton onClick={() => dispatch(closeContactSidebar())} color="inherit">
            <Icon>close</Icon>
          </IconButton>
        </Toolbar>

        <Toolbar className="flex flex-col justify-center items-center p-24">
          <Avatar src={contact.avatar} alt={contact.name} className="w-96 h-96">
            {!contact.avatar || contact.avatar === '' ? contact.name[0] : ''}
          </Avatar>
          <Typography color="inherit" className="mt-16" variant="h6">
            {contact.name}
          </Typography>
        </Toolbar>
      </AppBar>

      <FuseScrollbars className="overflow-y-auto flex-1 p-24">
        <TextField
          label="Mood"
          className="w-full"
          variant="outlined"
          value={contact.mood}
          margin="normal"
          disabled
          multiline
        />
      </FuseScrollbars>
    </div>
  );
}

export default ContactSidebar;
