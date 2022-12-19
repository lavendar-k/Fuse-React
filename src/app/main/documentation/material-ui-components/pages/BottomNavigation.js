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
function BottomNavigationDoc(props) {
  const classes = useStyles();
  return (
    <>
      <div className="flex flex-1 flex-grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="outlined"
          component="a"
          href="https://material-ui.com/components/bottom-navigation"
          target="_blank"
          role="button"
        >
          <Icon>link</Icon>
          <span className="mx-4">Reference</span>
        </Button>
      </div>
      <Typography className="text-44 mt-32 mb-8" component="h1">
        Bottom Navigation
      </Typography>
      <Typography className="description">
        Bottom navigation bars allow movement between primary destinations in an app.
      </Typography>

      <Typography className="mb-16" component="div">
        <a href="https://material.io/design/components/bottom-navigation.html">Bottom navigation</a>{' '}
        bars display three to five destinations at the bottom of a screen. Each destination is
        represented by an icon and an optional text label. When a bottom navigation icon is tapped,
        the user is taken to the top-level navigation destination associated with that icon.
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Bottom Navigation
      </Typography>
      <Typography className="mb-16" component="div">
        When there are only <strong>three</strong> actions, display both icons and text labels at
        all times.
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/bottom-navigation/SimpleBottomNavigation.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/bottom-navigation/SimpleBottomNavigation.js')}
        />
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Bottom Navigation with no label
      </Typography>
      <Typography className="mb-16" component="div">
        If there are <strong>four</strong> or <strong>five</strong> actions, display inactive views
        as icons only.
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/bottom-navigation/LabelBottomNavigation.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/bottom-navigation/LabelBottomNavigation.js')}
        />
      </Typography>
    </>
  );
}

export default BottomNavigationDoc;
