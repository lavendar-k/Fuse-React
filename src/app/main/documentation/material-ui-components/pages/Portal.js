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
function PortalDoc(props) {
  const classes = useStyles();
  return (
    <>
      <div className="flex flex-1 flex-grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="outlined"
          component="a"
          href="https://material-ui.com/components/portal"
          target="_blank"
          role="button"
        >
          <Icon>link</Icon>
          <span className="mx-4">Reference</span>
        </Button>
      </div>
      <Typography className="text-44 mt-32 mb-8" component="h1">
        Portal
      </Typography>
      <Typography className="description">
        The portal component renders its children into a new "subtree" outside of current DOM
        hierarchy.
      </Typography>

      <ul>
        <li>
          📦 <a href="/size-snapshot">1.3 kB gzipped</a>
        </li>
      </ul>
      <Typography className="mb-16" component="div">
        The children of the portal component will be appended to the <code>container</code>{' '}
        specified. The component is used internally by the{' '}
        <a href="/components/modal/">
          <code>Modal</code>
        </a>{' '}
        and{' '}
        <a href="/components/popper/">
          <code>Popper</code>
        </a>{' '}
        components.
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Example
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/portal/SimplePortal.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/portal/SimplePortal.js')}
        />
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Server-side
      </Typography>
      <Typography className="mb-16" component="div">
        React <a href="https://github.com/facebook/react/issues/13097">doesn&#39;t support</a> the{' '}
        <a href="https://reactjs.org/docs/portals.html">
          <code>createPortal()</code>
        </a>{' '}
        API on the server. You have to wait for the client-side hydration to see the children.
      </Typography>
    </>
  );
}

export default PortalDoc;
