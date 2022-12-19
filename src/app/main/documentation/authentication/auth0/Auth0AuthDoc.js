import FuseHighlight from '@fuse/core/FuseHighlight';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

function Auth0AuthDoc() {
  return (
    <>
      <Typography variant="h4" className="mb-24">
        Auth0 Authentication Service Example
      </Typography>

      <Typography className="mb-16" component="p">
        With Auth0 Authentication in Fuse React.
      </Typography>

      <ul>
        <li className="mb-12">
          You can <Link to="/register">register</Link>.
        </li>
        <li className="mb-12">
          You can <Link to="/login">log in</Link>.
        </li>
        <li className="mb-12">
          Also saves user data (user shortcuts, layout, and theme settings) as user_metadata to
          Auth0 Database.
        </li>
      </ul>

      <Typography className="mt-32 mb-16" component="p">
        Related Service folder is located at <code>/src/auth0Service</code>
      </Typography>

      <Typography className="my-24 italic" component="p" color="textSecondary">
        Note: Make sure {`<Router>`} component wrapped with {`<Auth>`} component in
        <code>src/app/App.js</code>. The service initializes in the Auth component.
      </Typography>

      <Typography className="mt-32 mb-8" variant="h5">
        Configuration
      </Typography>

      <Typography className="mb-16" component="p">
        You need to paste the configuration of your Auth0 Project into
        <code>src/app/services/auth0Service/auth0ServiceConfig.js</code>
      </Typography>

      <FuseHighlight component="pre" className="language-jsx my-16">
        {`
                               export const AUTH_CONFIG = {
                                    domain     : "YOUR_DOMAIN",
                                    clientId   : "YOUR_CLIENT_ID",
                                    callbackUrl: "YOUR_DOMAIN/callback"
                               };
                            `}
      </FuseHighlight>
    </>
  );
}

export default Auth0AuthDoc;
