import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { showMessage } from 'app/store/fuse/messageSlice';

export const updateCard = createAsyncThunk(
  'scrumboardApp/card/updateCard',
  async ({ boardId, card }, { dispatch }) => {
    const response = await axios.post('/api/scrumboard-app/card/update', {
      boardId,
      card,
    });

    const data = await response.data;

    dispatch(
      showMessage({
        message: 'Card Saved',
        autoHideDuration: 2000,
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'right',
        },
      })
    );

    return data;
  }
);

export const removeCard = createAsyncThunk(
  'scrumboardApp/card/removeCard',
  async ({ boardId, cardId }, { dispatch }) => {
    const response = await axios.post('/api/scrumboard-app/card/remove', {
      boardId,
      cardId,
    });

    const data = await response.data;

    dispatch(closeCardDialog());
    return data;
  }
);

const cardSlice = createSlice({
  name: 'scrumboardApp/card',
  initialState: {
    dialogOpen: false,
    data: null,
  },
  reducers: {
    openCardDialog: (state, action) => {
      state.dialogOpen = true;
      state.data = action.payload;
    },
    closeCardDialog: (state, action) => {
      state.dialogOpen = false;
      state.data = null;
    },
  },
  extraReducers: {
    [updateCard.fulfilled]: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { openCardDialog, closeCardDialog } = cardSlice.actions;

export default cardSlice.reducer;
