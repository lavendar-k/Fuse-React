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
function ModalDoc(props) {
  const classes = useStyles();
  return (
    <>
      <div className="flex flex-1 flex-grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="outlined"
          component="a"
          href="https://material-ui.com/components/modal"
          target="_blank"
          role="button"
        >
          <Icon>link</Icon>
          <span className="mx-4">Reference</span>
        </Button>
      </div>
      <Typography className="text-44 mt-32 mb-8" component="h1">
        Modal
      </Typography>
      <Typography className="description">
        The modal component provides a solid foundation for creating dialogs, popovers, lightboxes,
        or whatever else.
      </Typography>

      <Typography className="mb-16" component="div">
        The component renders its <code>children</code> node in front of a backdrop component. The{' '}
        <code>Modal</code> offers important features:
      </Typography>
      <ul>
        <li>💄 Manages modal stacking when one-at-a-time just isn&#39;t enough.</li>
        <li>🔐 Creates a backdrop, for disabling interaction below the modal.</li>
        <li>🔐 It disables scrolling of the page content while open.</li>
        <li>
          ♿️ It properly manages focus; moving to the modal content, and keeping it there until the
          modal is closed.
        </li>
        <li>♿️ Adds the appropriate ARIA roles automatically.</li>
        <li>
          📦 <a href="/size-snapshot">5 kB gzipped</a>.
        </li>
      </ul>
      <blockquote>
        <Typography className="mb-16" component="div">
          <strong>Terminology note</strong>. The term &quot;modal&quot; is sometimes used to mean
          &quot;dialog&quot;, but this is a misnomer. A modal window describes parts of a UI. An
          element is considered modal if{' '}
          <a href="https://en.wikipedia.org/wiki/Modal_window">
            it blocks interaction with the rest of the application
          </a>
          .
        </Typography>
      </blockquote>
      <Typography className="mb-16" component="div">
        If you are creating a modal dialog, you probably want to use the{' '}
        <a href="/components/dialogs/">Dialog</a> component rather than directly using Modal. Modal
        is a lower-level construct that is leveraged by the following components:
      </Typography>
      <ul>
        <li>
          <a href="/components/dialogs/">Dialog</a>
        </li>
        <li>
          <a href="/components/drawers/">Drawer</a>
        </li>
        <li>
          <a href="/components/menus/">Menu</a>
        </li>
        <li>
          <a href="/components/popover/">Popover</a>
        </li>
      </ul>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Simple modal
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/modal/SimpleModal.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/modal/SimpleModal.js')}
        />
      </Typography>
      <Typography className="mb-16" component="div">
        Notice that you can disable the outline (often blue or gold) with the{' '}
        <code>outline: 0</code> CSS property.
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Transitions
      </Typography>
      <Typography className="mb-16" component="div">
        The open/close state of the modal can be animated with a transition component. This
        component should respect the following conditions:
      </Typography>
      <ul>
        <li>Be a direct child descendent of the modal.</li>
        <li>
          Have an <code>in</code> prop. This corresponds to the open / close state.
        </li>
        <li>
          Call the <code>onEnter</code> callback prop when the enter transition starts.
        </li>
        <li>
          Call the <code>onExited</code> callback prop when the exit transition is completed. These
          two callbacks allow the modal to unmount the child content when closed and fully
          transitioned.
        </li>
      </ul>
      <Typography className="mb-16" component="div">
        Modal has built-in support for{' '}
        <a href="https://github.com/reactjs/react-transition-group">react-transition-group</a>.
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/modal/TransitionsModal.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/modal/TransitionsModal.js')}
        />
      </Typography>
      <Typography className="mb-16" component="div">
        Alternatively, you can use{' '}
        <a href="https://github.com/react-spring/react-spring">react-spring</a>.
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/modal/SpringModal.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/modal/SpringModal.js')}
        />
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Server-side modal
      </Typography>
      <Typography className="mb-16" component="div">
        React <a href="https://github.com/facebook/react/issues/13097">doesn&#39;t support</a> the{' '}
        <a href="https://reactjs.org/docs/portals.html">
          <code>createPortal()</code>
        </a>{' '}
        API on the server. In order to display the modal, you need to disable the portal feature
        with the <code>disablePortal</code> prop:
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/modal/ServerModal.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/modal/ServerModal.js')}
        />
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Limitations
      </Typography>
      <Typography className="text-24 mt-32 mb-8" component="h3">
        Focus trap
      </Typography>
      <Typography className="mb-16" component="div">
        The modal moves the focus back to the body of the component if the focus tries to escape it.
      </Typography>
      <Typography className="mb-16" component="div">
        This is done for accessibility purposes, however, it might create issues. In the event the
        users need to interact with another part of the page, e.g. with a chatbot window, you can
        disable the behavior:
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
<Modal disableEnforceFocus />
`}
      </FuseHighlight>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Accessibility
      </Typography>
      <Typography className="mb-16" component="div">
        (WAI-ARIA:{' '}
        <a href="https://www.w3.org/TR/wai-aria-practices/#dialog_modal">
          https://www.w3.org/TR/wai-aria-practices/#dialog_modal
        </a>
        )
      </Typography>
      <ul>
        <li>
          <Typography className="mb-16" component="div">
            Be sure to add <code>aria-labelledby="id..."</code>, referencing the modal title, to the{' '}
            <code>Modal</code>. Additionally, you may give a description of your modal with the{' '}
            <code>aria-describedby="id..."</code> prop on the <code>Modal</code>.
          </Typography>

          <FuseHighlight component="pre" className="language-jsx">
            {` 
<Modal
  aria-labelledby="modal-title"
  aria-describedby="modal-description"
>
  <h2 id="modal-title">
    My Title
  </h2>
  <Typography id="modal-description">
    My Description
  </Typography>
</Modal>
`}
          </FuseHighlight>
        </li>
        <li>
          <Typography className="mb-16" component="div">
            The{' '}
            <a href="https://www.w3.org/TR/wai-aria-practices/examples/dialog-modal/dialog.html">
              WAI-ARIA authoring practices
            </a>{' '}
            can help you set the initial focus on the most relevant element, based on your modal
            content.
          </Typography>
        </li>
        <li>
          <Typography className="mb-16" component="div">
            Keep in mind that a &quot;modal window&quot; overlays on either the primary window or
            another modal window. Windows under a modal are <strong>inert</strong>. That is, users
            cannot interact with content outside an active modal window. This might create{' '}
            <a href="#focus-trap">conflicting behaviors</a>.
          </Typography>
        </li>
      </ul>
    </>
  );
}

export default ModalDoc;
