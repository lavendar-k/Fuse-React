import FuseExample from '@fuse/core/FuseExample';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';

import { Link } from 'react-router-dom';

/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */

function ReactTableDoc() {
  return (
    <>
      <div className="flex w-full items-center justify-between mb-24">
        <Typography variant="h4" className="">
          ReactTable
        </Typography>
        <Button
          variant="outlined"
          component="a"
          href="https://github.com/react-tools/react-table"
          target="_blank"
          role="button"
        >
          <Icon>link</Icon>
          <span className="mx-4">Reference</span>
        </Button>
      </div>

      <Typography className="mb-16" component="p">
        <code>react-table</code> is a lightweight, fast and extendable datagrid built for React.
      </Typography>

      <hr />

      <Typography className="text-32 mt-32 mb-8" component="h2">
        Example Usage
      </Typography>

      <FuseExample
        className="mb-64"
        component={require('./examples/simple.js').default}
        raw={require('!raw-loader!./examples/simple.js')}
      />

      <Typography className="text-32 mt-32 mb-8" component="h2">
        Enhanced examples
      </Typography>

      <Typography className="mt-32 mb-8" component="p">
        Checkout for enhanced examples at{' '}
        <a
          href="https://github.com/tannerlinsley/react-table/blob/master/docs/examples.md"
          target="_blank"
          rel="noopener noreferrer"
        >
          react-table docs
        </a>
      </Typography>

      <Typography className="text-32 mt-32 mb-8" component="h2">
        Demos
      </Typography>

      <ul>
        <li className="mb-8">
          <Link to="/apps/contacts">Contacts App</Link>
        </li>
      </ul>
    </>
  );
}

export default ReactTableDoc;
