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
function FloatingActionButtonDoc(props) {
  const classes = useStyles();
  return (
    <>
      <div className="flex flex-1 flex-grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="outlined"
          component="a"
          href="https://material-ui.com/components/floating-action-button"
          target="_blank"
          role="button"
        >
          <Icon>link</Icon>
          <span className="mx-4">Reference</span>
        </Button>
      </div>
      <Typography className="text-44 mt-32 mb-8" component="h1">
        Floating action button
      </Typography>
      <Typography className="description">
        A floating action button (FAB) performs the primary, or most common, action on a screen.
      </Typography>

      <Typography className="text-32 mt-32 mb-8" component="h2">
        Floating Action Button
      </Typography>
      <Typography className="mb-16" component="div">
        A{' '}
        <a href="https://material.io/design/components/buttons-floating-action-button.html">
          floating action button
        </a>
        appears in front of all screen content, typically as a circular shape with an icon in its
        center. FABs come in two types: regular, and extended.
      </Typography>
      <Typography className="mb-16" component="div">
        Only use a FAB if it is the most suitable way to present a screen’s primary action.
      </Typography>
      <Typography className="mb-16" component="div">
        Only one floating action button is recommended per screen to represent the most common
        action.
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/floating-action-button/FloatingActionButtons.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/floating-action-button/FloatingActionButtons.js')}
        />
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Size
      </Typography>
      <Typography className="mb-16" component="div">
        Use the <code>size</code> prop for larger or smaller floating action buttons.
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/floating-action-button/FloatingActionButtonSize.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/floating-action-button/FloatingActionButtonSize.js')}
        />
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Animation
      </Typography>
      <Typography className="mb-16" component="div">
        The floating action button animates onto the screen as an expanding piece of material, by
        default.
      </Typography>
      <Typography className="mb-16" component="div">
        A floating action button that spans multiple lateral screens (such as tabbed screens) should
        briefly disappear, then reappear if its action changes.
      </Typography>
      <Typography className="mb-16" component="div">
        The Zoom transition can be used to achieve this. Note that since both the exiting and
        entering animations are triggered at the same time, we use <code>enterDelay</code> to allow
        the outgoing Floating Action Button&#39;s animation to finish before the new one enters.
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/floating-action-button/FloatingActionButtonZoom.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/floating-action-button/FloatingActionButtonZoom.js')}
        />
      </Typography>
    </>
  );
}

export default FloatingActionButtonDoc;
