import FuseHighlight from '@fuse/core/FuseHighlight';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */

function FuseThemeDoc() {
  return (
    <>
      <Typography variant="h4" className="mb-24">
        FuseTheme
      </Typography>

      <Typography className="mb-16" component="p">
        <code>FuseTheme</code> is the theming component of the Fuse React. It allows us to change
        predefined Material UI themes. It should wrap the <code>FuseLayout</code> component.
      </Typography>

      <Typography className="mb-16" component="p">
        <code>src/app/App.js</code>
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {require('!raw-loader!app/App.js')}
      </FuseHighlight>

      <Typography className="mt-32 mb-8" variant="h5">
        Configuration
      </Typography>

      <Typography className="mb-16" component="p">
        Please checkout
        <Link className="font-normal mx-4" to="/documentation/theming/theme-schemes">
          theming
        </Link>
        at documentation.
      </Typography>
    </>
  );
}

export default FuseThemeDoc;
