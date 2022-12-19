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
function TypographyDoc(props) {
  const classes = useStyles();
  return (
    <>
      <div className="flex flex-1 flex-grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="outlined"
          component="a"
          href="https://material-ui.com/components/typography"
          target="_blank"
          role="button"
        >
          <Icon>link</Icon>
          <span className="mx-4">Reference</span>
        </Button>
      </div>
      <Typography className="text-44 mt-32 mb-8" component="h1">
        Typography
      </Typography>
      <Typography className="description">
        Use typography to present your design and content as clearly and efficiently as possible.
      </Typography>

      <Typography className="mb-16" component="div">
        Too many type sizes and styles at once can spoil any layout. A{' '}
        <a href="https://material.io/design/typography/#type-scale">typographic scale</a> has a
        limited set of type sizes that work well together along with the layout grid.
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        General
      </Typography>
      <Typography className="mb-16" component="div">
        The <em>Roboto</em> font will <strong>not</strong> be automatically loaded by Material-UI.
        The developer is responsible for loading all fonts used in their application. Roboto Font
        has a few easy ways to get started. For more advanced configuration, check out
        <a href="/customization/typography/">the theme customization section</a>.
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Roboto Font CDN
      </Typography>
      <Typography className="mb-16" component="div">
        Shown below is a sample link markup used to load the Roboto font from a CDN:
      </Typography>

      <FuseHighlight component="pre" className="language-html">
        {` 
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
`}
      </FuseHighlight>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Install with npm
      </Typography>
      <Typography className="mb-16" component="div">
        You can <a href="https://www.npmjs.com/package/@fontsource/roboto">install it</a> by typing
        the below command in your terminal:
      </Typography>
      <Typography className="mb-16" component="div">
        <code>npm install @fontsource/roboto</code>
      </Typography>
      <Typography className="mb-16" component="div">
        Then, you can import it in your entry-point.
      </Typography>

      <FuseHighlight component="pre" className="language-js">
        {` 
import '@fontsource/roboto';
`}
      </FuseHighlight>
      <Typography className="mb-16" component="div">
        For more info check out{' '}
        <a href="https://github.com/DecliningLotus/fontsource/blob/master/packages/roboto/README.md">
          Fontsource
        </a>
        .
      </Typography>
      <Typography className="mb-16" component="div">
        ⚠️ Be careful when using this approach. Make sure your bundler doesn&#39;t eager load all
        the font variations (100/300/400/500/700/900, italic/regular, SVG/woff). Fontsource can be
        configured to load specific subsets, weights and styles. Inlining all the font files can
        significantly increase the size of your bundle. Material-UI default typography configuration
        only relies on 300, 400, 500, and 700 font weights.
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Component
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/typography/Types.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/typography/Types.js')}
        />
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Theme
      </Typography>
      <Typography className="mb-16" component="div">
        In some situations you might not be able to use the <code>Typography</code> component.
        Hopefully, you might be able to take advantage of the{' '}
        <a href="/customization/default-theme/?expand-path=$.typography">
          <code>typography</code>
        </a>{' '}
        keys of the theme.
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/typography/TypographyTheme.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/typography/TypographyTheme.js')}
        />
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Changing the semantic element
      </Typography>
      <Typography className="mb-16" component="div">
        The Typography component uses the <code>variantMapping</code> property to associate a UI
        variant with a semantic element. It’s important to realize that the style of a typography is
        independent from the semantic underlying element.
      </Typography>
      <ul>
        <li>
          You can change the underlying element for a one time occasion with the{' '}
          <code>component</code> property:
        </li>
      </ul>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
{/* There is already an h1 in the page, let's not duplicate it. */}
<Typography variant="h1" component="h2">
  h1. Heading
</Typography>
`}
      </FuseHighlight>
      <ul>
        <li>
          You can change the mapping{' '}
          <a href="/customization/globals/#default-props">globally using the theme</a>:
        </li>
      </ul>

      <FuseHighlight component="pre" className="language-js">
        {` 
const theme = createTheme({
  props: {
    MuiTypography: {
      variantMapping: {
        h1: 'h2',
        h2: 'h2',
        h3: 'h2',
        h4: 'h2',
        h5: 'h2',
        h6: 'h2',
        subtitle1: 'h2',
        subtitle2: 'h2',
        body1: 'span',
        body2: 'span',
      },
    },
  },
});
`}
      </FuseHighlight>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Accessibility
      </Typography>
      <Typography className="mb-16" component="div">
        A few key factors to follow for an accessible typography:
      </Typography>
      <ul>
        <li>
          <strong>Color</strong>. Provide enough contrast between text and its background, check out
          the minimum recommended{' '}
          <a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html">
            WCAG 2.0 color contrast ratio
          </a>{' '}
          (4.5:1).
        </li>
        <li>
          <strong>Font size</strong>. Use{' '}
          <a href="/customization/typography/#font-size">relative units (rem)</a> to accommodate the
          user&#39;s settings.
        </li>
        <li>
          <strong>Heading hierarchy</strong>.{' '}
          <a href="https://www.w3.org/WAI/tutorials/page-structure/headings/">Don&#39;t skip</a>{' '}
          heading levels. In order to solve this problem, you need to{' '}
          <a href="#changing-the-semantic-element">separate the semantics from the style</a>.
        </li>
      </ul>
    </>
  );
}

export default TypographyDoc;
