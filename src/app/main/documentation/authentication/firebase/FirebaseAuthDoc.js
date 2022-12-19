import FuseHighlight from '@fuse/core/FuseHighlight';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

function FirebaseAuthDoc() {
  return (
    <>
      <Typography variant="h4" className="mb-24">
        Firebase Authentication Service Example
      </Typography>

      <Typography className="mb-16" component="p">
        With Firebase Authentication in Fuse React.
      </Typography>

      <ul>
        <li className="mb-12">
          You can <Link to="/register">register</Link>.
        </li>
        <li className="mb-12">
          You can <Link to="/login">log in</Link>.
        </li>
        <li className="mb-12">
          Also saves user data (user shortcuts, layout, and theme settings) to FirebaseDb.
        </li>
      </ul>

      <Typography className="mt-32 mb-16" component="p">
        Related Service folder is located at <code>/src/firebaseService</code>
      </Typography>

      <Typography className="my-24 italic" component="p" color="textSecondary">
        Note: Make sure {`<Router>`} component wrapped with {`<Auth>`} component in
        <code>src/app/App.js</code>. The service initializes in the Auth component.
      </Typography>

      <Typography className="mt-32 mb-8" variant="h5">
        Configuration
      </Typography>

      <Typography className="mb-16" component="p">
        You need to paste the configuration of your Firebase Project into
        <code>src/app/services/firebaseService/firebaseServiceConfig.js</code>
      </Typography>

      <FuseHighlight component="pre" className="language-jsx my-16">
        {`
                                const prodConfig = {
                                    apiKey           : "YOUR_API_KEY",
                                    authDomain       : "your-app.firebaseapp.com",
                                    databaseURL      : "https://your-app.firebaseio.com",
                                    projectId        : "your-app",
                                    storageBucket    : "your-app.appspot.com",
                                    messagingSenderId: "YOUR_MESSAGING_SENDER_ID"
                                };

                                const devConfig = {
                                    apiKey           : "YOUR_API_KEY",
                                    authDomain       : "your-app.firebaseapp.com",
                                    databaseURL      : "https://your-app.firebaseio.com",
                                    projectId        : "your-app",
                                    storageBucket    : "your-app.appspot.com",
                                    messagingSenderId: "YOUR_MESSAGING_SENDER_ID"
                                };
                            `}
      </FuseHighlight>
    </>
  );
}

export default FirebaseAuthDoc;
