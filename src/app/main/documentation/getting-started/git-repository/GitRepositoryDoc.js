import Typography from '@material-ui/core/Typography';

function GitRepositoryDoc() {
  return (
    <>
      <Typography variant="h4" className="mb-24">
        Github Repository
      </Typography>

      <Typography className="mb-16" component="p">
        You can also check out Fuse React from the Github repository. Fuse React's Github repository
        is private, you can get an invitation by filling the{' '}
        <a href="http://support.withinpixels.com/github" target="_blank" rel="noreferrer noopener">
          invitation form
        </a>
        .
      </Typography>
    </>
  );
}

export default GitRepositoryDoc;
