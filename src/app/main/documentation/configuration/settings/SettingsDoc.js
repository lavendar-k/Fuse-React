import FuseHighlight from '@fuse/core/FuseHighlight';
import Typography from '@material-ui/core/Typography';

/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */

function SettingsDoc() {
  return (
    <>
      <Typography variant="h4" className="mb-24">
        Default Settings
      </Typography>

      <Typography className="mb-16" component="p">
        You can set the default layout, theme settings of your app at
        <code>src/app/fuse-configs/settingsConfig.js</code>
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {require('!raw-loader!app/fuse-configs/settingsConfig.js')}
      </FuseHighlight>
    </>
  );
}

export default SettingsDoc;
