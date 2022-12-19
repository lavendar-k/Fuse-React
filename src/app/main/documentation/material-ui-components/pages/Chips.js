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
function ChipsDoc(props) {
  const classes = useStyles();
  return (
    <>
      <div className="flex flex-1 flex-grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="outlined"
          component="a"
          href="https://material-ui.com/components/chips"
          target="_blank"
          role="button"
        >
          <Icon>link</Icon>
          <span className="mx-4">Reference</span>
        </Button>
      </div>
      <Typography className="text-44 mt-32 mb-8" component="h1">
        Chip
      </Typography>
      <Typography className="description">
        Chips are compact elements that represent an input, attribute, or action.
      </Typography>

      <Typography className="mb-16" component="div">
        <a href="https://material.io/design/components/chips.html">Chips</a> allow users to enter
        information, make selections, filter content, or trigger actions.
      </Typography>
      <Typography className="mb-16" component="div">
        While included here as a standalone component, the most common use will be in some form of
        input, so some of the behaviour demonstrated here is not shown in context.
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Chip
      </Typography>
      <Typography className="mb-16" component="div">
        Examples of Chips, using an image Avatar, SVG Icon Avatar, &quot;Letter&quot; and (string)
        Avatar.
      </Typography>
      <ul>
        <li>
          Chips with the <code>onClick</code> property defined change appearance on focus, hover,
          and click.
        </li>
        <li>
          Chips with the <code>onDelete</code> property defined will display a delete icon which
          changes appearance on hover.
        </li>
      </ul>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/chips/Chips.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/chips/Chips.js')}
        />
      </Typography>
      <Typography className="text-24 mt-32 mb-8" component="h3">
        Outlined Chips
      </Typography>
      <Typography className="mb-16" component="div">
        Outlined chips offer an alternative style.
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/chips/OutlinedChips.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/chips/OutlinedChips.js')}
        />
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Chip array
      </Typography>
      <Typography className="mb-16" component="div">
        An example of rendering multiple Chips from an array of values. Deleting a chip removes it
        from the array. Note that since no
        <code>onClick</code> property is defined, the Chip can be focused, but does not gain depth
        while clicked or touched.
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/chips/ChipsArray.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/chips/ChipsArray.js')}
        />
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Small Chip
      </Typography>
      <Typography className="mb-16" component="div">
        You can use the <code>size</code> prop to define a small Chip.
      </Typography>
      <Typography className="text-24 mt-32 mb-8" component="h3">
        Default variant
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/chips/SmallChips.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/chips/SmallChips.js')}
        />
      </Typography>
      <Typography className="text-24 mt-32 mb-8" component="h3">
        Outlined variant
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/chips/SmallOutlinedChips.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/chips/SmallOutlinedChips.js')}
        />
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Chip Playground
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/chips/ChipsPlayground.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/chips/ChipsPlayground.js')}
        />
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Accessibility
      </Typography>
      <Typography className="mb-16" component="div">
        If the Chip is deletable or clickable then it is a button in tab order. When the Chip is
        focused (e.g. when tabbing) releasing (<code>keyup</code> event) <code>Backspace</code> or{' '}
        <code>Delete</code> will call the <code>onDelete</code> handler while releasing{' '}
        <code>Escape</code> will blur the Chip.
      </Typography>
    </>
  );
}

export default ChipsDoc;
