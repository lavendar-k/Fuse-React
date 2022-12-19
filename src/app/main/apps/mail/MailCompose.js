import { yupResolver } from '@hookform/resolvers/yup';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import _ from '@lodash';
import WYSIWYGEditor from 'app/shared-components/WYSIWYGEditor';
import MailAttachment from './MailAttachment';

/**
 * Form Validation Schema
 */
const schema = yup.object().shape({
  to: yup.string().required('You must enter an e-mail').email('You must enter a valid e-mail.'),
});

function MailCompose() {
  const [openDialog, setOpenDialog] = useState(false);
  const { watch, handleSubmit, formState, control } = useForm({
    mode: 'onChange',
    defaultValues: {
      from: 'johndoe@creapond.com',
      to: '',
      cc: '',
      bcc: '',
      subject: '',
      message: '',
    },
    resolver: yupResolver(schema),
  });

  const { isValid, dirtyFields, errors } = formState;

  const { t } = useTranslation('mailApp');

  function handleOpenDialog() {
    setOpenDialog(true);
  }

  function handleCloseDialog() {
    setOpenDialog(false);
  }

  function handleDelete() {
    setOpenDialog(false);
  }

  function onSubmit(data) {
    console.info(data);
    setOpenDialog(false);
  }

  return (
    <div className="p-24 pb-8">
      <Button variant="contained" color="secondary" className="w-full" onClick={handleOpenDialog}>
        {t('COMPOSE')}
      </Button>

      <Dialog open={openDialog} onClose={handleCloseDialog} aria-labelledby="form-dialog-title">
        <AppBar position="static" elevation={0}>
          <Toolbar className="flex w-full">
            <Typography variant="subtitle1" color="inherit">
              New Message
            </Typography>
          </Toolbar>
        </AppBar>

        <form noValidate onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
          <DialogContent classes={{ root: 'p-16 pb-0 sm:p-24 sm:pb-0' }}>
            <Controller
              name="from"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  className="mt-8 mb-16"
                  label="From"
                  id="from"
                  variant="outlined"
                  fullWidth
                  inputProps={{ readOnly: true }}
                />
              )}
            />

            <Controller
              name="to"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  className="mt-8 mb-16"
                  label="To"
                  autoFocus
                  id="to"
                  error={!!errors.to}
                  helperText={errors?.to?.message}
                  variant="outlined"
                  fullWidth
                  required
                />
              )}
            />

            <Controller
              name="cc"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  className="mt-8 mb-16"
                  label="Cc"
                  id="cc"
                  variant="outlined"
                  fullWidth
                />
              )}
            />

            <Controller
              name="bcc"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  className="mt-8 mb-16"
                  label="Bcc"
                  id="bcc"
                  name="bcc"
                  variant="outlined"
                  fullWidth
                />
              )}
            />

            <Controller
              name="subject"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  className="mt-8 mb-16"
                  label="Subject"
                  id="subject"
                  name="subject"
                  variant="outlined"
                  fullWidth
                />
              )}
            />

            <Controller
              className="mt-8 mb-16"
              render={({ field }) => <WYSIWYGEditor {...field} />}
              name="message"
              control={control}
            />

            <div className="pt-8">
              <MailAttachment fileName="attachment-2.doc" size="12 kb" />
              <MailAttachment fileName="attachment-1.jpg" size="350 kb" />
            </div>
          </DialogContent>

          <DialogActions className="justify-between px-8 py-16">
            <div className="px-16">
              <Button
                variant="contained"
                color="primary"
                type="submit"
                disabled={_.isEmpty(dirtyFields) || !isValid}
              >
                Send
              </Button>
              <IconButton>
                <Icon>attach_file</Icon>
              </IconButton>
            </div>
            <IconButton onClick={handleDelete}>
              <Icon>delete</Icon>
            </IconButton>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}

export default MailCompose;
