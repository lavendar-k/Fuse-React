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
function CheckboxesDoc(props) {
  const classes = useStyles();
  return (
    <>
      <div className="flex flex-1 flex-grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="outlined"
          component="a"
          href="https://material-ui.com/components/checkboxes"
          target="_blank"
          role="button"
        >
          <Icon>link</Icon>
          <span className="mx-4">Reference</span>
        </Button>
      </div>
      <Typography className="text-44 mt-32 mb-8" component="h1">
        Checkbox
      </Typography>
      <Typography className="description">
        Checkboxes allow the user to select one or more items from a set.
      </Typography>

      <Typography className="mb-16" component="div">
        <a href="https://material.io/design/components/selection-controls.html#checkboxes">
          Checkboxes
        </a>{' '}
        can be used to turn an option on or off.
      </Typography>
      <Typography className="mb-16" component="div">
        If you have multiple options appearing in a list, you can preserve space by using checkboxes
        instead of on/off switches. If you have a single option, avoid using a checkbox and use an
        on/off switch instead.
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Basic checkboxes
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/checkboxes/Checkboxes.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/checkboxes/Checkboxes.js')}
        />
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Checkbox with FormControlLabel
      </Typography>
      <Typography className="mb-16" component="div">
        <code>Checkbox</code> can be provided with a label thanks to the{' '}
        <code>FormControlLabel</code> component.
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/checkboxes/CheckboxLabels.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/checkboxes/CheckboxLabels.js')}
        />
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Checkboxes with FormGroup
      </Typography>
      <Typography className="mb-16" component="div">
        <code>FormGroup</code> is a helpful wrapper used to group selection controls components that
        provides an easier API.
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/checkboxes/CheckboxesGroup.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/checkboxes/CheckboxesGroup.js')}
        />
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Label placement
      </Typography>
      <Typography className="mb-16" component="div">
        You can change the placement of the label:
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/checkboxes/FormControlLabelPosition.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/checkboxes/FormControlLabelPosition.js')}
        />
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Customized checkbox
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
            require('app/main/documentation/material-ui-components/components/checkboxes/CustomizedCheckbox.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/checkboxes/CustomizedCheckbox.js')}
        />
      </Typography>
      <Typography className="mb-16" component="div">
        🎨 If you are looking for inspiration, you can check{' '}
        <a href="https://mui-treasury.com/styles/checkbox">
          MUI Treasury&#39;s customization examples
        </a>
        .
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        When to use
      </Typography>
      <ul>
        <li>
          <a href="https://www.nngroup.com/articles/checkboxes-vs-radio-buttons/">
            Checkboxes vs. Radio Buttons
          </a>
        </li>
        <li>
          <a href="https://uxplanet.org/checkbox-vs-toggle-switch-7fc6e83f10b8">
            Checkboxes vs. Switches
          </a>
        </li>
      </ul>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Accessibility
      </Typography>
      <Typography className="mb-16" component="div">
        (WAI-ARIA:{' '}
        <a href="https://www.w3.org/TR/wai-aria-practices/#checkbox">
          https://www.w3.org/TR/wai-aria-practices/#checkbox
        </a>
        )
      </Typography>
      <ul>
        <li>
          All form controls should have labels, and this includes radio buttons, checkboxes, and
          switches. In most cases, this is done by using the <code>{`<label>`}</code> element (
          <a href="/api/form-control-label/">FormControlLabel</a>).
        </li>
        <li>
          When a label can&#39;t be used, it&#39;s necessary to add an attribute directly to the
          input component. In this case, you can apply the additional attribute (e.g.{' '}
          <code>aria-label</code>, <code>aria-labelledby</code>, <code>title</code>) via the{' '}
          <code>inputProps</code> property.
        </li>
      </ul>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
<Checkbox
  value="checkedA"
  inputProps={{ 'aria-label': 'Checkbox A' 
/>
`}
      </FuseHighlight>
    </>
  );
}

export default CheckboxesDoc;
