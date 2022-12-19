import Dialog from '@material-ui/core/Dialog';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import { closeCardDialog } from '../../../store/cardSlice';
import BoardCardForm from './BoardCardForm';

const useStyles = makeStyles((theme) => ({
  paper: {
    color: theme.palette.text.primary,
  },
}));

function BoardCardDialog(props) {
  const dispatch = useDispatch();
  const cardDialogOpen = useSelector(({ scrumboardApp }) => scrumboardApp.card.dialogOpen);

  const classes = useStyles(props);

  return (
    <Dialog
      classes={{
        paper: clsx(classes.paper, 'max-w-lg w-full m-24'),
      }}
      onClose={(ev) => dispatch(closeCardDialog())}
      open={cardDialogOpen}
    >
      <BoardCardForm />
    </Dialog>
  );
}

export default BoardCardDialog;
