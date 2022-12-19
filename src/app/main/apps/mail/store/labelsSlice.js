import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import axios from 'axios';

export const getLabels = createAsyncThunk('mailApp/labels/getLabels', async () => {
  const response = await axios.get('/api/mail-app/labels');
  const data = await response.data;

  return data;
});

const labelsAdapter = createEntityAdapter({});

export const {
  selectAll: selectLabels,
  selectEntities: selectLabelsEntities,
  selectById: selectLabelById,
} = labelsAdapter.getSelectors((state) => state.mailApp.labels);

const labelsSlice = createSlice({
  name: 'mailApp/labels',
  initialState: labelsAdapter.getInitialState(null),
  reducers: {},
  extraReducers: {
    [getLabels.fulfilled]: labelsAdapter.setAll,
  },
});

export default labelsSlice.reducer;
