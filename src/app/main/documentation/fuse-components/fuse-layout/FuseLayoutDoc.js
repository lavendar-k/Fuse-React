import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

function FuseLayoutDoc() {
  return (
    <>
      <Typography variant="h4" className="mb-24">
        FuseLayout
      </Typography>

      <Typography className="mb-16" component="p">
        <code>FuseLayout</code> is the main layout component of the Fuse React. It allows us to
        switch theme layouts, set layout settings based on the default configuration, and route
        configs.
      </Typography>

      <Typography className="mt-32 mb-8" variant="h5">
        Configuration
      </Typography>

      <Typography className="mb-16" component="p">
        Please checkout{' '}
        <Link className="font-normal" to="/documentation/theming/theme-layouts">
          Theme Layouts
        </Link>{' '}
        at documentation.
      </Typography>
    </>
  );
}

export default FuseLayoutDoc;
