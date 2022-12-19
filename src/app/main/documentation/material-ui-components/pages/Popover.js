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
function PopoverDoc(props) {
  const classes = useStyles();
  return (
    <>
      <div className="flex flex-1 flex-grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="outlined"
          component="a"
          href="https://material-ui.com/components/popover"
          target="_blank"
          role="button"
        >
          <Icon>link</Icon>
          <span className="mx-4">Reference</span>
        </Button>
      </div>
      <Typography className="text-44 mt-32 mb-8" component="h1">
        Popover
      </Typography>
      <Typography className="description">
        A Popover can be used to display some content on top of another.
      </Typography>

      <Typography className="mb-16" component="div">
        Things to know when using the <code>Popover</code> component:
      </Typography>
      <ul>
        <li>
          The component is built on top of the{' '}
          <a href="/components/modal/">
            <code>Modal</code>
          </a>{' '}
          component.
        </li>
        <li>
          The scroll and click away are blocked unlike with the{' '}
          <a href="/components/popper/">
            <code>Popper</code>
          </a>{' '}
          component.
        </li>
      </ul>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Simple Popover
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/popover/SimplePopover.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/popover/SimplePopover.js')}
        />
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Anchor playground
      </Typography>
      <Typography className="mb-16" component="div">
        Use the radio buttons to adjust the <code>anchorOrigin</code> and{' '}
        <code>transformOrigin</code> positions. You can also set the <code>anchorReference</code> to{' '}
        <code>anchorPosition</code> or <code>anchorEl</code>. When it is <code>anchorPosition</code>
        , the component will, instead of <code>anchorEl</code>, refer to the{' '}
        <code>anchorPosition</code> prop which you can adjust to set the position of the popover.
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/popover/AnchorPlayground.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/popover/AnchorPlayground.js')}
        />
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Mouse over interaction
      </Typography>
      <Typography className="mb-16" component="div">
        This demonstrates how to use the <code>Popover</code> component to implement a popover
        behavior based on the mouse over event.
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/popover/MouseOverPopover.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/popover/MouseOverPopover.js')}
        />
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Complementary projects
      </Typography>
      <Typography className="mb-16" component="div">
        For more advanced use cases you might be able to take advantage of:
      </Typography>
      <Typography className="text-24 mt-32 mb-8" component="h3">
        PopupState helper
      </Typography>
      <Typography className="mb-16" component="div">
        There is a 3rd party package{' '}
        <a href="https://github.com/jcoreio/material-ui-popup-state">
          <code>material-ui-popup-state</code>
        </a>{' '}
        that takes care of popover state for you in most cases.
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/popover/PopoverPopupState.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/popover/PopoverPopupState.js')}
        />
      </Typography>
    </>
  );
}

export default PopoverDoc;
