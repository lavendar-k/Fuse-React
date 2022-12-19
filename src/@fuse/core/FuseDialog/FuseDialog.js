import Dialog from '@material-ui/core/Dialog';
import { useDispatch, useSelector } from 'react-redux';
import { closeDialog } from 'app/store/fuse/dialogSlice';

function FuseDialog(props) {
  const dispatch = useDispatch();
  const state = useSelector(({ fuse }) => fuse.dialog.state);
  const options = useSelector(({ fuse }) => fuse.dialog.options);

  return (
    <Dialog
      open={state}
      onClose={(ev) => dispatch(closeDialog())}
      aria-labelledby="fuse-dialog-title"
      classes={{
        paper: 'rounded-8',
      }}
      {...options}
    />
  );
}

export default FuseDialog;
