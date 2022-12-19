import { combineReducers } from '@reduxjs/toolkit';
import projects from './projectsSlice';
import widgets from './widgetsSlice';

const reducer = combineReducers({
  widgets,
  projects,
});

export default reducer;
