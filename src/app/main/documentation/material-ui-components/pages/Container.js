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
function ContainerDoc(props) {
  const classes = useStyles();
  return (
    <>
      <div className="flex flex-1 flex-grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="outlined"
          component="a"
          href="https://material-ui.com/components/container"
          target="_blank"
          role="button"
        >
          <Icon>link</Icon>
          <span className="mx-4">Reference</span>
        </Button>
      </div>
      <Typography className="text-44 mt-32 mb-8" component="h1">
        Container
      </Typography>
      <Typography className="description">
        The container centers your content horizontally. It's the most basic layout element.
      </Typography>

      <Typography className="mb-16" component="div">
        While containers can be nested, most layouts do not require a nested container.
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Fluid
      </Typography>
      <Typography className="mb-16" component="div">
        A fluid container width is bounded by the <code>maxWidth</code> property value.
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe
          component={
            require('app/main/documentation/material-ui-components/components/container/SimpleContainer.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/container/SimpleContainer.js')}
        />
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
<Container maxWidth="sm">
`}
      </FuseHighlight>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Fixed
      </Typography>
      <Typography className="mb-16" component="div">
        If you prefer to design for a fixed set of sizes instead of trying to accommodate a fully
        fluid viewport, you can set the <code>fixed</code> property. The max-width matches the
        min-width of the current breakpoint.
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe
          component={
            require('app/main/documentation/material-ui-components/components/container/FixedContainer.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/container/FixedContainer.js')}
        />
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
<Container fixed>
`}
      </FuseHighlight>
    </>
  );
}

export default ContainerDoc;
