import FuseChipSelect from '@fuse/core/FuseChipSelect';
import _ from '@lodash';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from '@material-ui/core/InputLabel';
import clsx from 'clsx';
import { withFormsy } from 'formsy-react';
import { memo } from 'react';

function FuseChipSelectFormsy(props) {
  const importedProps = _.pick(props, [
    'children',
    'classes',
    'className',
    'defaultValue',
    'disabled',
    'fullWidth',
    'id',
    'label',
    'name',
    'onBlur',
    'onChange',
    'onFocus',
    'placeholder',
    'required',
    'textFieldProps',
    'variant',
    'isMulti',
    'options',
    'errorMessage',
    'color',
  ]);

  // An error message is returned only if the component is invalid
  const { errorMessage, value } = props;

  function changeValue(val, selectedOptions) {
    if (props.multiple) {
      props.setValue(selectedOptions.map((option) => option.value));
    } else {
      props.setValue(val);
    }
  }

  return (
    <FormControl
      error={Boolean((!props.isPristine && props.showRequired) || errorMessage)}
      className={clsx(
        props.className,
        'z-10',
        props.showRequired ? 'required' : '',
        props.showError ? 'error' : null
      )}
      variant={importedProps.variant}
    >
      {props.label && <InputLabel htmlFor={props.name}>{props.label}</InputLabel>}
      <FuseChipSelect
        {...importedProps}
        value={value}
        onChange={changeValue}
        error={Boolean((!props.isPristine && props.showRequired) || errorMessage)}
      />
      {Boolean(errorMessage) && <FormHelperText>{errorMessage}</FormHelperText>}
    </FormControl>
  );
}

export default memo(withFormsy(FuseChipSelectFormsy));
