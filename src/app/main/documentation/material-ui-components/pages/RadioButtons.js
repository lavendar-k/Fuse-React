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
function RadioButtonsDoc(props) {
  const classes = useStyles();
  return (
    <>
      <div className="flex flex-1 flex-grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="outlined"
          component="a"
          href="https://material-ui.com/components/radio-buttons"
          target="_blank"
          role="button"
        >
          <Icon>link</Icon>
          <span className="mx-4">Reference</span>
        </Button>
      </div>
      <Typography className="text-44 mt-32 mb-8" component="h1">
        Radio
      </Typography>
      <Typography className="description">
        Radio buttons allow the user to select one option from a set.
      </Typography>

      <Typography className="mb-16" component="div">
        Use{' '}
        <a href="https://material.io/design/components/selection-controls.html#radio-buttons">
          radio buttons
        </a>{' '}
        when the user needs to see all available options. If available options can be collapsed,
        consider using a dropdown menu because it uses less space.
      </Typography>
      <Typography className="mb-16" component="div">
        Radio buttons should have the most commonly used option selected by default.
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        RadioGroup
      </Typography>
      <Typography className="mb-16" component="div">
        <code>RadioGroup</code> is a helpful wrapper used to group <code>Radio</code> components
        that provides an easier API, and proper keyboard accessibility to the group.
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/radio-buttons/RadioButtonsGroup.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/radio-buttons/RadioButtonsGroup.js')}
        />
      </Typography>
      <Typography className="mb-16" component="div">
        To lay out the buttons horizontally, set the <code>row</code> prop:{' '}
        <code>{`<RadioGroup row />`}</code>.
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Standalone radio buttons
      </Typography>
      <Typography className="mb-16" component="div">
        <code>Radio</code> can also be used standalone, without the RadioGroup wrapper.
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/radio-buttons/RadioButtons.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/radio-buttons/RadioButtons.js')}
        />
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Label placement
      </Typography>
      <Typography className="mb-16" component="div">
        You can change the placement of the label with the <code>FormControlLabel</code>{' '}
        component&#39;s <code>labelPlacement</code> prop:
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/radio-buttons/FormControlLabelPlacement.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/radio-buttons/FormControlLabelPlacement.js')}
        />
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Show error
      </Typography>
      <Typography className="mb-16" component="div">
        In general, radio buttons should have a value selected by default. If this is not the case,
        you can display an error if no value is selected when the form is submitted:
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/radio-buttons/ErrorRadios.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/radio-buttons/ErrorRadios.js')}
        />
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Customized radios
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
            require('app/main/documentation/material-ui-components/components/radio-buttons/CustomizedRadios.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/radio-buttons/CustomizedRadios.js')}
        />
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
      </ul>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Accessibility
      </Typography>
      <Typography className="mb-16" component="div">
        (WAI-ARIA:{' '}
        <a href="https://www.w3.org/TR/wai-aria-practices/#radiobutton">
          https://www.w3.org/TR/wai-aria-practices/#radiobutton
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
<RadioButton
  value="radioA"
  inputProps={{ 'aria-label': 'Radio A' 
/>
`}
      </FuseHighlight>
    </>
  );
}

export default RadioButtonsDoc;
