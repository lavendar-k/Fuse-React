import FuseHighlight from '@fuse/core/FuseHighlight';
import Typography from '@material-ui/core/Typography';

function DevelopmentServerDoc() {
  return (
    <>
      <Typography variant="h4" className="mb-24">
        Development Server
      </Typography>

      <Typography className="mb-16" component="p">
        While still in your work folder, run the following command in the console application:
      </Typography>

      <FuseHighlight component="pre" className="language-bash my-16">
        {`
                              yarn start
                        `}
      </FuseHighlight>

      <Typography className="mb-16" component="p">
        And that's it. create-react-app will take care of everything and start the Fuse React.
      </Typography>

      <Typography className="mb-16" component="p">
        You can check out your console application to get further information about the server. By
        default, it will run on <b>http://localhost:3000</b> but it might change depending on your
        setup.
      </Typography>
    </>
  );
}

export default DevelopmentServerDoc;
