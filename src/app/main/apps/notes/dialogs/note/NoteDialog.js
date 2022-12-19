import { useDebounce } from '@fuse/hooks';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import NoteForm from 'app/main/apps/notes/note-form/NoteForm';
import { forwardRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeNoteDialog, removeNote, updateNote } from '../../store/notesSlice';

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function NoteDialog(props) {
  const dispatch = useDispatch();
  const notes = useSelector(({ notesApp }) => notesApp.notes);

  const handleOnChange = useDebounce((note) => {
    dispatch(updateNote(note));
  }, 600);

  function handleOnRemove() {
    dispatch(removeNote(notes.noteDialogId));
  }

  if (!notes.entities) {
    return null;
  }

  return (
    <Dialog
      classes={{
        paper: 'w-full m-24',
      }}
      TransitionComponent={Transition}
      onClose={(ev) => dispatch(closeNoteDialog())}
      open={Boolean(notes.noteDialogId)}
    >
      <NoteForm
        note={notes.entities[notes.noteDialogId]}
        onChange={handleOnChange}
        onClose={(ev) => dispatch(closeNoteDialog())}
        onRemove={handleOnRemove}
      />
    </Dialog>
  );
}

export default NoteDialog;
