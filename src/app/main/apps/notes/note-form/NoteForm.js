import FuseScrollbars from '@fuse/core/FuseScrollbars';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import _ from '@lodash';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import NoteModel from 'app/main/apps/notes/model/NoteModel';
import NoteLabel from 'app/main/apps/notes/NoteLabel';
import NoteReminderLabel from 'app/main/apps/notes/NoteReminderLabel';
import { useState, useEffect } from 'react';
import { withRouter, useParams } from 'react-router-dom';
import * as yup from 'yup';
import format from 'date-fns/format';
import NoteFormList from './checklist/NoteFormList';
import NoteFormLabelMenu from './NoteFormLabelMenu';
import NoteFormReminder from './NoteFormReminder';
import NoteFormUploadImage from './NoteFormUploadImage';

/**
 * Form Validation Schema
 */
const schema = yup.object().shape({
  title: yup.string(),
  description: yup.string(),
  image: yup.string(),
  checklist: yup.array(),
  oneOfThemRequired: yup.bool().when(['title', 'description', 'image', 'checklist'], {
    is: (a, b, c, d) => (!a && !b && !c && !d) || (!!a && !!b && !!c && !!d),
    then: yup.bool().required(''),
    otherwise: yup.bool(),
  }),
});

function NoteForm(props) {
  const [showList, setShowList] = useState(false);
  const routeParams = useParams();
  const defaultValues = _.merge(
    {},
    NoteModel(),
    props.note,
    routeParams.labelId ? { labels: [routeParams.labelId] } : null,
    routeParams.id === 'archive' ? { archive: true } : null
  );
  const { formState, handleSubmit, getValues, reset, watch, setValue, control } = useForm({
    mode: 'onChange',
    defaultValues,
    resolver: yupResolver(schema),
  });

  const { isValid, dirtyFields, errors } = formState;

  const noteForm = watch();

  /**
   * Update Note
   */
  useEffect(() => {
    if (!props.note || props.variant === 'new' || !props.onChange) {
      return;
    }
    if (!_.isEqual(props.note, noteForm)) {
      props.onChange(noteForm);
    }
  }, [noteForm, props, defaultValues]);

  function handleRemoveLabel(id) {
    setValue(
      `labels`,
      noteForm.labels.filter((_id) => _id !== id)
    );
  }

  /**
   * Create New Note
   */
  function onCreate(data) {
    if (!props.onCreate) {
      return;
    }
    props.onCreate(data);
  }

  return (
    <div className="flex flex-col w-full">
      <FuseScrollbars className="flex flex-auto w-full max-h-640">
        <div className="w-full">
          <Controller
            name="image"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value } }) => {
              if (value === '') {
                return null;
              }
              return (
                <div className="relative">
                  <img src={value} className="w-full block" alt="note" />
                  <Fab
                    className="absolute right-0 bottom-0 m-8"
                    variant="extended"
                    size="small"
                    color="secondary"
                    aria-label="Delete Image"
                    type="button"
                    onClick={() => onChange('')}
                  >
                    <Icon fontSize="small">delete</Icon>
                  </Fab>
                </div>
              );
            }}
          />

          <div className="px-20 my-16">
            <Controller
              name="title"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  className="font-semibold text-14"
                  placeholder="Title"
                  type="text"
                  disableUnderline
                  fullWidth
                />
              )}
            />
          </div>
          <div className="px-20 my-16">
            <Controller
              name="description"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  placeholder="Take a note..."
                  multiline
                  rows="4"
                  disableUnderline
                  fullWidth
                />
              )}
            />
          </div>

          <Controller
            name="checklist"
            control={control}
            defaultValue={[]}
            render={({ field: { onChange, value } }) => {
              if (value.length === 0 && !showList) {
                return null;
              }
              return (
                <div className="px-16">
                  <NoteFormList checklist={value} onCheckListChange={(val) => onChange(val)} />
                </div>
              );
            }}
          />

          {(noteForm.labels || noteForm.reminder || noteForm.time) && (
            <div className="flex flex-wrap w-full px-20 my-16 -mx-4">
              {noteForm.reminder && (
                <NoteReminderLabel className="mt-4 mx-4" date={noteForm.reminder} />
              )}

              <Controller
                name="labels"
                control={control}
                defaultValue={[]}
                render={({ field: { onChange, value } }) => {
                  if (!value) {
                    return null;
                  }
                  return value.map((id) => (
                    <NoteLabel
                      id={id}
                      key={id}
                      className="mt-4 mx-4"
                      onDelete={() => onChange(value.filter((_id) => _id !== id))}
                    />
                  ));
                }}
              />

              {noteForm.time && (
                <Typography color="textSecondary" className="text-12 mt-8 mx-4">
                  Edited: {format(new Date(noteForm.time), 'MMM dd yy, h:mm')}
                </Typography>
              )}
            </div>
          )}
        </div>
      </FuseScrollbars>

      <div className="flex flex-auto justify-between items-center px-16 pb-12">
        <div className="flex items-center">
          <Tooltip title="Remind me" placement="bottom">
            <div>
              <Controller
                name="reminder"
                control={control}
                defaultValue={[]}
                render={({ field: { onChange, value } }) => (
                  <NoteFormReminder reminder={value} onChange={(val) => onChange(val)} />
                )}
              />
            </div>
          </Tooltip>

          <Tooltip title="Add image" placement="bottom">
            <div>
              <NoteFormUploadImage
                onChange={(val) =>
                  setValue('image', val, { shouldDirty: true, shouldValidate: true })
                }
              />
            </div>
          </Tooltip>

          <Tooltip title="Add checklist" placement="bottom">
            <IconButton className="w-32 h-32 mx-4 p-0" onClick={() => setShowList(!showList)}>
              <Icon fontSize="small">playlist_add_check</Icon>
            </IconButton>
          </Tooltip>

          <Tooltip title="Change labels" placement="bottom">
            <div>
              <NoteFormLabelMenu
                note={noteForm}
                onChange={(labels) => setValue('labels', labels)}
              />
            </div>
          </Tooltip>

          <Controller
            name="archive"
            control={control}
            defaultValue={false}
            render={({ field: { onChange, value } }) => (
              <Tooltip title={value ? 'Unarchive' : 'Archive'} placement="bottom">
                <div>
                  <IconButton
                    className="w-32 h-32 mx-4 p-0"
                    onClick={() => {
                      onChange(!value);

                      if (props.variant === 'new') {
                        setTimeout(() => onCreate(getValues()));
                      }
                    }}
                    // disabled={newFormButtonDisabled()}
                  >
                    <Icon fontSize="small">{value ? 'unarchive' : 'archive'}</Icon>
                  </IconButton>
                </div>
              </Tooltip>
            )}
          />
        </div>

        <div className="flex items-center">
          {props.variant === 'new' ? (
            <Button
              className="m-4"
              type="submit"
              variant="contained"
              color="secondary"
              size="small"
              onClick={handleSubmit(onCreate)}
              disabled={_.isEmpty(dirtyFields) || !isValid}
            >
              Create
            </Button>
          ) : (
            <>
              <Tooltip title="Delete Note" placement="bottom">
                <IconButton className="w-32 h-32 mx-4 p-0" onClick={props.onRemove}>
                  <Icon fontSize="small">delete</Icon>
                </IconButton>
              </Tooltip>
              <Button className="m-4" onClick={props.onClose} variant="outlined" size="small">
                Close
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

NoteForm.propTypes = {};
NoteForm.defaultProps = {
  variant: 'edit',
  note: null,
};

export default withRouter(NoteForm);
