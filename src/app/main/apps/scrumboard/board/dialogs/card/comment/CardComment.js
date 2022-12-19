import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import _ from '@lodash';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import CommentModel from 'app/main/apps/scrumboard/model/CommentModel';
import * as yup from 'yup';

/**
 * Form Validation Schema
 */
const schema = yup.object().shape({
  message: yup.string().required('You must enter a comment'),
});

function CardComment(props) {
  const defaultValues = {
    idMember: '36027j1930450d8bf7b10158',
    message: '',
  };
  const { control, formState, handleSubmit, reset } = useForm({
    mode: 'onChange',
    defaultValues,
    resolver: yupResolver(schema),
  });

  const { isValid, dirtyFields, errors } = formState;

  const user = _.find(props.members, { id: defaultValues.idMember });

  function onSubmit(data) {
    props.onCommentAdd(CommentModel({ ...defaultValues, ...data }));
    reset(defaultValues);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex -mx-8">
      <Avatar className="w-32 h-32 mx-8" alt={user.name} src={user.avatar} />
      <div className="flex flex-col items-start flex-1 mx-8">
        <Controller
          name="message"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              className="flex flex-1"
              fullWidth
              error={!!errors.message}
              helperText={errors?.message?.message}
              row={3}
              variant="outlined"
              label="Add comment"
              placeholder="Write a comment..."
            />
          )}
        />

        <Button
          className="mt-16"
          aria-label="save"
          variant="contained"
          color="secondary"
          type="submit"
          size="small"
          disabled={_.isEmpty(dirtyFields) || !isValid}
        >
          Save
        </Button>
      </div>
    </form>
  );
}

export default CardComment;
