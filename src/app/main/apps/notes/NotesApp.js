import FusePageSimple from '@fuse/core/FusePageSimple';
import withReducer from 'app/store/withReducer';
import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import LabelsDialog from './dialogs/labels/LabelsDialog';
import NoteDialog from './dialogs/note/NoteDialog';
import NewNote from './NewNote';
import NoteList from './NoteList';
import NotesHeader from './NotesHeader';
import NotesSidebarContent from './NotesSidebarContent';
import reducer from './store';
import { getLabels } from './store/labelsSlice';
import { getNotes } from './store/notesSlice';

function NotesApp(props) {
  const dispatch = useDispatch();

  const pageLayout = useRef(null);

  useEffect(() => {
    dispatch(getNotes());
    dispatch(getLabels());
  }, [dispatch]);

  return (
    <>
      <FusePageSimple
        classes={{
          contentWrapper: 'p-16 sm:p-24 pb-80',
          content: 'flex min-h-full',
          leftSidebar: 'w-256 border-0',
          header: 'min-h-72 h-72',
        }}
        header={<NotesHeader pageLayout={pageLayout} />}
        content={
          <div className="flex flex-col w-full items-center">
            <NewNote />
            <NoteList />
            <NoteDialog />
            <LabelsDialog />
          </div>
        }
        leftSidebarContent={<NotesSidebarContent />}
        sidebarInner
        ref={pageLayout}
      />
    </>
  );
}

export default withReducer('notesApp', reducer)(NotesApp);
