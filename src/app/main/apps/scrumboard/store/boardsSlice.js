import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import axios from 'axios';
import history from '@history';
import BoardModel from '../model/BoardModel';

export const getBoards = createAsyncThunk('scrumboardApp/boards/getBoards', async () => {
  const response = await axios.get('/api/scrumboard-app/boards');
  const data = await response.data;

  return data;
});

export const newBoard = createAsyncThunk(
  'scrumboardApp/boards/newBoard',
  async (board, { dispatch }) => {
    const response = await axios.post('/api/scrumboard-app/board/new', {
      board: board || BoardModel(),
    });
    const data = await response.data;

    history.push({
      pathname: `/apps/scrumboard/boards/${data.id}/${data.handle}`,
    });

    return data;
  }
);

const boardsAdapter = createEntityAdapter({});

export const { selectAll: selectBoards, selectById: selectBoardById } = boardsAdapter.getSelectors(
  (state) => state.scrumboardApp.boards
);

const boardsSlice = createSlice({
  name: 'scrumboardApp/boards',
  initialState: boardsAdapter.getInitialState({}),
  reducers: {
    resetBoards: (state, action) => {},
  },
  extraReducers: {
    [getBoards.fulfilled]: boardsAdapter.setAll,
  },
});

export const { resetBoards } = boardsSlice.actions;

export default boardsSlice.reducer;
