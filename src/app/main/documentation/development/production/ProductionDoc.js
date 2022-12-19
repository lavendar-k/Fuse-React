import FuseHighlight from '@fuse/core/FuseHighlight';
import Typography from '@material-ui/core/Typography';

function ProductionDoc() {
  return (
    <>
      <Typography variant="h4" className="mb-24">
        Production
      </Typography>

      <Typography className="mb-16" component="p">
        The following command builds the application into an output directory
      </Typography>

      <FuseHighlight component="pre" className="language-bash my-16">
        {`
                              yarn run build
                        `}
      </FuseHighlight>

      <Typography className="mb-16" component="p">
        compiles the application into <code>/build</code> directory
      </Typography>
    </>
  );
}

export default ProductionDoc;
