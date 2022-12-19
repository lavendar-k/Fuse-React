import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, forwardRef, useImperativeHandle, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import * as yup from 'yup';
import _ from '@lodash';

/**
 * Form Validation Schema
 */
const schema = yup.object().shape({
  name: yup.string().required('You must enter a title'),
});

const CardChecklistName = forwardRef(function CardChecklistName(props, ref) {
  const [formOpen, setFormOpen] = useState(false);
  const { control, formState, handleSubmit, reset } = useForm({
    mode: 'onChange',
    defaultValues: {
      name: props.name,
    },
    resolver: yupResolver(schema),
  });

  const { isValid, dirtyFields, errors } = formState;

  useEffect(() => {
    if (!formOpen) {
      reset({
        name: props.name,
      });
    }
  }, [formOpen, reset, props.name]);

  useImperativeHandle(ref, () => {
    return {
      openForm: handleOpenForm,
    };
  });

  function handleOpenForm(ev) {
    ev.stopPropagation();
    setFormOpen(true);
  }

  function handleCloseForm() {
    setFormOpen(false);
  }

  function onSubmit(data) {
    props.onNameChange(data.name);
    handleCloseForm();
  }

  return formOpen ? (
    <ClickAwayListener onClickAway={handleCloseForm}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              variant="outlined"
              margin="dense"
              autoFocus
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton type="submit" disabled={_.isEmpty(dirtyFields) || !isValid}>
                      <Icon>check</Icon>
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          )}
        />
      </form>
    </ClickAwayListener>
  ) : (
    <Typography className="text-16 font-semibold cursor-pointer mx-8" onClick={handleOpenForm}>
      {props.name}
    </Typography>
  );
});

export default CardChecklistName;
