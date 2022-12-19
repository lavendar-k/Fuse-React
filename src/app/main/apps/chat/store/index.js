import { combineReducers } from '@reduxjs/toolkit';
import chat from './chatSlice';
import contacts from './contactsSlice';
import sidebars from './sidebarsSlice';
import user from './userSlice';

const reducer = combineReducers({
  sidebars,
  user,
  contacts,
  chat,
});

export default reducer;
