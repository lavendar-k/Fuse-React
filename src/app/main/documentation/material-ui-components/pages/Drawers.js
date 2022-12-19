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
function DrawersDoc(props) {
  const classes = useStyles();
  return (
    <>
      <div className="flex flex-1 flex-grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="outlined"
          component="a"
          href="https://material-ui.com/components/drawers"
          target="_blank"
          role="button"
        >
          <Icon>link</Icon>
          <span className="mx-4">Reference</span>
        </Button>
      </div>
      <Typography className="text-44 mt-32 mb-8" component="h1">
        Drawer
      </Typography>
      <Typography className="description">
        Navigation drawers provide access to destinations in your app. Side sheets are surfaces
        containing supplementary content that are anchored to the left or right edge of the screen.
      </Typography>

      <Typography className="mb-16" component="div">
        <a href="https://material.io/design/components/navigation-drawer.html">
          Navigation drawers
        </a>{' '}
        (or &quot;sidebars&quot;) provide access to destinations and app functionality, such as
        switching accounts. They can either be permanently on-screen or controlled by a navigation
        menu icon.
      </Typography>
      <Typography className="mb-16" component="div">
        <a href="https://material.io/design/components/sheets-side.html">Side sheets</a> are
        supplementary surfaces primarily used on tablet and desktop.
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Temporary drawer
      </Typography>
      <Typography className="mb-16" component="div">
        Temporary navigation drawers can toggle open or closed. Closed by default, the drawer opens
        temporarily above all other content until a section is selected.
      </Typography>
      <Typography className="mb-16" component="div">
        The Drawer can be cancelled by clicking the overlay or pressing the Esc key. It closes when
        an item is selected, handled by controlling the <code>open</code> prop.
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/drawers/TemporaryDrawer.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/drawers/TemporaryDrawer.js')}
        />
      </Typography>
      <Typography className="text-24 mt-32 mb-8" component="h3">
        Swipeable
      </Typography>
      <Typography className="mb-16" component="div">
        You can make the drawer swipeable with the <code>SwipeableDrawer</code> component.
      </Typography>
      <Typography className="mb-16" component="div">
        This component comes with a 2 kB gzipped payload overhead. Some low-end mobile devices
        won&#39;t be able to follow the fingers at 60 FPS. You can use the{' '}
        <code>disableBackdropTransition</code> property to help.
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/drawers/SwipeableTemporaryDrawer.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/drawers/SwipeableTemporaryDrawer.js')}
        />
      </Typography>
      <Typography className="mb-16" component="div">
        The following properties are used in this documentation website for optimal usability of the
        component:
      </Typography>
      <ul>
        <li>
          iOS is hosted on high-end devices. The backdrop transition can be enabled without dropping
          frames. The performance will be good enough.
        </li>
        <li>
          iOS has a &quot;swipe to go back&quot; feature that interferes with the discovery feature,
          so discovery has to be disabled.
        </li>
      </ul>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

<SwipeableDrawer disableBackdropTransition={!iOS} disableDiscovery={iOS} />
`}
      </FuseHighlight>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Responsive drawer
      </Typography>
      <Typography className="mb-16" component="div">
        The <code>Hidden</code> responsive helper component allows showing different types of drawer
        depending on the screen width. A <code>temporary</code> drawer is shown for small screens
        while a <code>permanent</code> drawer is shown for wider screens.
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe
          component={
            require('app/main/documentation/material-ui-components/components/drawers/ResponsiveDrawer.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/drawers/ResponsiveDrawer.js')}
        />
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Persistent drawer
      </Typography>
      <Typography className="mb-16" component="div">
        Persistent navigation drawers can toggle open or closed. The drawer sits on the same surface
        elevation as the content. It is closed by default and opens by selecting the menu icon, and
        stays open until closed by the user. The state of the drawer is remembered from action to
        action and session to session.
      </Typography>
      <Typography className="mb-16" component="div">
        When the drawer is outside of the page grid and opens, the drawer forces other content to
        change size and adapt to the smaller viewport.
      </Typography>
      <Typography className="mb-16" component="div">
        Persistent navigation drawers are acceptable for all sizes larger than mobile. They are not
        recommended for apps with multiple levels of hierarchy that require using an up arrow for
        navigation.
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe
          component={
            require('app/main/documentation/material-ui-components/components/drawers/PersistentDrawerLeft.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/drawers/PersistentDrawerLeft.js')}
        />
        <FuseExample
          className="my-24"
          iframe
          component={
            require('app/main/documentation/material-ui-components/components/drawers/PersistentDrawerRight.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/drawers/PersistentDrawerRight.js')}
        />
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Mini variant drawer
      </Typography>
      <Typography className="mb-16" component="div">
        In this variation, the persistent navigation drawer changes its width. Its resting state is
        as a mini-drawer at the same elevation as the content, clipped by the app bar. When
        expanded, it appears as the standard persistent navigation drawer.
      </Typography>
      <Typography className="mb-16" component="div">
        The mini variant is recommended for apps sections that need quick selection access alongside
        content.
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe
          component={
            require('app/main/documentation/material-ui-components/components/drawers/MiniDrawer.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/drawers/MiniDrawer.js')}
        />
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Permanent drawer
      </Typography>
      <Typography className="mb-16" component="div">
        Permanent navigation drawers are always visible and pinned to the left edge, at the same
        elevation as the content or background. They cannot be closed.
      </Typography>
      <Typography className="mb-16" component="div">
        Permanent navigation drawers are the <strong>recommended default for desktop</strong>.
      </Typography>
      <Typography className="text-24 mt-32 mb-8" component="h3">
        Full-height navigation
      </Typography>
      <Typography className="mb-16" component="div">
        Apps focused on information consumption that use a left-to-right hierarchy.
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe
          component={
            require('app/main/documentation/material-ui-components/components/drawers/PermanentDrawerLeft.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/drawers/PermanentDrawerLeft.js')}
        />
        <FuseExample
          className="my-24"
          iframe
          component={
            require('app/main/documentation/material-ui-components/components/drawers/PermanentDrawerRight.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/drawers/PermanentDrawerRight.js')}
        />
      </Typography>
      <Typography className="text-24 mt-32 mb-8" component="h3">
        Clipped under the app bar
      </Typography>
      <Typography className="mb-16" component="div">
        Apps focused on productivity that require balance across the screen.
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe
          component={
            require('app/main/documentation/material-ui-components/components/drawers/ClippedDrawer.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/drawers/ClippedDrawer.js')}
        />
      </Typography>
    </>
  );
}

export default DrawersDoc;
