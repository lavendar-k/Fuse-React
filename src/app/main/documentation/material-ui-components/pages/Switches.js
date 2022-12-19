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
function SwitchesDoc(props) {
  const classes = useStyles();
  return (
    <>
      <div className="flex flex-1 flex-grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="outlined"
          component="a"
          href="https://material-ui.com/components/switches"
          target="_blank"
          role="button"
        >
          <Icon>link</Icon>
          <span className="mx-4">Reference</span>
        </Button>
      </div>
      <Typography className="text-44 mt-32 mb-8" component="h1">
        Switch
      </Typography>
      <Typography className="description">
        Switches toggle the state of a single setting on or off.
      </Typography>

      <Typography className="mb-16" component="div">
        <a href="https://material.io/design/components/selection-controls.html#switches">
          Switches
        </a>{' '}
        are the preferred way to adjust settings on mobile. The option that the switch controls, as
        well as the state it’s in, should be made clear from the corresponding inline label.
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Basic switches
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/switches/Switches.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/switches/Switches.js')}
        />
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Switch with FormControlLabel
      </Typography>
      <Typography className="mb-16" component="div">
        <code>Switch</code> can be provided with a description thanks to the{' '}
        <code>FormControlLabel</code> component.
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/switches/SwitchLabels.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/switches/SwitchLabels.js')}
        />
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Switches with FormGroup
      </Typography>
      <Typography className="mb-16" component="div">
        <code>FormGroup</code> is a helpful wrapper used to group selection controls components that
        provides an easier API. However, you are encouraged you to use{' '}
        <a href="/components/checkboxes/">Checkboxes</a> instead if multiple related controls are
        required. (See: <a href="#when-to-use">When to use</a>).
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/switches/SwitchesGroup.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/switches/SwitchesGroup.js')}
        />
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Customized switches
      </Typography>
      <Typography className="mb-16" component="div">
        Here are some examples of customizing the component. You can learn more about this in the
        <a href="/customization/components/">overrides documentation page</a>.
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/switches/CustomizedSwitches.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/switches/CustomizedSwitches.js')}
        />
      </Typography>
      <Typography className="mb-16" component="div">
        🎨 If you are looking for inspiration, you can check{' '}
        <a href="https://mui-treasury.com/styles/switch">
          MUI Treasury&#39;s customization examples
        </a>
        .
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Sizes
      </Typography>
      <Typography className="mb-16" component="div">
        Fancy smaller switches? Use the <code>size</code> property.
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/switches/SwitchesSize.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/switches/SwitchesSize.js')}
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
            require('app/main/documentation/material-ui-components/components/switches/FormControlLabelPosition.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/switches/FormControlLabelPosition.js')}
        />
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        When to use
      </Typography>
      <ul>
        <li>
          <a href="https://uxplanet.org/checkbox-vs-toggle-switch-7fc6e83f10b8">
            Checkboxes vs. Switches
          </a>
        </li>
      </ul>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Accessibility
      </Typography>
      <ul>
        <li>
          It will render an element with the <code>checkbox</code> role not <code>switch</code> role
          since this role isn&#39;t widely supported yet. Please test first if assistive technology
          of your target audience supports this role properly. Then you can change the role with
          <code>{`<Switch inputProps={{ role: 'switch' }}>`}</code>
        </li>
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
<Switch value="checkedA" inputProps={{ 'aria-label': 'Switch A' }} />
`}
      </FuseHighlight>
    </>
  );
}

export default SwitchesDoc;
