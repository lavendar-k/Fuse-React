import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import axios from 'axios';

export const getFiles = createAsyncThunk('fileManagerApp/files/getFiles', async () => {
  const response = await axios.get('/api/file-manager-app/files');
  const data = await response.data;

  return data;
});

const filesAdapter = createEntityAdapter({});

export const {
  selectAll: selectFiles,
  selectEntities: selectFilesEntities,
  selectById: selectFileById,
} = filesAdapter.getSelectors((state) => state.fileManagerApp.files);

const filesSlice = createSlice({
  name: 'fileManagerApp/files',
  initialState: filesAdapter.getInitialState({
    selectedItemId: '1',
  }),
  reducers: {
    setSelectedItem: (state, action) => {
      state.selectedItemId = action.payload;
    },
  },
  extraReducers: {
    [getFiles.fulfilled]: filesAdapter.setAll,
  },
});

export const { setSelectedItem } = filesSlice.actions;

export default filesSlice.reducer;
