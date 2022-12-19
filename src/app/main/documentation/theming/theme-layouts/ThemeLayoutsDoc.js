import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

function ThemeLayoutsDoc() {
  return (
    <>
      <Typography variant="h4" className="mb-24">
        Theme Layouts
      </Typography>

      <Typography className="mb-16" component="p">
        Fuse comes with a variety of different Theme Layouts which you can see and try them from the
        configuration sidebar (Click on the animated, spinning cog button from the right side of
        your screen).
      </Typography>

      <Typography className="mb-16" component="p">
        These layouts are accessible from <code>/src/app/fuse-layouts</code> directory and you can
        modify them however you like. Each layout has its own options. Those options allow you to
        configure the layout elements such as Toolbar, Footer, and Navbar.
      </Typography>

      <Typography className="mb-8" variant="h5">
        File Structure
      </Typography>

      <Typography className="my-16" component="div">
        Inside the <code>/src/app/fuse-layouts</code> directory
        <ul className="my-8 list-disc ml-16">
          <li className="mb-8">
            <b>/layout-1</b> :
            <ul className="my-8 ml-12">
              <li className="mb-8">
                <b>/components</b> : Contains Layout elements such as Toolbar, Footer, and Navbar.
              </li>
              <li className="mb-8">
                <b>/Layout1.js</b> : Layout 1 component
              </li>
              <li className="mb-8">
                <b>/Layout1.config.js</b> : Contains title, default configs and form options of the
                layout.
              </li>
            </ul>
          </li>
          <li className="mb-8">
            <b>/shared components</b> : Each layouts shares the components of this directory
          </li>
          <li className="mb-8">
            <b>/FuseLayoutConfigs.js</b> : Imports all layout configs.
          </li>
          <li className="mb-8">
            <b>/FuseLayouts.js</b> : Imports all layout components.
          </li>
          <li className="mb-8">
            <b>/layout-2</b>
          </li>
          <li className="mb-8">
            <b>/layout-3</b>
          </li>
        </ul>
      </Typography>

      <Typography className="mb-8" variant="h5">
        Configuring
      </Typography>

      <Typography className="mb-16" component="p">
        Fuse React has a powerful layout system which allows you to configure and use a different
        layout per route.
      </Typography>

      <Typography className="mb-16" component="p">
        Each route can have its own layout configuration meaning that it's very easy to have pages
        like login page where there isn't any toolbar or navbar showing, without leaving the Fuse
        React.
      </Typography>

      <Typography className="mb-16" component="p">
        You can get more information about route configuration and its usage from{' '}
        <Link to="/documentation/configuration/routing">the Routing documentation page</Link>.
      </Typography>
    </>
  );
}

export default ThemeLayoutsDoc;
