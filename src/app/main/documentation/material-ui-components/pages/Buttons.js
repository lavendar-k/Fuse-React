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
function ButtonsDoc(props) {
  const classes = useStyles();
  return (
    <>
      <div className="flex flex-1 flex-grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="outlined"
          component="a"
          href="https://material-ui.com/components/buttons"
          target="_blank"
          role="button"
        >
          <Icon>link</Icon>
          <span className="mx-4">Reference</span>
        </Button>
      </div>
      <Typography className="text-44 mt-32 mb-8" component="h1">
        Button
      </Typography>
      <Typography className="description">
        Buttons allow users to take actions, and make choices, with a single tap.
      </Typography>

      <Typography className="mb-16" component="div">
        <a href="https://material.io/design/components/buttons.html">Buttons</a> communicate actions
        that users can take. They are typically placed throughout your UI, in places like:
      </Typography>
      <ul>
        <li>Dialogs</li>
        <li>Modal windows</li>
        <li>Forms</li>
        <li>Cards</li>
        <li>Toolbars</li>
      </ul>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Contained Buttons
      </Typography>
      <Typography className="mb-16" component="div">
        <a href="https://material.io/design/components/buttons.html#contained-button">
          Contained buttons
        </a>
        are high-emphasis, distinguished by their use of elevation and fill. They contain actions
        that are primary to your app.
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/buttons/ContainedButtons.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/buttons/ContainedButtons.js')}
        />
      </Typography>
      <Typography className="mb-16" component="div">
        You can remove the elevation with the <code>disableElevation</code> prop.
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/buttons/DisableElevation.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/buttons/DisableElevation.js')}
        />
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Text Buttons
      </Typography>
      <Typography className="mb-16" component="div">
        <a href="https://material.io/design/components/buttons.html#text-button">Text buttons</a>
        are typically used for less-pronounced actions, including those located:
      </Typography>
      <ul>
        <li>In dialogs</li>
        <li>In cards</li>
      </ul>
      <Typography className="mb-16" component="div">
        In cards, text buttons help maintain an emphasis on card content.
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/buttons/TextButtons.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/buttons/TextButtons.js')}
        />
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Outlined Buttons
      </Typography>
      <Typography className="mb-16" component="div">
        <a href="https://material.io/design/components/buttons.html#outlined-button">
          Outlined buttons
        </a>
        are medium-emphasis buttons. They contain actions that are important, but aren’t the primary
        action in an app.
      </Typography>
      <Typography className="mb-16" component="div">
        Outlined buttons are also a lower emphasis alternative to contained buttons, or a higher
        emphasis alternative to text buttons.
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/buttons/OutlinedButtons.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/buttons/OutlinedButtons.js')}
        />
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Handling clicks
      </Typography>
      <Typography className="mb-16" component="div">
        All components accept an <code>onClick</code> handler that is applied to the root DOM
        element.
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
<Button onClick={() => { alert('clicked') }}>Click me</Button>
`}
      </FuseHighlight>
      <Typography className="mb-16" component="div">
        Note that the documentation <a href="/guides/api/#native-properties">avoids</a> mentioning
        native props (there are a lot) in the API section of the components.
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Upload button
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/buttons/UploadButtons.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/buttons/UploadButtons.js')}
        />
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Sizes
      </Typography>
      <Typography className="mb-16" component="div">
        Fancy larger or smaller buttons? Use the <code>size</code> property.
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/buttons/ButtonSizes.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/buttons/ButtonSizes.js')}
        />
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Buttons with icons and label
      </Typography>
      <Typography className="mb-16" component="div">
        Sometimes you might want to have icons for certain button to enhance the UX of the
        application as we recognize logos more easily than plain text. For example, if you have a
        delete button you can label it with a dustbin icon.
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/buttons/IconLabelButtons.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/buttons/IconLabelButtons.js')}
        />
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Icon Buttons
      </Typography>
      <Typography className="mb-16" component="div">
        Icon buttons are commonly found in app bars and toolbars.
      </Typography>
      <Typography className="mb-16" component="div">
        Icons are also appropriate for toggle buttons that allow a single choice to be selected or
        deselected, such as adding or removing a star to an item.
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/buttons/IconButtons.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/buttons/IconButtons.js')}
        />
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Customized buttons
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
            require('app/main/documentation/material-ui-components/components/buttons/CustomizedButtons.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/buttons/CustomizedButtons.js')}
        />
      </Typography>
      <Typography className="mb-16" component="div">
        🎨 If you are looking for inspiration, you can check{' '}
        <a href="https://mui-treasury.com/styles/button">
          MUI Treasury&#39;s customization examples
        </a>
        .
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Complex Buttons
      </Typography>
      <Typography className="mb-16" component="div">
        The Text Buttons, Contained Buttons, Floating Action Buttons and Icon Buttons are built on
        top of the same component: the <code>ButtonBase</code>. You can take advantage of this lower
        level component to build custom interactions.
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/buttons/ButtonBase.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/buttons/ButtonBase.js')}
        />
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Third-party routing library
      </Typography>
      <Typography className="mb-16" component="div">
        One common use case is to use the button to trigger navigation to a new page. The{' '}
        <code>ButtonBase</code> component provides a property to handle this use case:{' '}
        <code>component</code>. However for certain focus polyfills <code>ButtonBase</code> requires
        the DOM node of the provided component. This is achieved by attaching a ref to the component
        and expecting that the component forwards this ref to the underlying DOM node. Given that
        many of the interactive components rely on <code>ButtonBase</code>, you should be able to
        take advantage of it everywhere.
      </Typography>
      <Typography className="mb-16" component="div">
        Here is an <a href="/guides/composition/#button">integration example with react-router</a>.
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Limitations
      </Typography>
      <Typography className="text-24 mt-32 mb-8" component="h3">
        Cursor not-allowed
      </Typography>
      <Typography className="mb-16" component="div">
        The ButtonBase component sets <code>pointer-events: none;</code> on disabled buttons, which
        prevents the appearance of a disabled cursor.
      </Typography>
      <Typography className="mb-16" component="div">
        If you wish to use <code>not-allowed</code>, you have two options:
      </Typography>
      <ol>
        <li>
          <Typography className="mb-16" component="div">
            <strong>CSS only</strong>. You can remove the pointer events style on the disabled state
            of the <code>{`<button>`}</code> element:
          </Typography>

          <FuseHighlight component="pre" className="language-css">
            {` 
.MuiButtonBase-root:disabled {
 cursor: not-allowed;
 pointer-events: auto;
}
`}
          </FuseHighlight>
          <Typography className="mb-16" component="div">
            However:
          </Typography>
          <ul>
            <li>
              You should add <code>pointer-events: none;</code> back when you need to display{' '}
              <a href="/components/tooltips/#disabled-elements">tooltips on disabled elements</a>.
            </li>
            <li>
              The cursor won&#39;t change if you render something other than a button element, for
              instance, a link <code>{`<a>`}</code> element.
            </li>
          </ul>
        </li>
        <li>
          <Typography className="mb-16" component="div">
            <strong>DOM change</strong>. You can wrap the button:
          </Typography>

          <FuseHighlight component="pre" className="language-jsx">
            {` 
<span style={{ cursor: 'not-allowed' }}>
 <Button component={Link} disabled>
   disabled
 </Button>
</span>
`}
          </FuseHighlight>
          <Typography className="mb-16" component="div">
            This has the advantage of supporting any element, for instance, a link{' '}
            <code>{`<a>`}</code> element.
          </Typography>
        </li>
      </ol>
    </>
  );
}

export default ButtonsDoc;
