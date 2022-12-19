import Chip from '@material-ui/core/Chip';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectLabelsEntities } from './store/labelsSlice';

function NoteLabel(props) {
  const labels = useSelector(selectLabelsEntities);

  if (!labels) {
    return null;
  }

  const label = labels[props.id];

  if (!label) {
    return null;
  }

  const linkProps = props.linkable
    ? {
        component: Link,
        onClick: (ev) => {
          ev.stopPropagation();
        },
        to: `/apps/notes/labels/${label.handle}/${label.id}`,
      }
    : {};

  return (
    <Chip
      {...linkProps}
      label={label.name}
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
