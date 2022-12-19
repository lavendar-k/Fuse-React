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
function ButtonGroupDoc(props) {
  const classes = useStyles();
  return (
    <>
      <div className="flex flex-1 flex-grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="outlined"
          component="a"
          href="https://material-ui.com/components/button-group"
          target="_blank"
          role="button"
        >
          <Icon>link</Icon>
          <span className="mx-4">Reference</span>
        </Button>
      </div>
      <Typography className="text-44 mt-32 mb-8" component="h1">
        Button group
      </Typography>
      <Typography className="description">
        The ButtonGroup component can be used to group related buttons.
      </Typography>

      <Typography className="text-32 mt-32 mb-8" component="h2">
        Basic button group
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/button-group/BasicButtonGroup.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/button-group/BasicButtonGroup.js')}
        />
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Sizes and colors
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/button-group/GroupSizesColors.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/button-group/GroupSizesColors.js')}
        />
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Vertical group
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/button-group/GroupOrientation.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/button-group/GroupOrientation.js')}
        />
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Split button
      </Typography>
      <Typography className="mb-16" component="div">
        <code>ButtonGroup</code> can also be used to create a split button. The dropdown can change
        the button action (as in this example), or be used to immediately trigger a related action.
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/button-group/SplitButton.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/button-group/SplitButton.js')}
        />
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Disabled elevation
      </Typography>
      <Typography className="mb-16" component="div">
        You can remove the elevation with the <code>disableElevation</code> prop.
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/button-group/DisableElevation.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/button-group/DisableElevation.js')}
        />
      </Typography>
    </>
  );
}

export default ButtonGroupDoc;
