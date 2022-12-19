import FuseExample from '@fuse/core/FuseExample';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */

function ReactHookFormDoc() {
  return (
    <>
      <div className="flex w-full items-center justify-between mb-24">
        <Typography variant="h4" className="">
          React Hook Form
        </Typography>

        <Button
          variant="outlined"
          component="a"
          href="http://react-hook-form.com"
          target="_blank"
          role="button"
        >
          <Icon>link</Icon>
          <span className="mx-4">Reference</span>
        </Button>
      </div>
      <Typography className="mb-16" component="p">
        Performant, flexible and extensible forms with easy to use validation.
      </Typography>

      <hr />

      <Typography className="text-32 mt-32 mb-8" component="h2">
        Example Usages
      </Typography>

      <FuseExample
        className="mb-64"
        component={require('./examples/SimpleFormExample.js').default}
        raw={require('!raw-loader!./examples/SimpleFormExample.js')}
      />

      <Typography className="text-32 mt-32 mb-8" component="h2">
        Demos
      </Typography>

      <ul>
        <li className="mb-8">
          <Link to="/login">Login page</Link>
          <Link to="/register">Register page</Link>
        </li>
      </ul>
    </>
  );
}

export default ReactHookFormDoc;
