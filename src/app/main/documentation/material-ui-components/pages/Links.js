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
function LinksDoc(props) {
  const classes = useStyles();
  return (
    <>
      <div className="flex flex-1 flex-grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="outlined"
          component="a"
          href="https://material-ui.com/components/links"
          target="_blank"
          role="button"
        >
          <Icon>link</Icon>
          <span className="mx-4">Reference</span>
        </Button>
      </div>
      <Typography className="text-44 mt-32 mb-8" component="h1">
        Links
      </Typography>
      <Typography className="description">
        The Link component allows you to easily customize anchor elements with your theme colors and
        typography styles.
      </Typography>

      <Typography className="text-32 mt-32 mb-8" component="h2">
        Simple links
      </Typography>
      <Typography className="mb-16" component="div">
        The Link component is built on top of the <a href="/api/typography/">Typography</a>{' '}
        component. You can leverage its properties.
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/links/Links.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/links/Links.js')}
        />
      </Typography>
      <Typography className="mb-16" component="div">
        However, the Link component has different default properties than the Typography component:
      </Typography>
      <ul>
        <li>
          <code>color="primary"</code> as the link needs to stand out.
        </li>
        <li>
          <code>variant="inherit"</code> as the link will, most of the time, be used as a child of a
          Typography component.
        </li>
      </ul>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Security
      </Typography>
      <Typography className="mb-16" component="div">
        When you use <code>target="_blank"</code> with Links, it is{' '}
        <a href="https://developers.google.com/web/tools/lighthouse/audits/noopener">recommended</a>{' '}
        to always set <code>rel="noopener"</code> or <code>rel="noreferrer"</code> when linking to
        third party content.
      </Typography>
      <ul>
        <li>
          <code>rel="noopener"</code> prevents the new page from being able to access the{' '}
          <code>window.opener</code> property and ensures it runs in a separate process. Without
          this, the target page can potentially redirect your page to a malicious URL.
        </li>
        <li>
          <code>rel="noreferrer"</code> has the same effect, but also prevents the <em>Referer</em>{' '}
          header from being sent to the new page. ⚠️ Removing the referrer header will affect
          analytics.
        </li>
      </ul>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Third-party routing library
      </Typography>
      <Typography className="mb-16" component="div">
        One common use case is to perform navigation on the client only, without an HTTP round-trip
        to the server. The <code>Link</code> component provides a property to handle this use case:{' '}
        <code>component</code>.
      </Typography>
      <Typography className="mb-16" component="div">
        Here is an <a href="/guides/composition/#link">integration example with react-router</a>.
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Accessibility
      </Typography>
      <Typography className="mb-16" component="div">
        (WAI-ARIA:{' '}
        <a href="https://www.w3.org/TR/wai-aria-practices/#link">
          https://www.w3.org/TR/wai-aria-practices/#link
        </a>
        )
      </Typography>
      <ul>
        <li>
          When providing the content for the link, avoid generic descriptions like &quot;click
          here&quot; or &quot;go to&quot;. Instead, use{' '}
          <a href="https://developers.google.com/web/tools/lighthouse/audits/descriptive-link-text">
            specific descriptions
          </a>
          .
        </li>
        <li>For the best user experience, links should stand out from the text on the page.</li>
        <li>
          If a link doesn&#39;t have a meaningful href,{' '}
          <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md">
            it should be rendered using a <code>{`<button>`}</code> element
          </a>
          .
        </li>
      </ul>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/links/ButtonLink.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/links/ButtonLink.js')}
        />
      </Typography>
    </>
  );
}

export default LinksDoc;
