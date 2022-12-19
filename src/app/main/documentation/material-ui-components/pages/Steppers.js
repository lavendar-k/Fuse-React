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
function SteppersDoc(props) {
  const classes = useStyles();
  return (
    <>
      <div className="flex flex-1 flex-grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="outlined"
          component="a"
          href="https://material-ui.com/components/steppers"
          target="_blank"
          role="button"
        >
          <Icon>link</Icon>
          <span className="mx-4">Reference</span>
        </Button>
      </div>
      <Typography className="text-44 mt-32 mb-8" component="h1">
        Stepper
      </Typography>
      <Typography className="description">
        Steppers convey progress through numbered steps. It provides a wizard-like workflow.
      </Typography>

      <Typography className="mb-16" component="div">
        <a href="https://material.io/archive/guidelines/components/steppers.html">Steppers</a>{' '}
        display progress through a sequence of logical and numbered steps. They may also be used for
        navigation. Steppers may display a transient feedback message after a step is saved.
      </Typography>
      <ul>
        <li>
          <strong>Types of Steps</strong>: Editable, Non-editable, Mobile, Optional
        </li>
        <li>
          <strong>Types of Steppers</strong>: Horizontal, Vertical, Linear, Non-linear
        </li>
      </ul>
      <blockquote>
        <Typography className="mb-16" component="div">
          <strong>Note:</strong> Steppers are no longer documented in the{' '}
          <a href="https://material.io/">Material Design guidelines</a>, but Material-UI will
          continue to support them.
        </Typography>
      </blockquote>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Horizontal Stepper
      </Typography>
      <Typography className="text-24 mt-32 mb-8" component="h3">
        Linear
      </Typography>
      <Typography className="mb-16" component="div">
        The <code>Stepper</code> can be controlled by passing the current step index (zero-based) as
        the <code>activeStep</code> property. <code>Stepper</code> orientation is set using the{' '}
        <code>orientation</code> property.
      </Typography>
      <Typography className="mb-16" component="div">
        This example also shows the use of an optional step by placing the <code>optional</code>{' '}
        property on the second <code>Step</code> component. Note that it&#39;s up to you to manage
        when an optional step is skipped. Once you&#39;ve determined this for a particular step you
        must set <code>{`completed={false}`}</code> to signify that even though the active step
        index has gone beyond the optional step, it&#39;s not actually complete.
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/steppers/HorizontalLinearStepper.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/steppers/HorizontalLinearStepper.js')}
        />
      </Typography>
      <Typography className="text-24 mt-32 mb-8" component="h3">
        Linear - Alternative Label
      </Typography>
      <Typography className="mb-16" component="div">
        Labels can be placed below the step icon by setting the <code>alternativeLabel</code> prop
        on the <code>Stepper</code> component.
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/steppers/HorizontalLinearAlternativeLabelStepper.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/steppers/HorizontalLinearAlternativeLabelStepper.js')}
        />
      </Typography>
      <Typography className="text-24 mt-32 mb-8" component="h3">
        Customized Stepper
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
            require('app/main/documentation/material-ui-components/components/steppers/CustomizedSteppers.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/steppers/CustomizedSteppers.js')}
        />
      </Typography>
      <Typography className="text-24 mt-32 mb-8" component="h3">
        Non-linear
      </Typography>
      <Typography className="mb-16" component="div">
        Non-linear steppers allow users to enter a multi-step flow at any point.
      </Typography>
      <Typography className="mb-16" component="div">
        This example is similar to the regular horizontal stepper, except steps are no longer
        automatically set to <code>{`disabled={true}`}</code> based on the <code>activeStep</code>{' '}
        property.
      </Typography>
      <Typography className="mb-16" component="div">
        The use of the <code>StepButton</code> here demonstrates clickable step labels, as well as
        setting the <code>completed</code>
        flag. However because steps can be accessed in a non-linear fashion, it&#39;s up to your own
        implementation to determine when all steps are completed (or even if they need to be
        completed).
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/steppers/HorizontalNonLinearStepper.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/steppers/HorizontalNonLinearStepper.js')}
        />
      </Typography>
      <Typography className="text-24 mt-32 mb-8" component="h3">
        Non-linear - Alternative Label
      </Typography>
      <Typography className="mb-16" component="div">
        Labels can be placed below the step icon by setting the <code>alternativeLabel</code> prop
        on the <code>Stepper</code> component.
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/steppers/HorizontalNonLinearAlternativeLabelStepper.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/steppers/HorizontalNonLinearAlternativeLabelStepper.js')}
        />
      </Typography>
      <Typography className="text-24 mt-32 mb-8" component="h3">
        Non-linear - Error Step
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/steppers/HorizontalNonLinearStepperWithError.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/steppers/HorizontalNonLinearStepperWithError.js')}
        />
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Vertical Stepper
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/steppers/VerticalLinearStepper.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/steppers/VerticalLinearStepper.js')}
        />
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Mobile Stepper
      </Typography>
      <Typography className="mb-16" component="div">
        This component implements a compact stepper suitable for a mobile device. See{' '}
        <a href="https://material.io/archive/guidelines/components/steppers.html#steppers-types-of-steps">
          mobile steps
        </a>{' '}
        for its inspiration.
      </Typography>
      <Typography className="text-24 mt-32 mb-8" component="h3">
        Text
      </Typography>
      <Typography className="mb-16" component="div">
        This is essentially a back/next button positioned correctly. You must implement the textual
        description yourself, however, an example is provided below for reference.
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/steppers/TextMobileStepper.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/steppers/TextMobileStepper.js')}
        />
      </Typography>
      <Typography className="text-24 mt-32 mb-8" component="h3">
        Text with Carousel effect
      </Typography>
      <Typography className="mb-16" component="div">
        This demo is very similar to the previous, the difference is the usage of
        <a href="https://github.com/oliviertassinari/react-swipeable-views">
          react-swipeable-views
        </a>{' '}
        to make the transition of steps.
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/steppers/SwipeableTextMobileStepper.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/steppers/SwipeableTextMobileStepper.js')}
        />
      </Typography>
      <Typography className="text-24 mt-32 mb-8" component="h3">
        Dots
      </Typography>
      <Typography className="mb-16" component="div">
        Use dots when the number of steps isn’t large.
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/steppers/DotsMobileStepper.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/steppers/DotsMobileStepper.js')}
        />
      </Typography>
      <Typography className="text-24 mt-32 mb-8" component="h3">
        Progress
      </Typography>
      <Typography className="mb-16" component="div">
        Use a progress bar when there are many steps, or if there are steps that need to be inserted
        during the process (based on responses to earlier steps).
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/steppers/ProgressMobileStepper.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/steppers/ProgressMobileStepper.js')}
        />
      </Typography>
    </>
  );
}

export default SteppersDoc;
