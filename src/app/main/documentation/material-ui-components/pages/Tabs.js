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
function TabsDoc(props) {
  const classes = useStyles();
  return (
    <>
      <div className="flex flex-1 flex-grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="outlined"
          component="a"
          href="https://material-ui.com/components/tabs"
          target="_blank"
          role="button"
        >
          <Icon>link</Icon>
          <span className="mx-4">Reference</span>
        </Button>
      </div>
      <Typography className="text-44 mt-32 mb-8" component="h1">
        Tabs
      </Typography>
      <Typography className="description">
        Tabs make it easy to explore and switch between different views.
      </Typography>

      <Typography className="mb-16" component="div">
        <a href="https://material.io/design/components/tabs.html">Tabs</a> organize and allow
        navigation between groups of content that are related and at the same level of hierarchy.
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Simple Tabs
      </Typography>
      <Typography className="mb-16" component="div">
        A simple example with no frills.
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/tabs/SimpleTabs.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/tabs/SimpleTabs.js')}
        />
      </Typography>
      <Typography className="text-24 mt-32 mb-8" component="h3">
        Wrapped Labels
      </Typography>
      <Typography className="mb-16" component="div">
        Long labels will automatically wrap on tabs. If the label is too long for the tab, it will
        overflow and the text will not be visible.
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/tabs/TabsWrappedLabel.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/tabs/TabsWrappedLabel.js')}
        />
      </Typography>
      <Typography className="text-24 mt-32 mb-8" component="h3">
        Disabled Tab
      </Typography>
      <Typography className="mb-16" component="div">
        A Tab can be disabled by setting <code>disabled</code> property.
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/tabs/DisabledTabs.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/tabs/DisabledTabs.js')}
        />
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Fixed Tabs
      </Typography>
      <Typography className="mb-16" component="div">
        Fixed tabs should be used with a limited number of tabs and when consistent placement will
        aid muscle memory.
      </Typography>
      <Typography className="text-24 mt-32 mb-8" component="h3">
        Full width
      </Typography>
      <Typography className="mb-16" component="div">
        The <code>variant="fullWidth"</code> property should be used for smaller views. This demo
        also uses{' '}
        <a href="https://github.com/oliviertassinari/react-swipeable-views">
          react-swipeable-views
        </a>{' '}
        to animate the Tab transition, and allowing tabs to be swiped on touch devices.
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/tabs/FullWidthTabs.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/tabs/FullWidthTabs.js')}
        />
      </Typography>
      <Typography className="text-24 mt-32 mb-8" component="h3">
        Centered
      </Typography>
      <Typography className="mb-16" component="div">
        The <code>centered</code> property should be used for larger views.
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/tabs/CenteredTabs.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/tabs/CenteredTabs.js')}
        />
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Scrollable Tabs
      </Typography>
      <Typography className="text-24 mt-32 mb-8" component="h3">
        Automatic Scroll Buttons
      </Typography>
      <Typography className="mb-16" component="div">
        Left and right scroll buttons will automatically be presented on desktop and hidden on
        mobile. (based on viewport width)
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/tabs/ScrollableTabsButtonAuto.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/tabs/ScrollableTabsButtonAuto.js')}
        />
      </Typography>
      <Typography className="text-24 mt-32 mb-8" component="h3">
        Forced Scroll Buttons
      </Typography>
      <Typography className="mb-16" component="div">
        Left and right scroll buttons will be presented regardless of the viewport width.
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/tabs/ScrollableTabsButtonForce.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/tabs/ScrollableTabsButtonForce.js')}
        />
      </Typography>
      <Typography className="text-24 mt-32 mb-8" component="h3">
        Prevent Scroll Buttons
      </Typography>
      <Typography className="mb-16" component="div">
        Left and right scroll buttons will never be presented. All scrolling must be initiated
        through user agent scrolling mechanisms (e.g. left/right swipe, shift-mousewheel, etc.)
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/tabs/ScrollableTabsButtonPrevent.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/tabs/ScrollableTabsButtonPrevent.js')}
        />
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Customized tabs
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
            require('app/main/documentation/material-ui-components/components/tabs/CustomizedTabs.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/tabs/CustomizedTabs.js')}
        />
      </Typography>
      <Typography className="mb-16" component="div">
        🎨 If you are looking for inspiration, you can check{' '}
        <a href="https://mui-treasury.com/styles/tabs/">
          MUI Treasury&#39;s customization examples
        </a>
        .
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Vertical tabs
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/tabs/VerticalTabs.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/tabs/VerticalTabs.js')}
        />
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Nav Tabs
      </Typography>
      <Typography className="mb-16" component="div">
        By default tabs use a <code>button</code> element, but you can provide your own custom tag
        or component. Here&#39;s an example of implementing tabbed navigation:
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/tabs/NavTabs.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/tabs/NavTabs.js')}
        />
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Icon Tabs
      </Typography>
      <Typography className="mb-16" component="div">
        Tab labels may be either all icons or all text.
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/tabs/IconTabs.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/tabs/IconTabs.js')}
        />
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/tabs/IconLabelTabs.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/tabs/IconLabelTabs.js')}
        />
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Accessibility
      </Typography>
      <Typography className="mb-16" component="div">
        (WAI-ARIA:{' '}
        <a href="https://www.w3.org/TR/wai-aria-practices/#tabpanel">
          https://www.w3.org/TR/wai-aria-practices/#tabpanel
        </a>
        )
      </Typography>
      <Typography className="mb-16" component="div">
        The following steps are needed in order to provide necessary information for assistive
        technologies:
      </Typography>
      <ol>
        <li>
          Label <code>Tabs</code> via <code>aria-label</code> or <code>aria-labelledby</code>.
        </li>
        <li>
          <code>Tab</code>s need to be connected to their corresponding{' '}
          <code>[role="tabpanel"]</code> by setting the correct <code>id</code>,{' '}
          <code>aria-controls</code> and <code>aria-labelledby</code>.
        </li>
      </ol>
      <Typography className="mb-16" component="div">
        An example for the current implementation can be found in the demos on this page. We&#39;ve
        also published <a href="#experimental-api">an experimental API</a> in{' '}
        <code>@material-ui/lab</code> that does not require extra work.
      </Typography>
      <Typography className="text-24 mt-32 mb-8" component="h3">
        Keyboard navigation
      </Typography>
      <Typography className="mb-16" component="div">
        The components implement keyboard navigation using the &quot;manual activation&quot;
        behavior. If you want to switch to the &quot;selection automatically follows focus&quot;
        behavior you have pass <code>selectionFollowsFocus</code> to the <code>Tabs</code>{' '}
        component. The WAI-ARIA authoring practices have a detailed guide on{' '}
        <a href="https://www.w3.org/TR/wai-aria-practices/#kbd_selection_follows_focus">
          how to decide when to make selection automatically follow focus
        </a>
        .
      </Typography>
      <Typography className="text-16 mt-32 mb-8" component="h4">
        Demo
      </Typography>
      <Typography className="mb-16" component="div">
        The following two demos only differ in their keyboard navigation behavior. Focus a tab and
        navigate with arrow keys to notice the difference.
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
/* Tabs where selection follows focus */
<Tabs selectionFollowsFocus />
/* Tabs where each tab needs to be selected manually */
<Tabs />
`}
      </FuseHighlight>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/tabs/AccessibleTabs.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/tabs/AccessibleTabs.js')}
        />
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Experimental API
      </Typography>
      <Typography className="mb-16" component="div">
        <code>@material-ui/lab</code> offers utility components that inject props to implement
        accessible tabs following{' '}
        <a href="https://www.w3.org/TR/wai-aria-practices/#tabpanel">
          WAI-ARIA authoring practices
        </a>
        .
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/tabs/LabTabs.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/tabs/LabTabs.js')}
        />
      </Typography>
    </>
  );
}

export default TabsDoc;
