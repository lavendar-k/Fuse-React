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
function BackdropDoc(props) {
  const classes = useStyles();
  return (
    <>
      <div className="flex flex-1 flex-grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="outlined"
          component="a"
          href="https://material-ui.com/components/backdrop"
          target="_blank"
          role="button"
        >
          <Icon>link</Icon>
          <span className="mx-4">Reference</span>
        </Button>
      </div>
      <Typography className="text-44 mt-32 mb-8" component="h1">
        Backdrop
      </Typography>
      <Typography className="description">
        The backdrop component is used to provide emphasis on a particular element or parts of it.
      </Typography>

      <Typography className="mb-16" component="div">
        The backdrop signals to the user of a state change within the application and can be used
        for creating loaders, dialogs and more. In its simplest form, the backdrop component will
        add a dimmed layer over your application.
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/backdrop/SimpleBackdrop.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/backdrop/SimpleBackdrop.js')}
        />
      </Typography>
    </>
  );
}

export default BackdropDoc;
