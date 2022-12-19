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
function MenusDoc(props) {
  const classes = useStyles();
  return (
    <>
      <div className="flex flex-1 flex-grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="outlined"
          component="a"
          href="https://material-ui.com/components/menus"
          target="_blank"
          role="button"
        >
          <Icon>link</Icon>
          <span className="mx-4">Reference</span>
        </Button>
      </div>
      <Typography className="text-44 mt-32 mb-8" component="h1">
        Menus
      </Typography>
      <Typography className="description">
        Menus display a list of choices on temporary surfaces.
      </Typography>

      <Typography className="mb-16" component="div">
        A <a href="https://material.io/design/components/menus.html">Menu</a> displays a list of
        choices on a temporary surface. It appears when the user interacts with a button, or other
        control.
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Simple Menu
      </Typography>
      <Typography className="mb-16" component="div">
        Simple menus open over the anchor element by default (this option can be changed via props).
        When close to a screen edge, simple menus vertically realign to make sure that all menu
        items are completely visible.
      </Typography>
      <Typography className="mb-16" component="div">
        Choosing an option should immediately ideally commit the option and close the menu.
      </Typography>
      <Typography className="mb-16" component="div">
        <strong>Disambiguation</strong>: In contrast to simple menus, simple dialogs can present
        additional detail related to the options available for a list item or provide navigational
        or orthogonal actions related to the primary task. Although they can display the same
        content, simple menus are preferred over simple dialogs because simple menus are less
        disruptive to the user’s current context.
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/menus/SimpleMenu.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/menus/SimpleMenu.js')}
        />
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Selected menus
      </Typography>
      <Typography className="mb-16" component="div">
        If used for item selection, when opened, simple menus attempt to vertically align the
        currently selected menu item with the anchor element, and the initial focus will be placed
        on the selected menu item. The currently selected menu item is set using the{' '}
        <code>selected</code> property (from <a href="/api/list-item/">ListItem</a>). To use a
        selected menu item without impacting the initial focus or the vertical positioning of the
        menu, set the <code>variant</code> property to <code>menu</code>.
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/menus/SimpleListMenu.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/menus/SimpleListMenu.js')}
        />
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        MenuList composition
      </Typography>
      <Typography className="mb-16" component="div">
        The <code>Menu</code> component uses the <code>Popover</code> component internally. However,
        you might want to use a different positioning strategy, or not blocking the scroll. For
        answering those needs, we expose a <code>MenuList</code> component that you can compose,
        with <code>Popper</code> in this example.
      </Typography>
      <Typography className="mb-16" component="div">
        The primary responsibility of the <code>MenuList</code> component is to handle the focus.
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/menus/MenuListComposition.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/menus/MenuListComposition.js')}
        />
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Customized menus
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
            require('app/main/documentation/material-ui-components/components/menus/CustomizedMenus.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/menus/CustomizedMenus.js')}
        />
      </Typography>
      <Typography className="mb-16" component="div">
        The <code>MenuItem</code> is a wrapper around <code>ListItem</code> with some additional
        styles. You can use the same list composition features with the <code>MenuItem</code>{' '}
        component:
      </Typography>
      <Typography className="mb-16" component="div">
        🎨 If you are looking for inspiration, you can check{' '}
        <a href="https://mui-treasury.com/styles/menu">MUI Treasury&#39;s customization examples</a>
        .
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Max height menus
      </Typography>
      <Typography className="mb-16" component="div">
        If the height of a menu prevents all menu items from being displayed, the menu can scroll
        internally.
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/menus/LongMenu.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/menus/LongMenu.js')}
        />
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Limitations
      </Typography>
      <Typography className="mb-16" component="div">
        There is{' '}
        <a href="https://bugs.chromium.org/p/chromium/issues/detail?id=327437">a flexbox bug</a>{' '}
        that prevents <code>text-overflow: ellipsis</code> from working in a flexbox layout. You can
        use the <code>Typography</code> component with <code>noWrap</code> to workaround this issue:
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/menus/TypographyMenu.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/menus/TypographyMenu.js')}
        />
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Change transition
      </Typography>
      <Typography className="mb-16" component="div">
        Use a different transition.
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/menus/FadeMenu.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/menus/FadeMenu.js')}
        />
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Context menu
      </Typography>
      <Typography className="mb-16" component="div">
        Here is an example of a context menu. (Right click to open.)
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/menus/ContextMenu.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/menus/ContextMenu.js')}
        />
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Complementary projects
      </Typography>
      <Typography className="mb-16" component="div">
        For more advanced use cases you might be able to take advantage of:
      </Typography>
      <Typography className="text-24 mt-32 mb-8" component="h3">
        PopupState helper
      </Typography>
      <Typography className="mb-16" component="div">
        There is a 3rd party package{' '}
        <a href="https://github.com/jcoreio/material-ui-popup-state">
          <code>material-ui-popup-state</code>
        </a>{' '}
        that takes care of menu state for you in most cases.
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/menus/MenuPopupState.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/menus/MenuPopupState.js')}
        />
      </Typography>
    </>
  );
}

export default MenusDoc;
