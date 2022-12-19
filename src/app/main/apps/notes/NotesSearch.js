import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import clsx from 'clsx';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetNotesSearchText, setNotesSearchText } from './store/notesSlice';

const useStyles = makeStyles((theme) => ({
  root: {},
  inputWrapper: {
    backgroundColor: theme.palette.primary.dark,
  },
}));

function NotesSearch(props) {
  const dispatch = useDispatch();
  const searchText = useSelector(({ notesApp }) => notesApp.notes.notesSearchText);

  const classes = useStyles(props);
  const [search, setSearch] = useState(false);

  function showSearch(ev) {
    ev.stopPropagation();
    setSearch(true);
    document.addEventListener('keydown', escFunction, false);
  }

  function hideSearch() {
    setSearch(false);
    dispatch(resetNotesSearchText());
    document.removeEventListener('keydown', escFunction, false);
  }

  function escFunction(event) {
    if (event.keyCode === 27) {
      hideSearch();
    }
  }

  function handleClickAway() {
    hideSearch();
  }

  return (
    <div className={clsx(classes.root, 'flex', props.className)}>
      <Tooltip title="Click to search" placement="bottom">
        <div onClick={showSearch} onKeyDown={showSearch} role="button" tabIndex={0}>
          {props.trigger}
        </div>
      </Tooltip>

      {search && (
        <ClickAwayListener onClickAway={handleClickAway}>
          <div
            className={clsx(
              classes.inputWrapper,
              'absolute left-0 right-0 top-0 bottom-0 h-full z-9999 px-8 sm:px-24'
            )}
          >
            <div className="flex items-center w-full h-full">
              <Input
                placeholder="Search for anything"
                className="flex flex-1 py-0 px-16 h-64"
                disableUnderline
                fullWidth
                value={searchText}
                inputProps={{
                  'aria-label': 'Search',
                }}
                onChange={(ev) => dispatch(setNotesSearchText(ev))}
                autoFocus
              />

              <IconButton onClick={hideSearch} className="mx-8">
                <Icon>close</Icon>
              </IconButton>
            </div>
          </div>
        </ClickAwayListener>
      )}
    </div>
  );
}

NotesSearch.propTypes = {};
NotesSearch.defaultProps = {
  trigger: (
    <IconButton className="w-64 h-64">
      <Icon>search</Icon>
    </IconButton>
  ),
};

export default NotesSearch;
