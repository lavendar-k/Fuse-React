import { createEntityAdapter, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getNotifications = createAsyncThunk('notificationPanel/data/getData', async () => {
  const response = await axios.get('/api/notification-panel/data');
  const data = await response.data;

  return data;
});

const notificationsAdapter = createEntityAdapter({});

const initialState = notificationsAdapter.upsertMany(notificationsAdapter.getInitialState(), []);

export const { selectAll: selectNotifications, selectById: selectNotificationsById } =
  notificationsAdapter.getSelectors((state) => state.notificationPanel.data);

const dataSlice = createSlice({
  name: 'notificationPanel/data',
  initialState,
  reducers: {
    dismissItem: (state, action) => notificationsAdapter.removeOne(state, action.payload),
    dismissAll: (state, action) => notificationsAdapter.removeAll(state),
    addNotification: (state, action) => notificationsAdapter.addOne(state, action.payload),
  },
  extraReducers: {
    [getNotifications.fulfilled]: (state, action) =>
      notificationsAdapter.addMany(state, action.payload),
  },
});

export const { dismissItem, dismissAll, addNotification } = dataSlice.actions;

export default dataSlice.reducer;
