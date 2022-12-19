import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

function JwtAuthDoc() {
  return (
    <>
      <Typography variant="h4" className="mb-24">
        JWT Authentication Service Example
      </Typography>

      <Typography className="mb-16" component="p">
        With JWT Authentication Service in Fuse React.
      </Typography>

      <ul>
        <li className="mb-12">
          You can <Link to="/register">register</Link>.
        </li>
        <li className="mb-12">
          You can <Link to="/login">log in</Link>.
        </li>
        <li className="mb-12">
          Also saves user data (user shortcuts, layout, and theme settings) to db.
        </li>
      </ul>

      <Typography className="mt-32 mb-16" component="p">
        Related Service folder is located at <code>/src/app/services/jwtService</code>
      </Typography>

      <Typography className="my-24 italic" component="p" color="textSecondary">
        Note: Make sure {`<Router>`} component wrapped with {`<Auth>`} component in
        <code>src/app/App.js</code>. The service initializes in the Auth component.
      </Typography>

      <Typography className="my-24 italic" component="p" color="textSecondary">
        Important: We don't give you any backend code. We are demonstrating the usage with
        <code>@fake-db</code> (which is works with https requests as real).
      </Typography>
    </>
  );
}

export default JwtAuthDoc;
