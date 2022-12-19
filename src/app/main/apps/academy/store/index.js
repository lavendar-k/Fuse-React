import { combineReducers } from '@reduxjs/toolkit';
import course from './courseSlice';
import courses from './coursesSlice';
import categories from './categoriesSlice';

const reducer = combineReducers({
  categories,
  courses,
  course,
});

export default reducer;
