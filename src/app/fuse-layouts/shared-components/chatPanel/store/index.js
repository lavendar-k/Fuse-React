import { combineReducers } from '@reduxjs/toolkit';
import chat from './chatSlice';
import contacts from './contactsSlice';
import state from './stateSlice';
import user from './userSlice';

const reducer = combineReducers({
  user,
  contacts,
  chat,
  state,
});

export default reducer;
