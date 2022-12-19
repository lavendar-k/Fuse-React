import _ from '@lodash';
import Checkbox from '@material-ui/core/Checkbox';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import ListItem from '@material-ui/core/ListItem';
import clsx from 'clsx';

function NoteFormListItem(props) {
  function handleChange(event) {
    props.onListItemChange(
      _.setIn(
        props.item,
        event.target.name,
        event.target.type === 'checkbox' ? event.target.checked : event.target.value
      )
    );
  }

  if (!props.item) {
    return null;
  }

  return (
    <ListItem className="p-0" key={props.item.id} dense>
      <Checkbox
        className="p-0"
        checked={props.item.checked}
        tabIndex={-1}
        disableRipple
        name="checked"
        onChange={handleChange}
        color="default"
      />
      <Input
        className={clsx('flex flex-1 mx-8', props.item.checked && 'line-through opacity-50')}
        name="text"
        value={props.item.text}
        onChange={handleChange}
        disableUnderline
      />
      <IconButton
        className="w-32 h-32 mx-4 p-0"
        aria-label="Delete"
        onClick={() => props.onListItemRemove(props.item.id)}
      >
        <Icon fontSize="small">delete</Icon>
      </IconButton>
    </ListItem>
  );
}

export default NoteFormListItem;
