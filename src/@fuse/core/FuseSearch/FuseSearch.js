import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import clsx from 'clsx';
import _ from '@lodash';
import { memo, useEffect, useReducer, useRef } from 'react';
import Autosuggest from 'react-autosuggest';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { selectFlatNavigation } from 'app/store/fuse/navigationSlice';

function renderInputComponent(inputProps) {
  const { variant, classes, inputRef = () => {}, ref, ...other } = inputProps;
  return (
    <div className="w-full relative">
      {variant === 'basic' ? (
        // Outlined
        <>
          <TextField
            fullWidth
            InputProps={{
              inputRef: (node) => {
                ref(node);
                inputRef(node);
              },
              classes: {
                input: clsx(classes.input, 'py-0 px-16 h-40 md:h-48 ltr:pr-48 rtl:pl-48'),
                notchedOutline: 'rounded-8',
              },
            }}
            variant="outlined"
            {...other}
          />
          <Icon
            className="absolute top-0 ltr:right-0 rtl:left-0 h-40 md:h-48 w-48 p-12 pointer-events-none"
            color="action"
          >
            search
          </Icon>
        </>
      ) : (
        // Standard
        <TextField
          fullWidth
          InputProps={{
            disableUnderline: true,
            inputRef: (node) => {
              ref(node);
              inputRef(node);
            },
            classes: {
              input: clsx(classes.input, 'py-0 px-16 h-48 md:h-64'),
            },
          }}
          variant="standard"
          {...other}
        />
      )}
    </div>
  );
}

function renderSuggestion(suggestion, { query, isHighlighted }) {
  const matches = match(suggestion.title, query);
  const parts = parse(suggestion.title, matches);

  return (
    <MenuItem selected={isHighlighted} component="div">
      <ListItemIcon className="min-w-40">
        {suggestion.icon ? (
          <Icon>{suggestion.icon}</Icon>
        ) : (
          <span className="text-20 w-24 font-semibold uppercase text-center">
            {suggestion.title[0]}
          </span>
        )}
      </ListItemIcon>
      <ListItemText
        primary={parts.map((part, index) =>
          part.highlight ? (
            <span key={String(index)} style={{ fontWeight: 600 }}>
              {part.text}
            </span>
          ) : (
            <strong key={String(index)} style={{ fontWeight: 300 }}>
              {part.text}
            </strong>
          )
        )}
      />
    </MenuItem>
  );
}

function getSuggestions(value, data) {
  const inputValue = _.deburr(value.trim()).toLowerCase();
  const inputLength = inputValue.length;
  let count = 0;

  return inputLength === 0
    ? []
    : data.filter((suggestion) => {
        const keep = count < 10 && match(suggestion.title, inputValue).length > 0;

        if (keep) {
          count += 1;
        }

        return keep;
      });
}

function getSuggestionValue(suggestion) {
  return suggestion.title;
}

const useStyles = makeStyles((theme) => ({
  root: {},
  container: {
    position: 'relative',
  },
  suggestionsContainerOpen: {
    position: 'absolute',
    zIndex: 1,
    marginTop: theme.spacing(),
    left: 0,
    right: 0,
  },
  suggestion: {
    display: 'block',
  },
  suggestionsList: {
    margin: 0,
    padding: 0,
    listStyleType: 'none',
  },
  input: {
    transition: theme.transitions.create(['background-color'], {
      easing: theme.transitions.easing.easeInOut,
      duration: theme.transitions.duration.short,
    }),
    '&:focus': {
      backgroundColor: theme.palette.background.paper,
    },
  },
}));

const initialState = {
  searchText: '',
  search: false,
  navigation: null,
  suggestions: [],
  noSuggestions: false,
};

function reducer(state, action) {
  switch (action.type) {
    case 'open': {
      return {
        ...state,
        opened: true,
      };
    }
    case 'close': {
      return {
        ...state,
        opened: false,
        searchText: '',
      };
    }
    case 'setSearchText': {
      return {
        ...state,
        searchText: action.value,
      };
    }
    case 'setNavigation': {
      return {
        ...state,
        navigation: action.value,
      };
    }
    case 'updateSuggestions': {
      const suggestions = getSuggestions(action.value, state.navigation);
      const isInputBlank = action.value.trim() === '';
      const noSuggestions = !isInputBlank && suggestions.length === 0;

      return {
        ...state,
        suggestions,
        noSuggestions,
      };
    }
    case 'clearSuggestions': {
      return {
        ...state,
        suggestions: [],
        noSuggestions: false,
      };
    }
    case 'decrement': {
      return { count: state.count - 1 };
    }
    default: {
      throw new Error();
    }
  }
}

function FuseSearch(props) {
  const navigation = useSelector(selectFlatNavigation);

  const [state, dispatch] = useReducer(reducer, initialState);
  const classes = useStyles(props);
  const suggestionsNode = useRef(null);
  const popperNode = useRef(null);
  const buttonNode = useRef(null);

  useEffect(() => {
    dispatch({
      type: 'setNavigation',
      value: navigation,
    });
  }, [navigation]);

  function showSearch(ev) {
    ev.stopPropagation();
    dispatch({ type: 'open' });
    document.addEventListener('keydown', escFunction, false);
  }

  function hideSearch() {
    dispatch({ type: 'close' });
    document.removeEventListener('keydown', escFunction, false);
  }

  function escFunction(event) {
    if (event.keyCode === 27) {
      hideSearch();
    }
  }

  function handleSuggestionsFetchRequested({ value }) {
    dispatch({
      type: 'updateSuggestions',
      value,
    });
  }

  function handleSuggestionSelected(event, { suggestion }) {
    event.preventDefault();
    event.stopPropagation();
    if (!suggestion.url) {
      return;
    }
    props.history.push(suggestion.url);
    hideSearch();
  }

  function handleSuggestionsClearRequested() {
    dispatch({
      type: 'clearSuggestions',
    });
  }

  function handleChange(event) {
    dispatch({
      type: 'setSearchText',
      value: event.target.value,
    });
  }

  function handleClickAway(event) {
    return (
      state.opened &&
      (!suggestionsNode.current || !suggestionsNode.current.contains(event.target)) &&
      hideSearch()
    );
  }

  const autosuggestProps = {
    renderInputComponent,
    highlightFirstSuggestion: true,
    suggestions: state.suggestions,
    onSuggestionsFetchRequested: handleSuggestionsFetchRequested,
    onSuggestionsClearRequested: handleSuggestionsClearRequested,
    onSuggestionSelected: handleSuggestionSelected,
    getSuggestionValue,
    renderSuggestion,
  };

  switch (props.variant) {
    case 'basic': {
      return (
        <div className={clsx('flex items-center w-full', props.className)} ref={popperNode}>
          <Autosuggest
            {...autosuggestProps}
            inputProps={{
              variant: props.variant,
              classes,
              placeholder: props.placeholder,
              value: state.searchText,
              onChange: handleChange,
              onFocus: showSearch,
              InputLabelProps: {
                shrink: true,
              },
              autoFocus: false,
            }}
            theme={{
              container: 'flex flex-1 w-full',
              suggestionsList: classes.suggestionsList,
              suggestion: classes.suggestion,
            }}
            renderSuggestionsContainer={(options) => (
              <Popper
                anchorEl={popperNode.current}
                open={Boolean(options.children) || state.noSuggestions}
                popperOptions={{ positionFixed: true }}
                className="z-9999"
              >
                <div ref={suggestionsNode}>
                  <Paper
                    className="shadow-lg rounded-8 overflow-hidden"
                    {...options.containerProps}
                    style={{ width: popperNode.current ? popperNode.current.clientWidth : null }}
                  >
                    {options.children}
                    {state.noSuggestions && (
                      <Typography className="px-16 py-12">{props.noResults}</Typography>
                    )}
                  </Paper>
                </div>
              </Popper>
            )}
          />
        </div>
      );
    }
    case 'full': {
      return (
        <div className={clsx(classes.root, 'flex', props.className)}>
          <Tooltip title="Click to search" placement="bottom">
            <div
              onClick={showSearch}
              onKeyDown={showSearch}
              role="button"
              tabIndex={0}
              ref={buttonNode}
            >
              {props.trigger}
            </div>
          </Tooltip>

          {state.opened && (
            <ClickAwayListener onClickAway={handleClickAway}>
              <Paper className="absolute left-0 right-0 top-0 h-full z-9999 shadow-0" square>
                <div className="flex items-center w-full h-full" ref={popperNode}>
                  <Autosuggest
                    {...autosuggestProps}
                    inputProps={{
                      classes,
                      placeholder: props.placeholder,
                      value: state.searchText,
                      onChange: handleChange,
                      InputLabelProps: {
                        shrink: true,
                      },
                      autoFocus: true,
                    }}
                    theme={{
                      container: 'flex flex-1 w-full',
                      suggestionsList: classes.suggestionsList,
                      suggestion: classes.suggestion,
                    }}
                    renderSuggestionsContainer={(options) => (
                      <Popper
                        anchorEl={popperNode.current}
                        open={Boolean(options.children) || state.noSuggestions}
                        popperOptions={{ positionFixed: true }}
                        className="z-9999"
                      >
                        <div ref={suggestionsNode}>
                          <Paper
                            className="shadow-lg"
                            square
                            {...options.containerProps}
                            style={{
                              width: popperNode.current ? popperNode.current.clientWidth : null,
                            }}
                          >
                            {options.children}
                            {state.noSuggestions && (
                              <Typography className="px-16 py-12">{props.noResults}</Typography>
                            )}
                          </Paper>
                        </div>
                      </Popper>
                    )}
                  />
                  <IconButton onClick={hideSearch} className="mx-8">
                    <Icon>close</Icon>
                  </IconButton>
                </div>
              </Paper>
            </ClickAwayListener>
          )}
        </div>
      );
    }
    default: {
      return null;
    }
  }
}

FuseSearch.propTypes = {};
FuseSearch.defaultProps = {
  trigger: (
    <IconButton className="w-40 h-40">
      <Icon>search</Icon>
    </IconButton>
  ),
  variant: 'full',
  placeholder: 'Search',
  noResults: 'No results..',
};

export default withRouter(memo(FuseSearch));
