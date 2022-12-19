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
function BreadcrumbsDoc(props) {
  const classes = useStyles();
  return (
    <>
      <div className="flex flex-1 flex-grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="outlined"
          component="a"
          href="https://material-ui.com/components/breadcrumbs"
          target="_blank"
          role="button"
        >
          <Icon>link</Icon>
          <span className="mx-4">Reference</span>
        </Button>
      </div>
      <Typography className="text-44 mt-32 mb-8" component="h1">
        Breadcrumbs
      </Typography>
      <Typography className="description">
        Breadcrumbs allow users to make selections from a range of values.
      </Typography>

      <Typography className="text-32 mt-32 mb-8" component="h2">
        Simple breadcrumbs
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/breadcrumbs/SimpleBreadcrumbs.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/breadcrumbs/SimpleBreadcrumbs.js')}
        />
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Active last breadcrumb
      </Typography>
      <Typography className="mb-16" component="div">
        Keep the last breadcrumb interactive.
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/breadcrumbs/ActiveLastBreadcrumb.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/breadcrumbs/ActiveLastBreadcrumb.js')}
        />
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Custom separator
      </Typography>
      <Typography className="mb-16" component="div">
        In the following examples, we are using two string separators, and an SVG icon.
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/breadcrumbs/CustomSeparator.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/breadcrumbs/CustomSeparator.js')}
        />
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Breadcrumbs with icons
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/breadcrumbs/IconBreadcrumbs.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/breadcrumbs/IconBreadcrumbs.js')}
        />
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Collapsed breadcrumbs
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/breadcrumbs/CollapsedBreadcrumbs.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/breadcrumbs/CollapsedBreadcrumbs.js')}
        />
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Customized breadcrumbs
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
            require('app/main/documentation/material-ui-components/components/breadcrumbs/CustomizedBreadcrumbs.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/breadcrumbs/CustomizedBreadcrumbs.js')}
        />
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Integration with react-router
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/breadcrumbs/RouterBreadcrumbs.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/breadcrumbs/RouterBreadcrumbs.js')}
        />
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Accessibility
      </Typography>
      <Typography className="mb-16" component="div">
        (WAI-ARIA:{' '}
        <a href="https://www.w3.org/TR/wai-aria-practices/#breadcrumb">
          https://www.w3.org/TR/wai-aria-practices/#breadcrumb
        </a>
        )
      </Typography>
      <Typography className="mb-16" component="div">
        Be sure to add a <code>aria-label</code> description on the <code>Breadcrumbs</code>{' '}
        component.
      </Typography>
      <Typography className="mb-16" component="div">
        The accessibility of this component relies on:
      </Typography>
      <ul>
        <li>
          The set of links is structured using an ordered list (<code>{`<ol>`}</code> element).
        </li>
        <li>
          To prevent screen reader announcement of the visual separators between links, they are
          hidden with <code>aria-hidden</code>.
        </li>
        <li>
          A nav element labeled with <code>aria-label</code> identifies the structure as a
          breadcrumb trail and makes it a navigation landmark so that it is easy to locate.
        </li>
      </ul>
    </>
  );
}

export default BreadcrumbsDoc;
