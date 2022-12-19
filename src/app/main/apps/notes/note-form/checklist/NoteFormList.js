import List from '@material-ui/core/List';
import NoteFormAddListItem from './NoteFormAddListItem';
import NoteFormListItem from './NoteFormListItem';

function NoteFormList(props) {
  function handleListItemChange(item) {
    props.onCheckListChange(props.checklist.map((_item) => (_item.id === item.id ? item : _item)));
  }

  function handleListItemRemove(id) {
    props.onCheckListChange(props.checklist.filter((_item) => _item.id !== id));
  }

  function handleListItemAdd(item) {
    props.onCheckListChange([...props.checklist, item]);
  }

  if (!props.checklist) {
    return null;
  }

  return (
    <div className={props.className}>
      <List dense>
        {props.checklist.map((item) => (
          <NoteFormListItem
            item={item}
            key={item.id}
            onListItemChange={handleListItemChange}
            onListItemRemove={handleListItemRemove}
          />
        ))}
        <NoteFormAddListItem onListItemAdd={handleListItemAdd} />
      </List>
    </div>
  );
}

export default NoteFormList;
