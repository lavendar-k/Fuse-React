import FuseExample from '@fuse/core/FuseExample';
import FuseHighlight from '@fuse/core/FuseHighlight';
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
function ProgressDoc(props) {
  const classes = useStyles();
  return (
    <>
      <div className="flex flex-1 flex-grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="outlined"
          component="a"
          href="https://material-ui.com/components/progress"
          target="_blank"
          role="button"
        >
          <Icon>link</Icon>
          <span className="mx-4">Reference</span>
        </Button>
      </div>
      <Typography className="text-44 mt-32 mb-8" component="h1">
        Progress
      </Typography>
      <Typography className="description">
        Progress indicators commonly known as spinners, express an unspecified wait time or display
        the length of a process. The animation works with CSS, not JavaScript.
      </Typography>

      <Typography className="mb-16" component="div">
        <a href="https://material.io/design/components/progress-indicators.html">
          Progress indicators
        </a>{' '}
        inform users about the status of ongoing processes, such as loading an app, submitting a
        form, or saving updates. They communicate an app’s state and indicate available actions,
        such as whether users can navigate away from the current screen.
      </Typography>
      <ul>
        <li>
          <strong>Determinate</strong> indicators display how long an operation will take.
        </li>
        <li>
          <strong>Indeterminate</strong> indicators visualize an unspecified wait time.
        </li>
      </ul>
      <Typography className="mb-16" component="div">
        When displaying progress for a sequence of processes, indicate overall progress rather than
        the progress of each activity.
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Circular
      </Typography>
      <Typography className="text-24 mt-32 mb-8" component="h3">
        Circular indeterminate
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/progress/CircularIndeterminate.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/progress/CircularIndeterminate.js')}
        />
      </Typography>
      <Typography className="text-24 mt-32 mb-8" component="h3">
        Circular determinate
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/progress/CircularDeterminate.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/progress/CircularDeterminate.js')}
        />
      </Typography>
      <Typography className="text-24 mt-32 mb-8" component="h3">
        Interactive integration
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/progress/CircularIntegration.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/progress/CircularIntegration.js')}
        />
      </Typography>
      <Typography className="text-24 mt-32 mb-8" component="h3">
        Circular with label
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/progress/CircularWithValueLabel.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/progress/CircularWithValueLabel.js')}
        />
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Linear
      </Typography>
      <Typography className="text-24 mt-32 mb-8" component="h3">
        Linear indeterminate
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/progress/LinearIndeterminate.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/progress/LinearIndeterminate.js')}
        />
      </Typography>
      <Typography className="text-24 mt-32 mb-8" component="h3">
        Linear determinate
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/progress/LinearDeterminate.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/progress/LinearDeterminate.js')}
        />
      </Typography>
      <Typography className="text-24 mt-32 mb-8" component="h3">
        Linear buffer
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/progress/LinearBuffer.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/progress/LinearBuffer.js')}
        />
      </Typography>
      <Typography className="text-24 mt-32 mb-8" component="h3">
        Linear with label
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/progress/LinearWithValueLabel.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/progress/LinearWithValueLabel.js')}
        />
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Non-standard ranges
      </Typography>
      <Typography className="mb-16" component="div">
        The progress components accept a value in the range 0 - 100. This simplifies things for
        screen-reader users, where these are the default min / max values. Sometimes, however, you
        might be working with a data source where the values fall outside this range. Here&#39;s how
        you can easily transform a value in any range to a scale of 0 - 100:
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
// MIN = Minimum expected value
// MAX = Maximium expected value
// Function to normalise the values (MIN / MAX could be integrated)
const normalise = value => (value - MIN) * 100 / (MAX - MIN);

// Example component that utilizes the \`normalise\` function at the point of render.
function Progress(props) {
  return (
    <React.Fragment>
      <CircularProgress variant="determinate" value={normalise(props.value)} />
      <LinearProgress variant="determinate" value={normalise(props.value)} />
    </React.Fragment>
  )
}
`}
      </FuseHighlight>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Customized progress
      </Typography>
      <Typography className="mb-16" component="div">
        Here are some examples of customizing the component. You can learn more about this in the
        <a href="/customization/components/">overrides documentation page</a>.
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/progress/CustomizedProgressBars.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/progress/CustomizedProgressBars.js')}
        />
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Delaying appearance
      </Typography>
      <Typography className="mb-16" component="div">
        There are{' '}
        <a href="https://www.nngroup.com/articles/response-times-3-important-limits/">
          3 important limits
        </a>{' '}
        to know around response time. The ripple effect of the <code>ButtonBase</code> component
        ensures that the user feels that the system is reacting instantaneously. Normally, no
        special feedback is necessary during delays of more than 0.1 but less than 1.0 second. After
        1.0 second, you can display a loader to keep user&#39;s flow of thought uninterrupted.
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/progress/DelayingAppearance.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/progress/DelayingAppearance.js')}
        />
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Limitations
      </Typography>
      <Typography className="mb-16" component="div">
        Under heavy load, you might lose the stroke dash animation or see random CircularProgress
        ring widths. You should run processor intensive operations in a web worker or by batch in
        order not to block the main rendering thread.
      </Typography>
      <Typography className="mb-16" component="div">
        {' '}
        src="/material-ui-static/images/progress/heavy-load.gif" alt="heavy load/>
      </Typography>
      <Typography className="mb-16" component="div">
        When it&#39;s not possible, you can leverage the <code>disableShrink</code> property to
        mitigate the issue. See{' '}
        <a href="https://github.com/mui-org/material-ui/issues/10327">this issue</a>.
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/progress/CircularUnderLoad.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/progress/CircularUnderLoad.js')}
        />
      </Typography>
    </>
  );
}

export default ProgressDoc;
