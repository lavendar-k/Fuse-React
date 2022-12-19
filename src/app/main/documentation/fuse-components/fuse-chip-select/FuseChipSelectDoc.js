import FuseExample from '@fuse/core/FuseExample';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */

function FuseChipSelectDoc() {
  return (
    <>
      <Typography variant="h4" className="mb-24">
        FuseChipSelect
      </Typography>

      <Typography className="mb-16" component="p">
        <code>FuseChipSelect</code> is a multiple chip select component which uses react-select and
        material-ui Chip.
      </Typography>

      <hr />

      <Typography className="mt-32 mb-8" variant="h5">
        Example Usages
      </Typography>

      <FuseExample
        className="mb-64"
        component={require('./examples/SimpleExample.js').default}
        raw={require('!raw-loader!./examples/SimpleExample.js')}
      />

      <Typography className="mt-32 mb-8" variant="h5">
        Demos
      </Typography>

      <ul>
        <li className="mb-8">
          <Link to="/apps/e-commerce/products/1">E-Commerce Product Page</Link>
        </li>
      </ul>
    </>
  );
}

export default FuseChipSelectDoc;
