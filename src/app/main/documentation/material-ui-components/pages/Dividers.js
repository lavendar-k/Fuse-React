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
function DividersDoc(props) {
  const classes = useStyles();
  return (
    <>
      <div className="flex flex-1 flex-grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="outlined"
          component="a"
          href="https://material-ui.com/components/dividers"
          target="_blank"
          role="button"
        >
          <Icon>link</Icon>
          <span className="mx-4">Reference</span>
        </Button>
      </div>
      <Typography className="text-44 mt-32 mb-8" component="h1">
        Divider
      </Typography>
      <Typography className="description">
        A divider is a thin line that groups content in lists and layouts.
      </Typography>

      <Typography className="mb-16" component="div">
        <a href="https://material.io/design/components/dividers.html">Dividers</a> separate content
        into clear groups.
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        List Dividers
      </Typography>
      <Typography className="mb-16" component="div">
        The divider renders as an <code>{`<hr>`}</code> by default. You can save rendering this DOM
        element by using the <code>divider</code> property on the <code>ListItem</code> component.
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/dividers/ListDividers.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/dividers/ListDividers.js')}
        />
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        HTML5 Specification
      </Typography>
      <Typography className="mb-16" component="div">
        In a list, you should ensure the <code>Divider</code> is rendered as an{' '}
        <code>{`<li>`}</code> to match the HTML5 specification. The examples below show two ways of
        achieving this.
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Inset Dividers
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/dividers/InsetDividers.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/dividers/InsetDividers.js')}
        />
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Subheader Dividers
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/dividers/SubheaderDividers.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/dividers/SubheaderDividers.js')}
        />
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Middle Dividers
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/dividers/MiddleDividers.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/dividers/MiddleDividers.js')}
        />
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Vertical Dividers
      </Typography>
      <Typography className="mb-16" component="div">
        You can also render a divider vertically using the <code>orientation</code> prop. Note the
        use of the <code>flexItem</code> prop to accommodate for the flex container.
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/dividers/VerticalDividers.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/dividers/VerticalDividers.js')}
        />
      </Typography>
    </>
  );
}

export default DividersDoc;
