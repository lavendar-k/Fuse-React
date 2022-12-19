import FuseHighlight from '@fuse/core/FuseHighlight';
import Typography from '@material-ui/core/Typography';

function FuseHighlightDoc() {
  return (
    <>
      <Typography variant="h4" className="mb-24">
        FuseHighlight
      </Typography>

      <Typography className="mb-16" component="p">
        <code>FuseHighlight</code> is a custom-built Fuse component allows us to show syntax
        highlighted codes with
        <a href="http://prismjs.com/" target="_blank" rel="noopener noreferrer" className="ml-8">
          PrismJS
        </a>
        .
      </Typography>

      <Typography className="mt-32 mb-8" variant="h5">
        Usage
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {`
                                 <FuseHighlight component="pre" className="language-html">
                                   <div className="title">
                                        <span>Example Title</span>
                                    </div>
                                 </FuseHighlight>
                                `}
      </FuseHighlight>

      <Typography className="mt-32 mb-8" variant="h5">
        Preview
      </Typography>

      <FuseHighlight component="pre" className="language-html">
        {`
                            <div className="title">
                                <span>Example Title</span>
                            </div>
                            `}
      </FuseHighlight>
    </>
  );
}

export default FuseHighlightDoc;
