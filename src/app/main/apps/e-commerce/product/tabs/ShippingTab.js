import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import { Controller, useFormContext } from 'react-hook-form';

function ShippingTab(props) {
  const methods = useFormContext();
  const { control } = methods;

  return (
    <div>
      <div className="flex -mx-4">
        <Controller
          name="width"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              className="mt-8 mb-16 mx-4"
              label="Width"
              autoFocus
              id="width"
              variant="outlined"
              fullWidth
            />
          )}
        />

        <Controller
          name="height"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              className="mt-8 mb-16 mx-4"
              label="Height"
              id="height"
              variant="outlined"
              fullWidth
            />
          )}
        />

        <Controller
          name="depth"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              className="mt-8 mb-16 mx-4"
              label="Depth"
              id="depth"
              variant="outlined"
              fullWidth
            />
          )}
        />
      </div>

      <Controller
        name="weight"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            label="Weight"
            id="weight"
            variant="outlined"
            fullWidth
          />
        )}
      />
      <Controller
        name="extraShippingFee"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            label="Extra Shipping Fee"
            id="extraShippingFee"
            variant="outlined"
            InputProps={{
              startAdornment: <InputAdornment position="start">$</InputAdornment>,
            }}
            fullWidth
          />
        )}
      />
    </div>
  );
}

export default ShippingTab;
