import FuseCountdown from '@fuse/core/FuseCountdown';
import FuseHighlight from '@fuse/core/FuseHighlight';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

function FuseCountdownDoc() {
  return (
    <>
      <Typography variant="h4" className="mb-24">
        FuseCountdown
      </Typography>

      <Typography className="mb-16" component="p">
        <code>FuseCountdown</code> is a custom-built Fuse component that allows you to create
        countdowns.
      </Typography>

      <Typography className="mt-32 mb-8" variant="h5">
        Usage
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {`
                              <FuseCountdown endDate="2020-07-28" className="my-48"/>
                            `}
      </FuseHighlight>

      <Typography className="mt-32 mb-8" variant="h5">
        Preview
      </Typography>

      <FuseCountdown endDate="2020-07-28" className="my-48" />

      <Typography className="mt-32 mb-8" variant="h5">
        Demos
      </Typography>

      <ul>
        <li className="mb-8">
          <Link to="/pages/coming-soon">Coming Soon</Link>
        </li>
      </ul>
    </>
  );
}

export default FuseCountdownDoc;
