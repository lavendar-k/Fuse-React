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
function TransitionsDoc(props) {
  const classes = useStyles();
  return (
    <>
      <div className="flex flex-1 flex-grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="outlined"
          component="a"
          href="https://material-ui.com/components/transitions"
          target="_blank"
          role="button"
        >
          <Icon>link</Icon>
          <span className="mx-4">Reference</span>
        </Button>
      </div>
      <Typography className="text-44 mt-32 mb-8" component="h1">
        Transitions
      </Typography>
      <Typography className="description">
        Transition helps make a UI expressive and easy to use.
      </Typography>

      <Typography className="mb-16" component="div">
        Material-UI provides a number of transitions that can be used to introduce some basic
        <a href="https://material.io/design/motion/">motion</a>
        to your applications components.
      </Typography>
      <Typography className="mb-16" component="div">
        To better support server rendering Material-UI provides a <code>style</code> property to the
        children of some transition components (Fade, Grow, Zoom, Slide). The <code>style</code>{' '}
        property must be applied to the DOM for the animation to work as expected.
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
// The \`props\` object contains a \`style\` property.
// You need to provide it to the \`div\` element as shown here.
function MyComponent(props) {
  return (
    <div {...props}>
      Fade
    </div>
  );
}

export default Main() {
  return (
    <Fade>
      <MyComponent />
    </Fade>
  );
}
`}
      </FuseHighlight>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Collapse
      </Typography>
      <Typography className="mb-16" component="div">
        Expand vertically from the top of the child element. The <code>collapsedSize</code> property
        can be used to set the minimum height when not expanded.
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/transitions/SimpleCollapse.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/transitions/SimpleCollapse.js')}
        />
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Fade
      </Typography>
      <Typography className="mb-16" component="div">
        Fade in from transparent to opaque.
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/transitions/SimpleFade.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/transitions/SimpleFade.js')}
        />
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Grow
      </Typography>
      <Typography className="mb-16" component="div">
        Expand outwards from the center of the child element, while also fading in from transparent
        to opaque.
      </Typography>
      <Typography className="mb-16" component="div">
        The second example demonstrates how to change the <code>transform-origin</code>, and
        conditionally applies the <code>timeout</code> property to change the entry speed.
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/transitions/SimpleGrow.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/transitions/SimpleGrow.js')}
        />
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Slide
      </Typography>
      <Typography className="mb-16" component="div">
        Slide in from the edge of the screen. The <code>direction</code> property controls which
        edge of the screen the transition starts from.
      </Typography>
      <Typography className="mb-16" component="div">
        The Transition component&#39;s <code>mountOnEnter</code> property prevents the child
        component from being mounted until <code>in</code> is <code>true</code>. This prevents the
        relatively positioned component from scrolling into view from it&#39;s off-screen position.
        Similarly the <code>unmountOnExit</code> property removes the component from the DOM after
        it has been transition off screen.
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/transitions/SimpleSlide.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/transitions/SimpleSlide.js')}
        />
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Zoom
      </Typography>
      <Typography className="mb-16" component="div">
        Expand outwards from the center of the child element.
      </Typography>
      <Typography className="mb-16" component="div">
        This example also demonstrates how to delay the enter transition.
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/transitions/SimpleZoom.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/transitions/SimpleZoom.js')}
        />
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        TransitionComponent prop
      </Typography>
      <Typography className="mb-16" component="div">
        The components accept a <code>TransitionComponent</code> prop to customize the default
        transitions. You can use any of the above components or your own. It should respect the
        following conditions:
      </Typography>
      <ul>
        <li>
          Accepts an <code>in</code> prop. This corresponds to the open/close state.
        </li>
        <li>
          Call the <code>onEnter</code> callback prop when the enter transition starts.
        </li>
        <li>
          Call the <code>onExited</code> callback prop when the exit transition is completed. These
          two callbacks allow to unmount the children when in a closed state and fully transitioned.
        </li>
      </ul>
      <Typography className="mb-16" component="div">
        For more information on creating a custom transition, visit the{' '}
        <a href="http://reactcommunity.org/react-transition-group/transition">
          React Transition Group Transition docs
        </a>
        .
      </Typography>
    </>
  );
}

export default TransitionsDoc;
