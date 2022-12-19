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
function TimelineDoc(props) {
  const classes = useStyles();
  return (
    <>
      <div className="flex flex-1 flex-grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="outlined"
          component="a"
          href="https://material-ui.com/components/timeline"
          target="_blank"
          role="button"
        >
          <Icon>link</Icon>
          <span className="mx-4">Reference</span>
        </Button>
      </div>
      <Typography className="text-44 mt-32 mb-8" component="h1">
        Timeline
      </Typography>
      <Typography className="description">
        The timeline displays a list of events in chronological order.
      </Typography>

      <Typography className="mb-16" component="div">
        <strong>Note:</strong> This component is not documented in the{' '}
        <a href="https://material.io/">Material Design guidelines</a>, but Material-UI supports it.
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Basic timeline
      </Typography>
      <Typography className="mb-16" component="div">
        A basic timeline showing list of events.
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/timeline/BasicTimeline.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/timeline/BasicTimeline.js')}
        />
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Right aligned timeline
      </Typography>
      <Typography className="mb-16" component="div">
        The timeline can be positioned on the right side of the events.
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/timeline/RightAlignedTimeline.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/timeline/RightAlignedTimeline.js')}
        />
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Alternating timeline
      </Typography>
      <Typography className="mb-16" component="div">
        The timeline can display the events on alternating sides.
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/timeline/AlternateTimeline.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/timeline/AlternateTimeline.js')}
        />
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Color
      </Typography>
      <Typography className="mb-16" component="div">
        The <code>TimelineDot</code> can appear in different colors.
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/timeline/ColorsTimeline.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/timeline/ColorsTimeline.js')}
        />
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Outlined
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/timeline/OutlinedTimeline.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/timeline/OutlinedTimeline.js')}
        />
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Opposite content
      </Typography>
      <Typography className="mb-16" component="div">
        The timeline can display content on opposite sides.
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/timeline/OppositeContentTimeline.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/timeline/OppositeContentTimeline.js')}
        />
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Customized timeline
      </Typography>
      <Typography className="mb-16" component="div">
        Here is an example of customizing the component. You can learn more about this in the
        <a href="/customization/components/">overrides documentation page</a>.
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/timeline/CustomizedTimeline.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/timeline/CustomizedTimeline.js')}
        />
      </Typography>
    </>
  );
}

export default TimelineDoc;
