import FuseUtils from '@fuse/utils';
import Typography from '@material-ui/core/Typography';
import { useEffect, useState } from 'react';
import Masonry from 'react-masonry-css';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import NoteListItem from './NoteListItem';
import { selectNotes } from './store/notesSlice';

function NoteList(props) {
  const notes = useSelector(selectNotes);
  const variateDescSize = useSelector(({ notesApp }) => notesApp.notes.variateDescSize);
  const searchText = useSelector(({ notesApp }) => notesApp.notes.searchText);

  const [filteredData, setFilteredData] = useState(null);

  useEffect(() => {
    function filterData() {
      const { params } = props.match;
      const { id, labelId } = params;

      let data = notes;

      if (labelId) {
        data = data.filter((note) => note.labels.includes(labelId) && !note.archive);
      }

      if (!id) {
        data = data.filter((note) => !note.archive);
      }

      if (id === 'archive') {
        data = data.filter((note) => note.archive);
      }

      if (id === 'reminders') {
        data = data.filter((note) => Boolean(note.reminder) && !note.archive);
      }

      if (searchText.length === 0) {
        return data;
      }

      data = FuseUtils.filterArrayByString(data, searchText);

      return data;
    }

    if (notes.length > 0) {
      setFilteredData(filterData());
    }
  }, [notes, searchText, props.match]);

  return !filteredData || filteredData.length === 0 ? (
    <div className="flex items-center justify-center h-full">
      <Typography color="textSecondary" variant="h5">
        There are no notes!
      </Typography>
    </div>
  ) : (
    <div className="flex flex-wrap w-full">
      <Masonry
        breakpointCols={{
          default: 6,
          1920: 5,
          1600: 4,
          1366: 3,
          1280: 4,
          960: 3,
          600: 2,
          480: 1,
        }}
        className="my-masonry-grid flex w-full"
        columnClassName="my-masonry-grid_column flex flex-col p-0 md:p-8"
      >
        {filteredData.map((note) => (
          <NoteListItem
            key={note.id}
            note={note}
            className="w-full rounded-20 shadow mb-16"
            variateDescSize={variateDescSize}
          />
        ))}
      </Masonry>
    </div>
  );
}

export default withRouter(NoteList);
