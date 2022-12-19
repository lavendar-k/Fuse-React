import { combineReducers } from '@reduxjs/toolkit';
import filters from './filtersSlice';
import folders from './foldersSlice';
import labels from './labelsSlice';
import mail from './mailSlice';
import mails from './mailsSlice';

const reducer = combineReducers({
  mails,
  mail,
  folders,
  labels,
  filters,
});

export default reducer;
