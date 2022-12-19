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
function PaperDoc(props) {
  const classes = useStyles();
  return (
    <>
      <div className="flex flex-1 flex-grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="outlined"
          component="a"
          href="https://material-ui.com/components/paper"
          target="_blank"
          role="button"
        >
          <Icon>link</Icon>
          <span className="mx-4">Reference</span>
        </Button>
      </div>
      <Typography className="text-44 mt-32 mb-8" component="h1">
        Paper
      </Typography>
      <Typography className="description">
        In Material Design, the physical properties of paper are translated to the screen.{' '}
      </Typography>

      <Typography className="mb-16" component="div">
        The background of an application resembles the flat, opaque texture of a sheet of paper, and
        an application’s behavior mimics paper’s ability to be re-sized, shuffled, and bound
        together in multiple sheets.
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/paper/SimplePaper.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/paper/SimplePaper.js')}
        />
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Variants
      </Typography>
      <Typography className="mb-16" component="div">
        If you need an outlined surface, use the <code>variant</code> prop.
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/paper/Variants.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/paper/Variants.js')}
        />
      </Typography>
    </>
  );
}

export default PaperDoc;
