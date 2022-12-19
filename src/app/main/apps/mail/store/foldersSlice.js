import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import axios from 'axios';

export const getFolders = createAsyncThunk('mailApp/folders/getFolders', async () => {
  const response = await axios.get('/api/mail-app/folders');
  const data = await response.data;

  return data;
});

const foldersAdapter = createEntityAdapter({});

export const { selectAll: selectFolders, selectById: selectFolderById } =
  foldersAdapter.getSelectors((state) => state.mailApp.folders);

const foldersSlice = createSlice({
  name: 'mailApp/folders',
  initialState: foldersAdapter.getInitialState({}),
  reducers: {},
  extraReducers: {
    [getFolders.fulfilled]: foldersAdapter.setAll,
  },
});

export default foldersSlice.reducer;
