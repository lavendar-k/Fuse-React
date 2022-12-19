import Chip from '@material-ui/core/Chip';
import Icon from '@material-ui/core/Icon';
import clsx from 'clsx';
import format from 'date-fns/format';

function NoteLabel(props) {
  if (!props.date) {
    return null;
  }

  return (
    <Chip
      icon={<Icon className="text-16">access_time</Icon>}
      label={format(new Date(props.date), 'MMM dd yy, h:mm')}
      classes={{
        root: clsx('h-24', props.className),
        label: 'px-12 py-4 text-11',
        deleteIcon: 'w-16',
        ...props.classes,
      }}
      variant="outlined"
      onDelete={props.onDelete}
    />
  );
}

export default NoteLabel;
