import { combineReducers } from '@reduxjs/toolkit';
import filters from './filtersSlice';
import folders from './foldersSlice';
import labels from './labelsSlice';
import todos from './todosSlice';

const reducer = combineReducers({
  todos,
  folders,
  labels,
  filters,
});

export default reducer;
