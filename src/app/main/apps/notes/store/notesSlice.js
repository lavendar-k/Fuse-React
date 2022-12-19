import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import axios from 'axios';

export const getNotes = createAsyncThunk('notesApp/notes/getNotes', async () => {
  const response = await axios.get('/api/notes-app/notes');
  const data = await response.data;

  return data;
});

export const createNote = createAsyncThunk('notesApp/notes/createNote', async (note) => {
  const response = await axios.post('/api/notes-app/create-note', { note });
  const data = await response.data;

  return data;
});

export const updateNote = createAsyncThunk('notesApp/notes/updateNote', async (note) => {
  const response = await axios.post('/api/notes-app/update-note', { note });
  const data = await response.data;

  return data;
});

export const removeNote = createAsyncThunk(
  'notesApp/notes/removeNote',
  async (noteId, { dispatch, getState }) => {
    const response = await axios.post('/api/notes-app/remove-note', { noteId });
    const data = await response.data;

    dispatch(closeNoteDialog());

    return data;
  }
);

const notesAdapter = createEntityAdapter({});

export const {
  selectAll: selectNotes,
  selectEntities: selectNotesEntities,
  selectById: selectNoteById,
} = notesAdapter.getSelectors((state) => state.notesApp.notes);

const notesSlice = createSlice({
  name: 'notesApp/notes',
  initialState: notesAdapter.getInitialState({
    searchText: '',
    noteDialogId: null,
    variateDescSize: true,
  }),
  reducers: {
    setNotesSearchText: {
      reducer: (state, action) => {
        state.searchText = action.payload;
      },
      prepare: (event) => ({ payload: event.target.value || '' }),
    },
    resetNotesSearchText: (state, action) => {
      state.searchText = '';
    },
    toggleVariateDescSize: (state, action) => {
      state.variateDescSize = !state.variateDescSize;
    },
    openNoteDialog: (state, action) => {
      state.noteDialogId = action.payload;
    },
    closeNoteDialog: (state, action) => {
      state.noteDialogId = action.null;
    },
  },
  extraReducers: {
    [getNotes.fulfilled]: notesAdapter.setAll,
    [createNote.fulfilled]: notesAdapter.addOne,
    [updateNote.fulfilled]: notesAdapter.upsertOne,
    [removeNote.fulfilled]: notesAdapter.removeOne,
  },
});

export const {
  setNotesSearchText,
  resetNotesSearchText,
  toggleVariateDescSize,
  openNoteDialog,
  closeNoteDialog,
} = notesSlice.actions;

export default notesSlice.reducer;
