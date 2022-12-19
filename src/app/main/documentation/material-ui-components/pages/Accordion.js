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
function AccordionDoc(props) {
  const classes = useStyles();
  return (
    <>
      <div className="flex flex-1 flex-grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="outlined"
          component="a"
          href="https://material-ui.com/components/accordion"
          target="_blank"
          role="button"
        >
          <Icon>link</Icon>
          <span className="mx-4">Reference</span>
        </Button>
      </div>
      <Typography className="text-44 mt-32 mb-8" component="h1">
        Accordion
      </Typography>
      <Typography className="description">
        Accordions contain creation flows and allow lightweight editing of an element.
      </Typography>

      <Typography className="mb-16" component="div">
        <a href="https://material.io/archive/guidelines/components/expansion-panels.html">
          An accordion
        </a>{' '}
        is a lightweight container that may either stand alone or be connected to a larger surface,
        such as a card.
      </Typography>
      <blockquote>
        <Typography className="mb-16" component="div">
          <strong>Note:</strong> Accordions are no longer documented in the{' '}
          <a href="https://material.io/">Material Design guidelines</a>, but Material-UI will
          continue to support them. It was formerly known as the &quot;expansion panel&quot;.
        </Typography>
      </blockquote>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Simple accordion
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/accordion/SimpleAccordion.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/accordion/SimpleAccordion.js')}
        />
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Controlled accordion
      </Typography>
      <Typography className="mb-16" component="div">
        Extend the default behavior to create an accordion with the <code>Accordion</code>{' '}
        component.
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/accordion/ControlledAccordions.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/accordion/ControlledAccordions.js')}
        />
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Customized accordions
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
            require('app/main/documentation/material-ui-components/components/accordion/CustomizedAccordions.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/accordion/CustomizedAccordions.js')}
        />
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Additional actions
      </Typography>
      <Typography className="mb-16" component="div">
        In order to put an action such as a <code>Checkbox</code> or a button inside of the{' '}
        <code>AccordionSummary</code>, you need to stop the propagation of the focus and click
        events to prevent the accordion from expanding/collapsing when using the action. You should
        also provide an <code>aria-label</code> for the action, otherwise the label of the nested
        action will be included in the label of the parent button that controls the accordion
        expansion.
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/accordion/ActionsInAccordionSummary.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/accordion/ActionsInAccordionSummary.js')}
        />
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Performance
      </Typography>
      <Typography className="mb-16" component="div">
        The content of Accordions is mounted by default even if the accordion is not expanded. This
        default behavior has server-side rendering and SEO in mind. If you render expensive
        component trees inside your accordion details or simply render many accordions it might be a
        good idea to change this default behavior by enabling the
        <code>unmountOnExit</code> in <code>TransitionProps</code>:
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
<Accordion TransitionProps={{ unmountOnExit: true }} />
`}
      </FuseHighlight>
      <Typography className="mb-16" component="div">
        As with any performance optimization this is not a silver bullet. Be sure to identify
        bottlenecks first and then try out these optimization strategies.
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Secondary heading and columns
      </Typography>
      <Typography className="mb-16" component="div">
        Multiple columns can be used to structure the content, and a helper text may be added to the
        accordion to assist the user.
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/accordion/DetailedAccordion.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/accordion/DetailedAccordion.js')}
        />
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Accessibility
      </Typography>
      <Typography className="mb-16" component="div">
        (WAI-ARIA:{' '}
        <a href="https://www.w3.org/TR/wai-aria-practices/#accordion">
          https://www.w3.org/TR/wai-aria-practices/#accordion
        </a>
        )
      </Typography>
      <Typography className="mb-16" component="div">
        For optimal accessibility we recommend setting <code>id</code> and{' '}
        <code>aria-controls</code> on the
        <code>AccordionSummary</code>. The <code>Accordion</code> will derive the necessary{' '}
        <code>aria-labelledby</code>
        and <code>id</code> for the content region of the accordion.
      </Typography>
    </>
  );
}

export default AccordionDoc;
