import Button from '@material-ui/core/Button';
import auth0Service from 'app/services/auth0Service';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUserDataAuth0 } from 'app/auth/store/userSlice';
import { showMessage } from 'app/store/fuse/messageSlice';

function Auth0LoginTab(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    showDialog();

    auth0Service.onAuthenticated(() => {
      dispatch(showMessage({ message: 'Logging in with Auth0' }));

      auth0Service.getUserData().then((tokenData) => {
        dispatch(setUserDataAuth0(tokenData));

        dispatch(showMessage({ message: 'Logged in with Auth0' }));
      });
    });
  }, [dispatch]);

  function showDialog() {
    auth0Service.login();
  }

  return (
    <div className="w-full">
      <Button className="w-full my-48" color="primary" variant="contained" onClick={showDialog}>
        Log In/Sign Up with Auth0
      </Button>
    </div>
  );
}

export default Auth0LoginTab;
