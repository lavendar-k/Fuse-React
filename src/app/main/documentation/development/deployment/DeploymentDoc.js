import Typography from '@material-ui/core/Typography';

function DeploymentDoc() {
  return (
    <>
      <Typography variant="h4" className="mb-24">
        Deployment
      </Typography>

      <Typography className="mb-16" component="p">
        You may have issues when refreshing the app URL. If so, you need to configure server
        settings.
      </Typography>

      <Typography className="mb-16" component="p">
        Checkout deployment settings at Facebook's create-react-app documentation:
        <a
          href="https://facebook.github.io/create-react-app/docs/deployment"
          target="_blank"
          rel="noreferrer noopener"
          className="ml-4"
        >
          Deployment
        </a>
      </Typography>
    </>
  );
}

export default DeploymentDoc;
