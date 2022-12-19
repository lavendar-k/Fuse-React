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
function TextFieldsDoc(props) {
  const classes = useStyles();
  return (
    <>
      <div className="flex flex-1 flex-grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="outlined"
          component="a"
          href="https://material-ui.com/components/text-fields"
          target="_blank"
          role="button"
        >
          <Icon>link</Icon>
          <span className="mx-4">Reference</span>
        </Button>
      </div>
      <Typography className="text-44 mt-32 mb-8" component="h1">
        Text Field
      </Typography>
      <Typography className="description">Text fields let users enter and edit text.</Typography>

      <Typography className="mb-16" component="div">
        <a href="https://material.io/design/components/text-fields.html">Text fields</a> allow users
        to enter text into a UI. They typically appear in forms and dialogs.
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        TextField
      </Typography>
      <Typography className="mb-16" component="div">
        The <code>TextField</code> wrapper component is a complete form control including a label,
        input and help text.
      </Typography>
      <Typography className="mb-16" component="div">
        It supports standard, outlined and filled styling.
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/text-fields/BasicTextFields.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/text-fields/BasicTextFields.js')}
        />
      </Typography>
      <Typography className="mb-16" component="div">
        <strong>Note:</strong> The standard variant of the <code>TextField</code> is no longer
        documented in the <a href="https://material.io/">Material Design guidelines</a>(
        <a href="https://medium.com/google-design/the-evolution-of-material-designs-text-fields-603688b3fe03">
          here&#39;s why
        </a>
        ), but Material-UI will continue to support it.
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Form props
      </Typography>
      <Typography className="mb-16" component="div">
        Standard form attributes are supported e.g. <code>required</code>, <code>disabled</code>,{' '}
        <code>type</code>, etc. as well as a <code>helperText</code> which is used to give context
        about a field’s input, such as how the input will be used.
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/text-fields/FormPropsTextFields.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/text-fields/FormPropsTextFields.js')}
        />
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Validation
      </Typography>
      <Typography className="mb-16" component="div">
        The <code>error</code> prop toggles the error state, the <code>helperText</code> prop can
        then be used to provide feedback to the user about the error.
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/text-fields/ValidationTextFields.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/text-fields/ValidationTextFields.js')}
        />
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Multiline
      </Typography>
      <Typography className="mb-16" component="div">
        The <code>multiline</code> prop transforms the text field into a{' '}
        <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea">textarea</a> or
        a <a href="/components/textarea-autosize/">TextareaAutosize</a>.
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/text-fields/MultilineTextFields.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/text-fields/MultilineTextFields.js')}
        />
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Select
      </Typography>
      <Typography className="mb-16" component="div">
        The <code>select</code> prop makes the text field use the{' '}
        <a href="/components/selects/">Select</a> component internally.
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/text-fields/SelectTextFields.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/text-fields/SelectTextFields.js')}
        />
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Icons
      </Typography>
      <Typography className="mb-16" component="div">
        There are multiple ways to display an icon with a text field.
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/text-fields/InputWithIcon.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/text-fields/InputWithIcon.js')}
        />
      </Typography>
      <Typography className="text-24 mt-32 mb-8" component="h3">
        Input Adornments
      </Typography>
      <Typography className="mb-16" component="div">
        The main way is with an <code>InputAdornment</code>. This can be used to add a prefix, a
        suffix or an action to an input. For instance, you can use an icon button to hide or reveal
        the password.
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/text-fields/InputAdornments.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/text-fields/InputAdornments.js')}
        />
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Sizes
      </Typography>
      <Typography className="mb-16" component="div">
        Fancy smaller inputs? Use the <code>size</code> prop.
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/text-fields/TextFieldSizes.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/text-fields/TextFieldSizes.js')}
        />
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Layout
      </Typography>
      <Typography className="mb-16" component="div">
        <code>margin</code> prop can be used to alter the vertical spacing of inputs. Using{' '}
        <code>none</code> (default) will not apply margins to the <code>FormControl</code>, whereas{' '}
        <code>dense</code> and <code>normal</code> will.
        <code>dense</code> and <code>normal</code> alter other styles to meet the specification.
      </Typography>
      <Typography className="mb-16" component="div">
        <code>fullWidth</code> can be used to make the input take up the full width of its
        container.
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/text-fields/LayoutTextFields.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/text-fields/LayoutTextFields.js')}
        />
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Uncontrolled vs Controlled
      </Typography>
      <Typography className="mb-16" component="div">
        The component can be controlled or uncontrolled.
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/text-fields/StateTextFields.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/text-fields/StateTextFields.js')}
        />
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Components
      </Typography>
      <Typography className="mb-16" component="div">
        <code>TextField</code> is composed of smaller components (
        <a href="/api/form-control/">
          <code>FormControl</code>
        </a>
        ,
        <a href="/api/input/">
          <code>Input</code>
        </a>
        ,
        <a href="/api/filled-input/">
          <code>FilledInput</code>
        </a>
        ,
        <a href="/api/input-label/">
          <code>InputLabel</code>
        </a>
        ,
        <a href="/api/outlined-input/">
          <code>OutlinedInput</code>
        </a>
        , and{' '}
        <a href="/api/form-helper-text/">
          <code>FormHelperText</code>
        </a>
        ) that you can leverage directly to significantly customize your form inputs.
      </Typography>
      <Typography className="mb-16" component="div">
        You might also have noticed that some native HTML input properties are missing from the{' '}
        <code>TextField</code> component. This is on purpose. The component takes care of the most
        used properties, then it&#39;s up to the user to use the underlying component shown in the
        following demo. Still, you can use <code>inputProps</code> (and <code>InputProps</code>,{' '}
        <code>InputLabelProps</code> properties) if you want to avoid some boilerplate.
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/text-fields/ComposedTextField.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/text-fields/ComposedTextField.js')}
        />
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Inputs
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/text-fields/Inputs.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/text-fields/Inputs.js')}
        />
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Color
      </Typography>
      <Typography className="mb-16" component="div">
        The <code>color</code> prop changes the highlight color of the text field when focused.
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/text-fields/ColorTextFields.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/text-fields/ColorTextFields.js')}
        />
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Customized inputs
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
            require('app/main/documentation/material-ui-components/components/text-fields/CustomizedInputs.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/text-fields/CustomizedInputs.js')}
        />
      </Typography>
      <Typography className="mb-16" component="div">
        Customization does not stop at CSS, you can use composition to build custom components and
        give your app a unique feel. Below is an example using the{' '}
        <a href="/api/input-base/">
          <code>InputBase</code>
        </a>{' '}
        component, inspired by Google Maps.
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/text-fields/CustomizedInputBase.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/text-fields/CustomizedInputBase.js')}
        />
      </Typography>
      <Typography className="mb-16" component="div">
        🎨 If you are looking for inspiration, you can check{' '}
        <a href="https://mui-treasury.com/styles/text-field">
          MUI Treasury&#39;s customization examples
        </a>
        .
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Limitations
      </Typography>
      <Typography className="text-24 mt-32 mb-8" component="h3">
        Shrink
      </Typography>
      <Typography className="mb-16" component="div">
        The input label &quot;shrink&quot; state isn&#39;t always correct. The input label is
        supposed to shrink as soon as the input is displaying something. In some circumstances, we
        can&#39;t determine the &quot;shrink&quot; state (number input, datetime input, Stripe
        input). You might notice an overlap.
      </Typography>
      <Typography className="mb-16" component="div">
        {' '}
        src="/material-ui-static/images/text-fields/shrink.png" alt="shrink/>
      </Typography>
      <Typography className="mb-16" component="div">
        To workaround the issue, you can force the &quot;shrink&quot; state of the label.
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
<TextField InputLabelProps={{ shrink: true }} />
`}
      </FuseHighlight>
      <Typography className="mb-16" component="div">
        or
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
<InputLabel shrink>Count</InputLabel>
`}
      </FuseHighlight>
      <Typography className="text-24 mt-32 mb-8" component="h3">
        Floating label
      </Typography>
      <Typography className="mb-16" component="div">
        The floating label is absolutely positioned, it won&#39;t impact the layout of the page. You
        need to make sure that the input is larger than the label to display correctly.
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Integration with 3rd party input libraries
      </Typography>
      <Typography className="mb-16" component="div">
        You can use third-party libraries to format an input. You have to provide a custom
        implementation of the <code>{`<input>`}</code> element with the <code>inputComponent</code>{' '}
        property.
      </Typography>
      <Typography className="mb-16" component="div">
        The following demo uses the{' '}
        <a href="https://github.com/text-mask/text-mask">react-text-mask</a> and{' '}
        <a href="https://github.com/s-yadav/react-number-format">react-number-format</a> libraries.
        The same concept could be applied to{' '}
        <a href="https://github.com/mui-org/material-ui/issues/16037">e.g. react-stripe-element</a>.
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/text-fields/FormattedInputs.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/text-fields/FormattedInputs.js')}
        />
      </Typography>
      <Typography className="mb-16" component="div">
        The provided input component should handle the <code>inputRef</code> property. The property
        should be called with a value that implements the following interface:
      </Typography>

      <FuseHighlight component="pre" className="language-ts">
        {` 
interface InputElement {
  focus(): void;
  value?: string;
}
`}
      </FuseHighlight>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
function MyInputComponent(props) {
  const { component: Component, inputRef, ...other } = props;

  // implement \`InputElement\` interface
  React.useImperativeHandle(inputRef, () => ({
    focus: () => {
      // logic to focus the rendered component from 3rd party belongs here
    },
    // hiding the value e.g. react-stripe-elements
  }));

  // \`Component\` will be your \`SomeThirdPartyComponent\` from below
  return <Component {...other} />;
}

// usage
<TextField
  InputProps={{
    inputComponent: MyInputComponent,
    inputProps: { component: SomeThirdPartyComponent },

/>;
`}
      </FuseHighlight>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Accessibility
      </Typography>
      <Typography className="mb-16" component="div">
        In order for the text field to be accessible,{' '}
        <strong>the input should be linked to the label and the helper text</strong>. The underlying
        DOM nodes should have this structure:
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
<div className="form-control">
  <label for="my-input">Email address</label>
  <input id="my-input" aria-describedby="my-helper-text" />
  <span id="my-helper-text">We'll never share your email.</span>
</div>
`}
      </FuseHighlight>
      <ul>
        <li>
          If you are using the <code>TextField</code> component, you just have to provide a unique{' '}
          <code>id</code>.
        </li>
        <li>If you are composing the component:</li>
      </ul>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
<FormControl>
  <InputLabel htmlFor="my-input">Email address</InputLabel>
  <Input id="my-input" aria-describedby="my-helper-text" />
  <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
</FormControl>
`}
      </FuseHighlight>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Complementary projects
      </Typography>
      <Typography className="mb-16" component="div">
        For more advanced use cases you might be able to take advantage of:
      </Typography>
      <ul>
        <li>
          <a href="https://github.com/stackworx/formik-material-ui">formik-material-ui</a> Bindings
          for using Material-UI with <a href="https://jaredpalmer.com/formik">formik</a>.
        </li>
        <li>
          <a href="https://github.com/erikras/redux-form-material-ui">redux-form-material-ui</a>{' '}
          Bindings for using Material-UI with <a href="https://redux-form.com/">Redux Form</a>.
        </li>
        <li>
          <a href="https://github.com/lookfirst/mui-rff">mui-rff</a> Bindings for using Material-UI
          with <a href="https://final-form.org/react">React Final Form</a>.
        </li>
      </ul>
    </>
  );
}

export default TextFieldsDoc;
