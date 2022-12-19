import { Controller, useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import { makeStyles } from '@material-ui/core/styles';
import { darken } from '@material-ui/core/styles/colorManipulator';
import TextField from '@material-ui/core/TextField';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';
import _ from '@lodash';
import { newList } from '../store/boardSlice';

const useStyles = makeStyles((theme) => ({
  card: {
    backgroundColor: darken(
      theme.palette.background.paper,
      theme.palette.type === 'light' ? 0.02 : 0.25
    ),
  },
}));

const defaultValues = {
  title: '',
};

/**
 * Form Validation Schema
 */
const schema = yup.object().shape({
  title: yup.string().required('You must enter a title'),
});

function BoardAddList(props) {
  const dispatch = useDispatch();
  const board = useSelector(({ scrumboardApp }) => scrumboardApp.board);

  const classes = useStyles(props);
  const [formOpen, setFormOpen] = useState(false);
  const { control, formState, handleSubmit, reset } = useForm({
    mode: 'onChange',
    defaultValues,
    resolver: yupResolver(schema),
  });

  const { isValid, dirtyFields, errors } = formState;

  useEffect(() => {
    if (!formOpen) {
      reset(defaultValues);
    }
  }, [formOpen, reset]);

  function handleOpenForm(ev) {
    ev.stopPropagation();
    setFormOpen(true);
  }

  function handleCloseForm() {
    setFormOpen(false);
  }

  function onSubmit(data) {
    dispatch(newList({ boardId: board.id, listTitle: data.title }));
    handleCloseForm();
  }

  return (
    <div>
      <Card className={clsx(classes.card, 'w-320 mx-8 sm:mx-12 rounded-20 shadow')} square>
        {formOpen ? (
          <ClickAwayListener onClickAway={handleCloseForm}>
            <form className="p-16" onSubmit={handleSubmit(onSubmit)}>
              <Controller
                name="title"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    className="mb-16"
                    required
                    fullWidth
                    variant="filled"
                    label="List title"
                    autoFocus
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton onClick={handleCloseForm}>
                            <Icon className="text-18">close</Icon>
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                )}
              />

              <div className="flex justify-between items-center">
                <Button
                  variant="contained"
                  color="secondary"
                  type="submit"
                  disabled={_.isEmpty(dirtyFields) || !isValid}
                >
                  Add
                </Button>
              </div>
            </form>
          </ClickAwayListener>
        ) : (
          <Button
            onClick={handleOpenForm}
            classes={{
              root: 'font-medium w-full rounded-none h-64 px-16',
              label: 'justify-start',
            }}
          >
            <Icon className="text-32 text-red">add_circle</Icon>
            <span className="mx-8">Add a list</span>
          </Button>
        )}
      </Card>
    </div>
  );
}

export default BoardAddList;
