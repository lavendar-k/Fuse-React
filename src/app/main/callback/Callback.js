import FuseSplashScreen from '@fuse/core/FuseSplashScreen';
import auth0Service from 'app/services/auth0Service';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUserDataAuth0 } from 'app/auth/store/userSlice';
import { showMessage } from 'app/store/fuse/messageSlice';

function Callback(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    auth0Service.onAuthenticated(() => {
      dispatch(showMessage({ message: 'Logging in with Auth0' }));

      /**
       * Retrieve user data from Auth0
       */
      auth0Service.getUserData().then((tokenData) => {
        dispatch(setUserDataAuth0(tokenData));
        dispatch(showMessage({ message: 'Logged in with Auth0' }));
      });
    });
  }, [dispatch]);

  return <FuseSplashScreen />;
}

export default Callback;
