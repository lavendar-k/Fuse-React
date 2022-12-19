import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import { useDispatch } from 'react-redux';
import { toggleQuickPanel } from './store/stateSlice';

function QuickPanelToggleButton(props) {
  const dispatch = useDispatch();

  return (
    <IconButton className="w-40 h-40" onClick={(ev) => dispatch(toggleQuickPanel())}>
      {props.children}
    </IconButton>
  );
}

QuickPanelToggleButton.defaultProps = {
  children: <Icon>bookmarks</Icon>,
};

export default QuickPanelToggleButton;
