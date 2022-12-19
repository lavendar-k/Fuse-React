import FuseHighlight from '@fuse/core/FuseHighlight';
import Typography from '@material-ui/core/Typography';

function HerokuNotesDoc() {
  return (
    <>
      <Typography variant="h4" className="mb-24">
        HEROKU Notes
      </Typography>

      <Typography className="mb-16" component="p">
        You may encounter some issues if you want to deploy fuse-react to heroku, here is the
        solution:
      </Typography>

      <Typography className="mt-24 mb-8" variant="h6">
        We need to use the{' '}
        <a
          href="https://github.com/mars/create-react-app-buildpack#user-content-quick-start"
          target="_blank"
          rel="noreferrer noopener"
        >
          mars/create-react-app
        </a>{' '}
        buildpack:
      </Typography>

      <FuseHighlight component="pre" className="mb-24">
        {`
					heroku buildpacks:set mars/create-react-app
				`}
      </FuseHighlight>

      <Typography className="mb-16" component="p">
        the next build will be created with this official pack.
      </Typography>

      <Typography className="mt-24 mb-8" variant="h6">
        We need to install devDependencies:
      </Typography>

      <FuseHighlight component="pre" className="mb-24">
        {`
					heroku config:set NPM_CONFIG_PRODUCTION=false
				`}
      </FuseHighlight>

      <Typography className="mt-24 mb-8" variant="h6">
        push skeleton branch to master of heroku
      </Typography>

      <FuseHighlight component="pre" className="mb-24">
        {`
					git push heroku skeleton:master
				`}
      </FuseHighlight>
    </>
  );
}

export default HerokuNotesDoc;
