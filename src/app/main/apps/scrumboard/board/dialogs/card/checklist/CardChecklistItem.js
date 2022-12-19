import { Controller, useForm } from 'react-hook-form';
import { useEffect } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import TextField from '@material-ui/core/TextField';
import _ from '@lodash';

function CardChecklistItem(props) {
  const { item, onListItemChange, index } = props;
  const { control, watch } = useForm({ mode: 'onChange', defaultValues: item });
  const form = watch();

  useEffect(() => {
    if (!_.isEqual(item, form)) {
      onListItemChange(form, index);
    }
  }, [form, index, onListItemChange, item]);

  return (
    <ListItem className="px-0" key={item.id} dense>
      <Controller
        name="checked"
        control={control}
        defaultValue={false}
        render={({ field: { onChange, value } }) => (
          <Checkbox
            tabIndex={-1}
            checked={value}
            onChange={(ev) => onChange(ev.target.checked)}
            disableRipple
          />
        )}
      />

      <Controller
        name="name"
        control={control}
        render={({ field }) => (
          <TextField {...field} className="flex flex-1 mx-8" variant="outlined" />
        )}
      />

      <IconButton aria-label="Delete" onClick={props.onListItemRemove}>
        <Icon>delete</Icon>
      </IconButton>
    </ListItem>
  );
}

export default CardChecklistItem;
