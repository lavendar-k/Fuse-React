import FuseUtils from '@fuse/utils';
import _ from '@lodash';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectTodos } from './store/todosSlice';
import TodoListItem from './TodoListItem';

function TodoList(props) {
  const todos = useSelector(selectTodos);
  const searchText = useSelector(({ todoApp }) => todoApp.todos.searchText);
  const orderBy = useSelector(({ todoApp }) => todoApp.todos.orderBy);
  const orderDescending = useSelector(({ todoApp }) => todoApp.todos.orderDescending);
  const [filteredData, setFilteredData] = useState(null);

  useEffect(() => {
    function getFilteredArray(entities, _searchText) {
      if (_searchText.length === 0) {
        return todos;
      }
      return FuseUtils.filterArrayByString(todos, _searchText);
    }

    if (todos) {
      setFilteredData(
        _.orderBy(
          getFilteredArray(todos, searchText),
          [orderBy],
          [orderDescending ? 'desc' : 'asc']
        )
      );
    }
  }, [todos, searchText, orderBy, orderDescending]);

  if (!filteredData) {
    return null;
  }

  if (filteredData.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.1 } }}
        className="flex flex-1 items-center justify-center h-full"
      >
        <Typography color="textSecondary" variant="h5">
          There are no todos!
        </Typography>
      </motion.div>
    );
  }

  const container = {
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <List className="p-0">
      <motion.div variants={container} initial="hidden" animate="show">
        {filteredData.map((todo) => (
          <motion.div variants={item} key={todo.id}>
            <TodoListItem todo={todo} />
          </motion.div>
        ))}
      </motion.div>
    </List>
  );
}

export default TodoList;
