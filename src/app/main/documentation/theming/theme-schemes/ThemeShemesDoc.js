import FuseHighlight from '@fuse/core/FuseHighlight';
import Typography from '@material-ui/core/Typography';

/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */

function ThemeShemesDoc() {
  return (
    <>
      <Typography variant="h4" className="mb-24">
        Theme Schemes
      </Typography>

      <Typography className="mb-16" component="p">
        The Fuse React uses material-ui's theming by default. You can create theme color schemes
        with defining theme configuration objects.
      </Typography>

      <Typography className="mb-8" variant="h5">
        Configuration
      </Typography>

      <Typography className="mb-16" component="p">
        For the configuration options checkout{' '}
        <a
          href="https://material-ui-next.com/customization/themes/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Material UI's theme configuration options.
        </a>
      </Typography>
      <Typography className="mb-16" component="p">
        Theme configurations are located at <code>src/app/fuse-configs/themesConfig.js</code> file.
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {require('!raw-loader!app/fuse-configs/themesConfig.js')}
      </FuseHighlight>
    </>
  );
}

export default ThemeShemesDoc;
