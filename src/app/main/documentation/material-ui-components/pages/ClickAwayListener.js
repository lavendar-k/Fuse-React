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
function ClickAwayListenerDoc(props) {
  const classes = useStyles();
  return (
    <>
      <div className="flex flex-1 flex-grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="outlined"
          component="a"
          href="https://material-ui.com/components/click-away-listener"
          target="_blank"
          role="button"
        >
          <Icon>link</Icon>
          <span className="mx-4">Reference</span>
        </Button>
      </div>
      <Typography className="text-44 mt-32 mb-8" component="h1">
        Click away listener
      </Typography>
      <Typography className="description">
        Detect if a click event happened outside of an element. It listens for clicks that occur
        somewhere in the document.
      </Typography>

      <ul>
        <li>
          📦 <a href="/size-snapshot">1.5 kB gzipped</a>.
        </li>
        <li>⚛️ Support portals</li>
      </ul>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Example
      </Typography>
      <Typography className="mb-16" component="div">
        For instance, if you need to hide a menu dropdown when people click anywhere else on your
        page:
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/click-away-listener/ClickAway.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/click-away-listener/ClickAway.js')}
        />
      </Typography>
      <Typography className="mb-16" component="div">
        Notice that the component only accepts one child element. You can find a more advanced demo
        on the <a href="/components/menus/#menulist-composition">Menu documentation section</a>.
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Portal
      </Typography>
      <Typography className="mb-16" component="div">
        The following demo uses{' '}
        <a href="/components/portal/">
          <code>Portal</code>
        </a>{' '}
        to render the dropdown into a new &quot;subtree&quot; outside of current DOM hierarchy.
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/click-away-listener/PortalClickAway.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/click-away-listener/PortalClickAway.js')}
        />
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Leading edge
      </Typography>
      <Typography className="mb-16" component="div">
        By default, the component responds to the trailing events (click + touch end). However, you
        can configure it to respond to the leading events (mouse down + touch start).
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/click-away-listener/LeadingClickAway.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/click-away-listener/LeadingClickAway.js')}
        />
      </Typography>
      <blockquote>
        <Typography className="mb-16" component="div">
          ⚠️ In this mode, only interactions on the scrollbar of the document is ignored.
        </Typography>
      </blockquote>
    </>
  );
}

export default ClickAwayListenerDoc;
