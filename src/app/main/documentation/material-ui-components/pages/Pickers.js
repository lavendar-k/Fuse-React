import FuseExample from '@fuse/core/FuseExample';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */
const useStyles = makeStyles((theme) => ({
  layoutRoot: {
    '& .description': {
      marginBottom: 16,
    },
  },
}));
function PickersDoc(props) {
  const classes = useStyles();
  return (
    <>
      <div className="flex flex-1 flex-grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="outlined"
          component="a"
          href="https://material-ui.com/components/pickers"
          target="_blank"
          role="button"
        >
          <Icon>link</Icon>
          <span className="mx-4">Reference</span>
        </Button>
      </div>
      <Typography className="text-44 mt-32 mb-8" component="h1">
        Date / Time pickers
      </Typography>
      <Typography className="description">
        Date pickers and Time pickers provide a simple way to select a single value from a
        pre-determined set.
      </Typography>

      <ul>
        <li>On mobile, pickers are best suited for display in confirmation dialog.</li>
        <li>
          For inline display, such as on a form, consider using compact controls such as segmented
          dropdown buttons.
        </li>
      </ul>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        @material-ui/pickers
      </Typography>
      <Typography className="mb-16" component="div">
        {' '}
        src="https://img.shields.io/github/stars/mui-org/material-ui-pickers.svg?style=social&label=Stars"
        alt="stars/> src="https://img.shields.io/npm/dm/@material-ui/pickers.svg" alt="npm
        downloads/>
      </Typography>
      <Typography className="mb-16" component="div">
        <a href="https://material-ui-pickers.dev/">@material-ui/pickers</a> provides date picker and
        time picker controls.
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/pickers/MaterialUIPickers.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/pickers/MaterialUIPickers.js')}
        />
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Native pickers
      </Typography>
      <Typography className="mb-16" component="div">
        ⚠️ Native input controls support by browsers{' '}
        <a href="https://caniuse.com/#feat=input-datetime">isn&#39;t perfect</a>. Have a look at{' '}
        <a href="https://material-ui-pickers.dev/">@material-ui/pickers</a> for a richer solution.
      </Typography>
      <Typography className="text-24 mt-32 mb-8" component="h3">
        Datepickers
      </Typography>
      <Typography className="mb-16" component="div">
        A native datepicker example with <code>type="date"</code>.
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/pickers/DatePickers.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/pickers/DatePickers.js')}
        />
      </Typography>
      <Typography className="text-24 mt-32 mb-8" component="h3">
        Date &amp; Time pickers
      </Typography>
      <Typography className="mb-16" component="div">
        A native date &amp; time picker example with <code>type="datetime-local"</code>.
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/pickers/DateAndTimePickers.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/pickers/DateAndTimePickers.js')}
        />
      </Typography>
      <Typography className="text-24 mt-32 mb-8" component="h3">
        Time pickers
      </Typography>
      <Typography className="mb-16" component="div">
        A native time picker example with <code>type="time"</code>.
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/pickers/TimePickers.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/pickers/TimePickers.js')}
        />
      </Typography>
    </>
  );
}

export default PickersDoc;
