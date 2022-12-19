import FuseHighlight from '@fuse/core/FuseHighlight';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useDispatch } from 'react-redux';
import { showMessage } from 'app/store/fuse/messageSlice';

function FuseMessageDoc(props) {
  const dispatch = useDispatch();

  return (
    <>
      <Typography variant="h4" className="mb-24">
        FuseMessage
      </Typography>

      <Typography className="mb-16" component="p">
        <code>FuseMessage</code> is a simple snackbar trigger for easily showing messages via redux
        action. It should be located in the theme layouts.
      </Typography>

      <Typography className="mt-32 mb-8" variant="h5">
        Usage
      </Typography>

      <Typography className="mb-16" component="p">
        You can show messages anywhere with dispatching the action showMessage, it is using
        Material-UI's snackbar so you can pass the props in the object:
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {`
                                    <Button 
                                        onClick={()=> dispatch(
                                            showMessage({
                                                message     : 'Hi, how are you?',//text or html
                                                autoHideDuration: 6000,//ms
                                                anchorOrigin: {
                                                    vertical  : 'top',//top bottom
                                                    horizontal: 'right'//left center right
                                                },
                                                variant: 'success'//success error info warning null
                                            }))}
                                    >
                                        Top - Right
                                    </Button>
                            `}
      </FuseHighlight>

      <Typography className="mt-32 mb-8" variant="h5">
        Example
      </Typography>

      <Typography className="mt-32 mb-8" variant="h6">
        Position
      </Typography>

      <div>
        <Button
          onClick={() =>
            dispatch(
              showMessage({
                message: 'Hi, how are you?',
                anchorOrigin: {
                  vertical: 'top',
                  horizontal: 'right',
                },
              })
            )
          }
        >
          Top - Right
        </Button>
        <Button
          onClick={() =>
            dispatch(
              showMessage({
                message: 'Hi, how are you?',
                anchorOrigin: {
                  vertical: 'top',
                  horizontal: 'center',
                },
              })
            )
          }
        >
          Top-Center
        </Button>
        <Button
          onClick={() =>
            dispatch(
              showMessage({
                message: 'Hi, how are you?',
                anchorOrigin: {
                  vertical: 'top',
                  horizontal: 'left',
                },
              })
            )
          }
        >
          Top-Left
        </Button>
        <Button
          onClick={() =>
            dispatch(
              showMessage({
                message: 'Hi, how are you?',
                anchorOrigin: {
                  vertical: 'bottom',
                  horizontal: 'right',
                },
              })
            )
          }
        >
          Bottom-Right
        </Button>
        <Button
          onClick={() =>
            dispatch(
              showMessage({
                message: 'Hi, how are you?',
                anchorOrigin: {
                  vertical: 'bottom',
                  horizontal: 'center',
                },
              })
            )
          }
        >
          Bottom-Center
        </Button>
        <Button
          onClick={() =>
            dispatch(
              showMessage({
                message: 'Hi, how are you?',
                anchorOrigin: {
                  vertical: 'bottom',
                  horizontal: 'left',
                },
              })
            )
          }
        >
          Bottom-Left
        </Button>
      </div>

      <Typography className="mt-32 mb-8" variant="h6">
        Variants
      </Typography>

      <div>
        <Button
          onClick={() =>
            dispatch(
              showMessage({
                message: 'Hi, how are you?',
              })
            )
          }
        >
          Default
        </Button>
        <Button
          onClick={() =>
            dispatch(
              showMessage({
                message: 'Hi, how are you?',
                variant: 'success',
              })
            )
          }
        >
          Success
        </Button>
        <Button
          onClick={() =>
            dispatch(
              showMessage({
                message: 'Hi, how are you?',
                variant: 'warning',
              })
            )
          }
        >
          Warning
        </Button>
        <Button
          onClick={() =>
            dispatch(
              showMessage({
                message: 'Hi, how are you?',
                variant: 'error',
              })
            )
          }
        >
          Error
        </Button>
        <Button
          onClick={() =>
            dispatch(
              showMessage({
                message: 'Hi, how are you?',
                variant: 'info',
              })
            )
          }
        >
          Info
        </Button>
      </div>
    </>
  );
}

export default FuseMessageDoc;
