import Popover from '@material-ui/core/Popover';

function ToolbarMenu(props) {
  return (
    <Popover
      open={Boolean(props.state)}
      anchorEl={props.state}
      onClose={props.onClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
    >
      <>{props.children}</>
    </Popover>
  );
}

export default ToolbarMenu;
