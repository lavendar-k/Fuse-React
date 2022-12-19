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
function GridDoc(props) {
  const classes = useStyles();
  return (
    <>
      <div className="flex flex-1 flex-grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="outlined"
          component="a"
          href="https://material-ui.com/components/grid"
          target="_blank"
          role="button"
        >
          <Icon>link</Icon>
          <span className="mx-4">Reference</span>
        </Button>
      </div>
      <Typography className="text-44 mt-32 mb-8" component="h1">
        Grid
      </Typography>
      <Typography className="description">
        The Material Design responsive layout grid adapts to screen size and orientation, ensuring
        consistency across layouts.
      </Typography>

      <Typography className="mb-16" component="div">
        The <a href="https://material.io/design/layout/responsive-layout-grid.html">grid</a> creates
        visual consistency between layouts while allowing flexibility across a wide variety of
        designs. Material Design’s responsive UI is based on a 12-column grid layout.
      </Typography>
      <blockquote>
        <Typography className="mb-16" component="div">
          ⚠️ The <code>Grid</code> component shouldn&#39;t be confused with a data grid; it is
          closer to a layout grid. For a data grid head to{' '}
          <a href="/components/data-grid/">
            the <code>DataGrid</code> component
          </a>
          .
        </Typography>
      </blockquote>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        How it works
      </Typography>
      <Typography className="mb-16" component="div">
        The grid system is implemented with the <code>Grid</code> component:
      </Typography>
      <ul>
        <li>
          It uses <a href="https://www.w3.org/TR/css-flexbox-1/">CSS’s Flexible Box module</a> for
          high flexibility.
        </li>
        <li>
          There are two types of layout: <em>containers</em> and <em>items</em>.
        </li>
        <li>
          Item widths are set in percentages, so they’re always fluid and sized relative to their
          parent element.
        </li>
        <li>Items have padding to create the spacing between individual items.</li>
        <li>There are five grid breakpoints: xs, sm, md, lg, and xl.</li>
      </ul>
      <Typography className="mb-16" component="div">
        If you are <strong>new to or unfamiliar with flexbox</strong>, we encourage you to read this{' '}
        <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/">CSS-Tricks flexbox</a>{' '}
        guide.
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Spacing
      </Typography>
      <Typography className="mb-16" component="div">
        The responsive grid focuses on consistent spacing widths, rather than column width. Material
        Design margins and columns follow an <strong>8px</strong> square baseline grid. The spacing
        property is an integer between 0 and 10 inclusive. By default, the spacing between two grid
        items follows a linear function: <code>output(spacing) = spacing * 8px</code>, e.g.{' '}
        <code>{`spacing={2}`}</code> creates a 16px wide gap.
      </Typography>
      <Typography className="mb-16" component="div">
        This output transformation function can be customized{' '}
        <a href="/customization/spacing/">using the theme</a>.
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/grid/SpacingGrid.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/grid/SpacingGrid.js')}
        />
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Fluid grids
      </Typography>
      <Typography className="mb-16" component="div">
        Fluid grids use columns that scale and resize content. A fluid grid’s layout can use
        breakpoints to determine if the layout needs to change dramatically.
      </Typography>
      <Typography className="text-24 mt-32 mb-8" component="h3">
        Basic grid
      </Typography>
      <Typography className="mb-16" component="div">
        The column widths apply at all breakpoints (i.e. <code>xs</code> and up).
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/grid/CenteredGrid.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/grid/CenteredGrid.js')}
        />
      </Typography>
      <Typography className="text-24 mt-32 mb-8" component="h3">
        Grid with breakpoints
      </Typography>
      <Typography className="mb-16" component="div">
        Some columns have multiple widths defined, causing the layout to change at the defined
        breakpoint.
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/grid/FullWidthGrid.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/grid/FullWidthGrid.js')}
        />
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Interactive
      </Typography>
      <Typography className="mb-16" component="div">
        Below is an interactive demo that lets you explore the visual results of the different
        settings:
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/grid/InteractiveGrid.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/grid/InteractiveGrid.js')}
        />
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Auto-layout
      </Typography>
      <Typography className="mb-16" component="div">
        The Auto-layout makes the <em>items</em> equitably share the available space. That also
        means you can set the width of one <em>item</em> and the others will automatically resize
        around it.
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/grid/AutoGrid.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/grid/AutoGrid.js')}
        />
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Complex Grid
      </Typography>
      <Typography className="mb-16" component="div">
        The following demo doesn&#39;t follow the Material Design specification, but illustrates how
        the grid can be used to build complex layouts.
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/grid/ComplexGrid.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/grid/ComplexGrid.js')}
        />
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Nested Grid
      </Typography>
      <Typography className="mb-16" component="div">
        The <code>container</code> and <code>item</code> properties are two independent booleans.
        They can be combined.
      </Typography>
      <blockquote>
        <Typography className="mb-16" component="div">
          A flex <strong>container</strong> is the box generated by an element with a computed
          display of <code>flex</code> or <code>inline-flex</code>. In-flow children of a flex
          container are called flex <strong>items</strong> and are laid out using the flex layout
          model.
        </Typography>
      </blockquote>
      <Typography className="mb-16" component="div">
        <a href="https://www.w3.org/TR/css-flexbox-1/#box-model">
          https://www.w3.org/TR/css-flexbox-1/#box-model
        </a>
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/grid/NestedGrid.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/grid/NestedGrid.js')}
        />
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Limitations
      </Typography>
      <Typography className="text-24 mt-32 mb-8" component="h3">
        Negative margin
      </Typography>
      <Typography className="mb-16" component="div">
        There is one limitation with the negative margin we use to implement the spacing between
        items. A horizontal scroll will appear if a negative margin goes beyond the{' '}
        <code>{`<body>`}</code>. There are 3 available workarounds:
      </Typography>
      <ol>
        <li>
          Not using the spacing feature and implementing it in user space{' '}
          <code>{`spacing={0}`}</code> (default).
        </li>
        <li>
          Applying padding to the parent with at least half the spacing value applied to the child:
          <FuseHighlight component="pre" className="language-jsx">
            {` 
<body>
 <div style={{ padding: 20 }}>
   <Grid container spacing={5}>
     //...
   </Grid>
 </div>
</body>
`}
          </FuseHighlight>
        </li>
        <li>
          Adding <code>overflow-x: hidden;</code> to the parent.
        </li>
      </ol>
      <Typography className="text-24 mt-32 mb-8" component="h3">
        white-space: nowrap;
      </Typography>
      <Typography className="mb-16" component="div">
        The initial setting on flex items is <code>min-width: auto</code>. It&#39;s causing a
        positioning conflict when the children is using <code>white-space: nowrap;</code>. You can
        experience the issue with:
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
<Grid item xs>
  <Typography noWrap>
`}
      </FuseHighlight>
      <Typography className="mb-16" component="div">
        In order for the item to stay within the container you need to set <code>min-width: 0</code>
        . In practice, you can set the <code>zeroMinWidth</code> property:
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
<Grid item xs zeroMinWidth>
  <Typography noWrap>
`}
      </FuseHighlight>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/grid/AutoGridNoWrap.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/grid/AutoGridNoWrap.js')}
        />
      </Typography>
      <Typography className="text-24 mt-32 mb-8" component="h3">
        direction: column | column-reverse
      </Typography>
      <Typography className="mb-16" component="div">
        Though the <code>Grid</code> component has a <code>direction</code> property that allows
        values of <code>row</code>, <code>row-reverse</code>, <code>column</code>, and{' '}
        <code>column-reverse</code>, there are some features that are not supported within{' '}
        <code>column</code> and <code>column-reverse</code> containers. The properties which define
        the number of grids the component will use for a given breakpoint (<code>xs</code>,{' '}
        <code>sm</code>, <code>md</code>, <code>lg</code>, and <code>xl</code>) are focused on
        controlling width and do <strong>not</strong> have similar effects on height within{' '}
        <code>column</code> and <code>column-reverse</code> containers. If used within{' '}
        <code>column</code> or <code>column-reverse</code> containers, these properties may have
        undesirable effects on the width of the <code>Grid</code> elements.
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        CSS Grid Layout
      </Typography>
      <Typography className="mb-16" component="div">
        Material-UI doesn&#39;t provide any CSS Grid functionality itself, but as seen below you can
        easily use CSS Grid to layout your pages.
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/grid/CSSGrid.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/grid/CSSGrid.js')}
        />
      </Typography>
    </>
  );
}

export default GridDoc;
