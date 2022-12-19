import FuseChipSelect from '@fuse/core/FuseChipSelect';
import Typography from '@material-ui/core/Typography';
import { useState } from 'react';

const suggestions = ['Sea', 'Sky', 'Forest', 'Aerial', 'Art'].map((item) => ({
  value: item,
  label: item,
}));

function SimpleExample() {
  const [tags, setTags] = useState([
    {
      value: 'nature',
      label: 'Nature',
    },
    {
      value: 'city',
      label: 'City',
    },
    {
      value: 'landscape',
      label: 'Landscape',
    },
  ]);

  function handleChipChange(value) {
    setTags(value);
  }

  return (
    <div className="w-full max-w-sm pt-64 pb-224">
      <Typography className="text-24 mt-24 mb-8" component="h2">
        Standart
      </Typography>

      <FuseChipSelect
        className="w-full my-16"
        value={tags}
        onChange={handleChipChange}
        placeholder="Select multiple tags"
        textFieldProps={{
          label: 'Tags',
          InputLabelProps: {
            shrink: true,
          },
          variant: 'standard',
        }}
        options={suggestions}
        isMulti
      />

      <Typography className="text-24 mt-24 mb-8" component="h2">
        Outlined
      </Typography>

      <FuseChipSelect
        className="w-full my-16"
        value={tags}
        onChange={handleChipChange}
        placeholder="Select multiple tags"
        textFieldProps={{
          label: 'Tags',
          InputLabelProps: {
            shrink: true,
          },
          variant: 'outlined',
        }}
        options={suggestions}
        isMulti
      />

      <Typography className="text-24 mt-24 mb-8" component="h2">
        Filled
      </Typography>

      <FuseChipSelect
        className="w-full my-16"
        value={tags}
        onChange={handleChipChange}
        placeholder="Select multiple tags"
        textFieldProps={{
          label: 'Tags',
          InputLabelProps: {
            shrink: true,
          },
          variant: 'filled',
        }}
        options={suggestions}
        isMulti
      />
    </div>
  );
}

export default SimpleExample;
