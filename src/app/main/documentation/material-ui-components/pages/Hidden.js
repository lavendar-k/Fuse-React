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
function HiddenDoc(props) {
  const classes = useStyles();
  return (
    <>
      <div className="flex flex-1 flex-grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="outlined"
          component="a"
          href="https://material-ui.com/components/hidden"
          target="_blank"
          role="button"
        >
          <Icon>link</Icon>
          <span className="mx-4">Reference</span>
        </Button>
      </div>
      <Typography className="text-44 mt-32 mb-8" component="h1">
        Hidden
      </Typography>
      <Typography className="description">
        Quickly and responsively toggle the visibility value of components and more with the hidden
        utilities.
      </Typography>

      <Typography className="mb-16" component="div">
        All elements are visible unless <strong>they are explicitly hidden</strong>. To ease
        integration with Material-UI&#39;s{' '}
        <a href="/customization/breakpoints/">responsive breakpoints</a>, this component can be used
        to hide any content, or you can use it in conjunction with the{' '}
        <a href="/components/grid/">
          <code>Grid</code>
        </a>{' '}
        component.
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        How it works
      </Typography>
      <Typography className="mb-16" component="div">
        Hidden works with a range of breakpoints e.g. <code>xsUp</code> or <code>mdDown</code>, or
        one or more breakpoints e.g. <code>only='sm'</code> or <code>{`only={['md', 'xl']}`}</code>.
        Ranges and individual breakpoints can be used simultaneously to achieve very customized
        behavior. The ranges are inclusive of the specified breakpoints.
      </Typography>

      <FuseHighlight component="pre" className="language-js">
        {` 
innerWidth  |xs      sm       md       lg       xl
            |--------|--------|--------|--------|-------->
width       |   xs   |   sm   |   md   |   lg   |   xl

smUp        |   show | hide
mdDown      |                     hide | show

`}
      </FuseHighlight>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Implementations
      </Typography>
      <Typography className="text-24 mt-32 mb-8" component="h3">
        js
      </Typography>
      <Typography className="mb-16" component="div">
        By default, the <code>js</code> implementation is used, responsively hiding content based on
        using the{' '}
        <a href="/customization/breakpoints/#withwidth">
          <code>withWidth()</code>
        </a>{' '}
        higher-order component that watches screen size. This has the benefit of not rendering any
        content at all unless the breakpoint is met.
      </Typography>
      <Typography className="text-24 mt-32 mb-8" component="h3">
        css
      </Typography>
      <Typography className="mb-16" component="div">
        If you are using server-side rendering, you can set <code>implementation="css"</code> if you
        don&#39;t want the browser to re-flow your content on the screen.
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Breakpoint up
      </Typography>
      <Typography className="mb-16" component="div">
        Using any breakpoint <code>up</code> property, the given <em>children</em> will be hidden{' '}
        <em>at or above</em> the breakpoint.
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/hidden/BreakpointUp.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/hidden/BreakpointUp.js')}
        />
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Breakpoint down
      </Typography>
      <Typography className="mb-16" component="div">
        Using any breakpoint <code>down</code> property, the given <em>children</em> will be hidden{' '}
        <em>at or below</em> the breakpoint.
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/hidden/BreakpointDown.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/hidden/BreakpointDown.js')}
        />
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Breakpoint only
      </Typography>
      <Typography className="mb-16" component="div">
        Using the breakpoint <code>only</code> property, the given <em>children</em> will be hidden{' '}
        <em>at</em> the specified breakpoint(s).
      </Typography>
      <Typography className="mb-16" component="div">
        The <code>only</code> property can be used in two ways:
      </Typography>
      <ul>
        <li>list a single breakpoint</li>
        <li>list an array of breakpoints</li>
      </ul>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/hidden/BreakpointOnly.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/hidden/BreakpointOnly.js')}
        />
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Integration with Grid
      </Typography>
      <Typography className="mb-16" component="div">
        It is quite common to alter <code>Grid</code> at different responsive breakpoints, and in
        many cases, you want to hide some of those elements.
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/hidden/GridIntegration.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/hidden/GridIntegration.js')}
        />
      </Typography>
    </>
  );
}

export default HiddenDoc;
