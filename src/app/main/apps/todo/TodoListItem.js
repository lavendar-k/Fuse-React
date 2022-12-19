import _ from '@lodash';
import { amber, red } from '@material-ui/core/colors';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import { selectLabelsEntities } from './store/labelsSlice';
import { updateTodo, openEditTodoDialog } from './store/todosSlice';

import TodoChip from './TodoChip';

const useStyles = makeStyles({
  todoItem: {
    '&.completed': {
      background: 'rgba(0,0,0,0.03)',
      '& .todo-title, & .todo-notes': {
        textDecoration: 'line-through',
      },
    },
  },
});

function TodoListItem(props) {
  const dispatch = useDispatch();
  const labels = useSelector(selectLabelsEntities);

  const classes = useStyles(props);

  return (
    <ListItem
      className={clsx(classes.todoItem, { completed: props.todo.completed }, 'py-20 px-0 sm:px-8')}
      onClick={(ev) => {
        ev.preventDefault();
        dispatch(openEditTodoDialog(props.todo));
      }}
      dense
      button
    >
      <IconButton
        tabIndex={-1}
        disableRipple
        onClick={(ev) => {
          ev.stopPropagation();
          dispatch(
            updateTodo({
              ...props.todo,
              completed: !props.todo.completed,
            })
          );
        }}
      >
        {props.todo.completed ? (
          <Icon color="secondary">check_circle</Icon>
        ) : (
          <Icon color="action">radio_button_unchecked</Icon>
        )}
      </IconButton>

      <div className="flex flex-1 flex-col relative overflow-hidden px-8">
        <Typography
          className="todo-title truncate text-14 font-medium"
          color={props.todo.completed ? 'textSecondary' : 'inherit'}
        >
          {props.todo.title}
        </Typography>

        <Typography color="textSecondary" className="todo-notes truncate">
          {_.truncate(props.todo.notes.replace(/<(?:.|\n)*?>/gm, ''), { length: 180 })}
        </Typography>

        <div className={clsx(classes.labels, 'flex -mx-2 mt-8')}>
          {props.todo.labels.map((label) => (
            <TodoChip
              className="mx-2 mt-4"
              title={labels[label].title}
              color={labels[label].color}
              key={label}
            />
          ))}
        </div>
      </div>

      <div className="px-8">
        <IconButton
          onClick={(ev) => {
            ev.preventDefault();
            ev.stopPropagation();
            dispatch(
              updateTodo({
                ...props.todo,
                important: !props.todo.important,
              })
            );
          }}
        >
          {props.todo.important ? (
            <Icon style={{ color: red[500] }}>error</Icon>
          ) : (
            <Icon>error_outline</Icon>
          )}
        </IconButton>
        <IconButton
          onClick={(ev) => {
            ev.preventDefault();
            ev.stopPropagation();
            dispatch(
              updateTodo({
                ...props.todo,
                starred: !props.todo.starred,
              })
            );
          }}
        >
          {props.todo.starred ? (
            <Icon style={{ color: amber[500] }}>star</Icon>
          ) : (
            <Icon>star_outline</Icon>
          )}
        </IconButton>
      </div>
    </ListItem>
  );
}

export default TodoListItem;
