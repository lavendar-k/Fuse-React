import { combineReducers } from '@reduxjs/toolkit';
import widgets from './widgetsSlice';

const reducer = combineReducers({
  widgets,
});

export default reducer;
