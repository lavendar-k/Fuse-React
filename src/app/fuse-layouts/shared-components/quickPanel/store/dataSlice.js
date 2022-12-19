import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import axios from 'axios';

export const getData = createAsyncThunk('quickPanel/data/getData', async () => {
  const response = await axios.get('/api/quick-panel/data');
  const data = await response.data;

  return data;
});

const dataSlice = createSlice({
  name: 'quickPanel/data',
  initialState: null,
  reducers: {},
  extraReducers: {
    [getData.fulfilled]: (state, action) => action.payload,
  },
});

export default dataSlice.reducer;
