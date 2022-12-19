import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import ChecklistModel from 'app/main/apps/scrumboard/model/ChecklistModel';
import { useEffect, useState } from 'react';
import * as yup from 'yup';
import _ from '@lodash';
import ToolbarMenu from './ToolbarMenu';

/**
 * Form Validation Schema
 */
const schema = yup.object().shape({
  name: yup.string().required('You must enter a title'),
});

function CheckListMenu(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const { control, formState, handleSubmit, reset } = useForm({
    mode: 'onChange',
    defaultValues: {
      name: props.name,
    },
    resolver: yupResolver(schema),
  });

  const { isValid, dirtyFields, errors } = formState;

  useEffect(() => {
    if (!anchorEl) {
      reset({
        name: props.name,
      });
    }
  }, [anchorEl, reset, props.name]);

  function handleMenuOpen(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleMenuClose() {
    setAnchorEl(null);
  }

  function onSubmit(data) {
    props.onAddCheckList(ChecklistModel(data));
    handleMenuClose();
  }

  return (
    <div>
      <IconButton color="inherit" onClick={handleMenuOpen}>
        <Icon>check_box</Icon>
      </IconButton>
      <ToolbarMenu state={anchorEl} onClose={handleMenuClose}>
        <form onSubmit={handleSubmit(onSubmit)} className="p-16 flex flex-col items-end">
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Checklist title"
                error={!!errors.name}
                helperText={errors?.name?.message}
                fullWidth
                className="mb-12"
                variant="outlined"
                required
                autoFocus
              />
            )}
          />
          <Button
            color="secondary"
            type="submit"
            disabled={_.isEmpty(dirtyFields) || !isValid}
            variant="contained"
          >
            Add
          </Button>
        </form>
      </ToolbarMenu>
    </div>
  );
}

export default CheckListMenu;
