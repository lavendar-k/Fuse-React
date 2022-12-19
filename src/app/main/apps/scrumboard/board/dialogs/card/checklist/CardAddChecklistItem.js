import { yupResolver } from '@hookform/resolvers/yup';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';
import ListItem from '@material-ui/core/ListItem';
import TextField from '@material-ui/core/TextField';
import ChecklistItemModel from 'app/main/apps/scrumboard/model/ChecklistItemModel';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';

import _ from '@lodash';

/**
 * Form Validation Schema
 */
const schema = yup.object().shape({
  name: yup.string().required('You must enter a title'),
});

function CardAddChecklistItem(props) {
  const { control, formState, handleSubmit, reset } = useForm({
    mode: 'onChange',
    defaultValues: {
      name: props.name,
    },
    resolver: yupResolver(schema),
  });

  const { isValid, dirtyFields, errors } = formState;

  function onSubmit(data) {
    props.onListItemAdd(ChecklistItemModel(data));
    reset({
      name: props.name,
    });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ListItem className="px-0" dense>
        <span className="w-40" />
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              className="flex flex-1 mx-8"
              name="name"
              variant="outlined"
              placeholder="Add an item"
            />
          )}
        />
        <Fab
          className="mx-4"
          aria-label="Add"
          size="small"
          color="secondary"
          type="submit"
          disabled={_.isEmpty(dirtyFields) || !isValid}
        >
          <Icon>add</Icon>
        </Fab>
      </ListItem>
    </form>
  );
}

export default CardAddChecklistItem;
