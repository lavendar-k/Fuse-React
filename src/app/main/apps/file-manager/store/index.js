import { combineReducers } from '@reduxjs/toolkit';
import files from './filesSlice';

const reducer = combineReducers({
  files,
});

export default reducer;
