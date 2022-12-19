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
function TextareaAutosizeDoc(props) {
  const classes = useStyles();
  return (
    <>
      <div className="flex flex-1 flex-grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="outlined"
          component="a"
          href="https://material-ui.com/components/textarea-autosize"
          target="_blank"
          role="button"
        >
          <Icon>link</Icon>
          <span className="mx-4">Reference</span>
        </Button>
      </div>
      <Typography className="text-44 mt-32 mb-8" component="h1">
        Textarea Autosize
      </Typography>
      <Typography className="description">
        A textarea component for React which grows with content.
      </Typography>

      <ul>
        <li>
          📦 <a href="/size-snapshot">2.1 kB gzipped</a>
        </li>
      </ul>
      <Typography className="mb-16" component="div">
        The <code>TextareaAutosize</code> component automatically adjust the textarea height on
        keyboard and window resize events.
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Empty
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/textarea-autosize/EmptyTextarea.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/textarea-autosize/EmptyTextarea.js')}
        />
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Minimum height
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/textarea-autosize/MinHeightTextarea.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/textarea-autosize/MinHeightTextarea.js')}
        />
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Maximum height
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/textarea-autosize/MaxHeightTextarea.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/textarea-autosize/MaxHeightTextarea.js')}
        />
      </Typography>
    </>
  );
}

export default TextareaAutosizeDoc;
