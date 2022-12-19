import FuseHighlight from '@fuse/core/FuseHighlight';
import Typography from '@material-ui/core/Typography';

/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */

function RTLSupportDoc() {
  return (
    <>
      <Typography variant="h4" className="mb-24">
        RTL Support
      </Typography>

      <Typography className="mb-16" component="p">
        Fuse React supports Right-to-left languages such as Arabic, Persian or Hebrew, etc.
      </Typography>

      <Typography className="mb-8" variant="h5">
        Development
      </Typography>

      <Typography className="mb-16" component="p">
        There are two plugins{' '}
        <a
          href="https://github.com/RonMelkhior/tailwindcss-dir"
          target="_blank"
          rel="noopener noreferrer"
        >
          <code>tailwindcss-dir</code>
        </a>{' '}
        and{' '}
        <a href="https://github.com/alitaheri/jss-rtl" target="_blank" rel="noopener noreferrer">
          <code>jss-rtl</code>
        </a>{' '}
        that we use to develop RTL support of the Fuse React.
      </Typography>

      <Typography className="mb-16" component="p">
        <a href="https://github.com/alitaheri/jss-rtl" target="_blank" rel="noopener noreferrer">
          <code>jss-rtl</code>
        </a>{' '}
        enables right-to-left support by flipping every rule of the jss styles on the x-axis. You
        can write the application left-to-right and then turn it into right-to-left using this
        plugin. Or you can start right-to-left and turn it into left-to-right.
      </Typography>

      <Typography className="mb-16" component="p">
        <a
          href="https://github.com/RonMelkhior/tailwindcss-dir"
          target="_blank"
          rel="noopener noreferrer"
        >
          <code>tailwindcss-dir</code>
        </a>{' '}
        adds a custom direction variant to your tailwind project, letting you have custom CSS rules
        for LTR and RTL layouts. For example:
      </Typography>

      <FuseHighlight component="pre" className="language-jsx mb-24">
        {`
                            <div class="text-green text-2xl ltr:pl-4 rtl:pr-4">
                                Hello, world.
                            </div>
                        `}
      </FuseHighlight>

      <Typography className="mb-8" variant="h5">
        Configuration
      </Typography>

      <Typography className="mb-16" component="p">
        To change the default direction of the Fuse React, you need to change <code>direction</code>
        setting in the file <code>src/app/fuse-configs/settingsConfig.js</code>
      </Typography>

      <FuseHighlight component="pre" className="language-jsx mb-24">
        {require('!raw-loader!app/fuse-configs/settingsConfig.js')}
      </FuseHighlight>

      <Typography className="mb-8" variant="h5">
        Dynamically Direction Changing
      </Typography>

      <Typography className="mb-16" component="p">
        If you need to change theme direction dynamically, for example when you need to change LTR
        to RTL language, you need dispatch an action as below:
      </Typography>

      <FuseHighlight component="pre" className="language-jsx mb-24">
        {`
                            dispatch(setDefaultSettings({direction: 'rtl'}));
                        `}
      </FuseHighlight>

      <Typography className="mb-16" component="p">
        Checkout example usage at
        <code>src/app/fuse-layouts/shared-components/LanguageSwitcher.js</code>
      </Typography>
    </>
  );
}

export default RTLSupportDoc;
