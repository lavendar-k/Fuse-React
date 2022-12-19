import { useDebounce } from '@fuse/hooks';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';

import _ from '@lodash';
import TextField from '@material-ui/core/TextField';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import LabelModel from 'app/main/apps/notes/model/LabelModel';
import clsx from 'clsx';
import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';
import { updateLabels } from '../../store/labelsSlice';

const defaultValues = {
  name: '',
};

/**
 * Form Validation Schema
 */
const schema = yup.object().shape({
  name: yup.string().required('You must enter a label title'),
});

function LabelsForm(props) {
  const dispatch = useDispatch();
  const labels = useSelector(({ notesApp }) => notesApp.labels.entities);

  const [labelsForm, setLabels] = useState(labels);

  const { control, formState, handleSubmit, reset } = useForm({
    mode: 'onChange',
    defaultValues,
    resolver: yupResolver(schema),
  });

  const { isValid, dirtyFields, errors } = formState;

  useEffect(() => {
    setLabels(labels);
  }, [labels]);

  const handleOnChange = useDebounce((_labels) => {
    dispatch(updateLabels(_labels));
  }, 300);

  useEffect(() => {
    if (labelsForm && !_.isEqual(labelsForm, labels)) {
      handleOnChange(labelsForm);
    }
  }, [handleOnChange, labels, labelsForm]);

  function onSubmit(data) {
    const newLabel = LabelModel(data);
    setLabels(_.setIn(labelsForm, newLabel.id, newLabel));
    reset(defaultValues);
  }

  return (
    <>
      <Typography className="text-16 mb-8 font-semibold">Edit Labels</Typography>
      <List dense>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ListItem className="p-0 mb-16" dense>
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  className={clsx('flex flex-1')}
                  error={!!errors.name}
                  helperText={errors?.name?.message}
                  placeholder="Create new label"
                  variant="outlined"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Icon className="list-item-icon text-16" color="action">
                          add
                        </Icon>
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          className="w-32 h-32 p-0"
                          aria-label="Delete"
                          disabled={_.isEmpty(dirtyFields) || !isValid}
                          type="submit"
                        >
                          <Icon fontSize="small">check</Icon>
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              )}
            />
          </ListItem>
        </form>
        {useMemo(() => {
          function handleOnDelete(label) {
            setLabels(_.omit(labelsForm, [label.id]));
          }

          function handleLabelChange(event, label) {
            const updatedLabel = LabelModel(_.setIn(label, event.target.name, event.target.value));
            setLabels(_.setIn(labelsForm, updatedLabel.id, updatedLabel));
          }

          return Object.entries(labelsForm).map(([key, label]) => (
            <ListItem className="p-0 mb-8" key={label.id} dense>
              <Icon className="list-item-icon text-16" color="action">
                label
              </Icon>
              <Input
                className={clsx('flex flex-1 mx-8')}
                name="name"
                value={label.name}
                onChange={(event) => handleLabelChange(event, label)}
                disableUnderline
              />
              <IconButton
                className="w-32 h-32 mx-4 p-0"
                aria-label="Delete"
                onClick={(ev) => handleOnDelete(label)}
              >
                <Icon fontSize="small">delete</Icon>
              </IconButton>
            </ListItem>
          ));
        }, [labelsForm])}
      </List>
    </>
  );
}

export default LabelsForm;
