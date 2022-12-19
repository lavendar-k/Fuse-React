import Dialog from '@material-ui/core/Dialog';
import { useDispatch, useSelector } from 'react-redux';
import { closeLabelsDialog } from '../../store/labelsSlice';
import LabelsForm from './LabelsForm';

function LabelsDialog(props) {
  const dispatch = useDispatch();
  const labelsDialogOpen = useSelector(({ notesApp }) => notesApp.labels.labelsDialogOpen);

  return (
    <Dialog
      classes={{
        paper: 'w-full max-w-320 p-16 m-24',
      }}
      onClose={(ev) => dispatch(closeLabelsDialog())}
      open={labelsDialogOpen}
    >
      <LabelsForm />
    </Dialog>
  );
}

export default LabelsDialog;
