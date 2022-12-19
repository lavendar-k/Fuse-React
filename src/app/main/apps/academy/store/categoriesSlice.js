import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import axios from 'axios';

export const getCategories = createAsyncThunk('academyApp/categories/getCategories', async () => {
  const response = await axios.get('/api/academy-app/categories');
  const data = await response.data;

  return data;
});

const categoriesAdapter = createEntityAdapter({});

export const { selectAll: selectCategories, selectById: selectCategoryById } =
  categoriesAdapter.getSelectors((state) => state.academyApp.categories);

const categorySlice = createSlice({
  name: 'academyApp/categories',
  initialState: categoriesAdapter.getInitialState({}),
  reducers: {},
  extraReducers: {
    [getCategories.fulfilled]: categoriesAdapter.setAll,
  },
});

export default categorySlice.reducer;
