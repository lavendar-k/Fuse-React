import FuseScrollbars from '@fuse/core/FuseScrollbars';
import { useDebounce } from '@fuse/hooks';
import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import TextField from '@material-ui/core/TextField';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import _ from '@lodash';
import StatusIcon from './StatusIcon';
import { closeUserSidebar } from './store/sidebarsSlice';
import { updateUserData } from './store/userSlice';

const statusArr = [
  {
    title: 'Online',
    value: 'online',
  },
  {
    title: 'Away',
    value: 'away',
  },
  {
    title: 'Do not disturb',
    value: 'do-not-disturb',
  },
  {
    title: 'Offline',
    value: 'offline',
  },
];

function UserSidebar(props) {
  const dispatch = useDispatch();
  const user = useSelector(({ chatApp }) => chatApp.user);
  const { control, handleSubmit, watch } = useForm({ defaultValues: user });
  const form = watch();

  const updateUser = useDebounce((_form) => {
    dispatch(updateUserData(_form));
  }, 500);

  useEffect(() => {
    if (!user) {
      return;
    }

    if (!_.isEqual(user, form)) {
      updateUser(form);
    }
  }, [user, form, updateUser]);

  return (
    <div className="flex flex-col flex-auto h-full">
      <AppBar position="static" color="primary" elevation={0}>
        <Toolbar className="flex justify-between items-center px-4">
          <Typography className="px-12" color="inherit" variant="subtitle1">
            User Info
          </Typography>
          <IconButton onClick={() => dispatch(closeUserSidebar())} color="inherit">
            <Icon>close</Icon>
          </IconButton>
        </Toolbar>
        <Toolbar className="flex flex-col justify-center items-center p-24">
          <Avatar src={user.avatar} alt={user.name} className="w-96 h-96">
            {!user.avatar || user.avatar === '' ? user.name[0] : ''}
          </Avatar>
          <Typography color="inherit" className="mt-16" variant="h6">
            {user.name}
          </Typography>
        </Toolbar>
      </AppBar>
      <FuseScrollbars className="overflow-y-auto flex-1 p-24">
        <form>
          <FormControl component="fieldset" className="w-full mb-16">
            <Controller
              name="mood"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Mood"
                  className="w-full"
                  margin="normal"
                  multiline
                  variant="outlined"
                />
              )}
            />
          </FormControl>
          <FormControl component="fieldset" className="w-full mb-16">
            <FormLabel component="legend">Status</FormLabel>
            <Controller
              name="status"
              control={control}
              render={({ field }) => (
                <RadioGroup {...field} aria-label="Status" name="status">
                  {statusArr.map((status) => (
                    <FormControlLabel
                      key={status.value}
                      value={status.value}
                      control={<Radio />}
                      label={
                        <div className="flex items-center">
                          <StatusIcon status={status.value} />
                          <span className="mx-8">{status.title}</span>
                        </div>
                      }
                    />
                  ))}
                </RadioGroup>
              )}
            />
          </FormControl>
        </form>
      </FuseScrollbars>
    </div>
  );
}

export default UserSidebar;
