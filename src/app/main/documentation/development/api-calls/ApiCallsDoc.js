import Typography from '@material-ui/core/Typography';
import FuseHighlight from '@fuse/core/FuseHighlight';

function ApiCallsDoc() {
  return (
    <>
      <Typography variant="h4" className="mb-24">
        API Calls
      </Typography>

      <Typography className="mb-24" component="p">
        We are using HTTP request library{' '}
        <a href="https://github.com/axios" target="_blank" rel="noreferrer noopener">
          Axios
        </a>{' '}
        for to make API calls.
      </Typography>

      <Typography className="mb-8" variant="h6">
        Global Axios defaults
      </Typography>

      <Typography className="mb-16" component="p">
        You can config global axios defaults as below. For example you can define baseUrl for the
        api connection. Check out for more detils at:{' '}
        <a
          href="https://github.com/axios/axios#config-defaults"
          target="_blank"
          rel="noreferrer noopener"
        >
          Global axios defaults
        </a>
      </Typography>

      <FuseHighlight component="pre" className="language-js">
        {`
					axios.defaults.baseURL = 'https://api.example.com';
					axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
					axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
				`}
      </FuseHighlight>

      <Typography className="mt-32 mb-8" variant="h5">
        @fake-db
      </Typography>
      <Typography className="mb-16" component="p">
        We are using{' '}
        <a
          href="https://github.com/ctimmerm/axios-mock-adapter"
          target="_blank"
          rel="noreferrer noopener"
        >
          axios-mock-adapter
        </a>{' '}
        to demonstrate http requests, all of the example backend data is located at src/@fake-db.
      </Typography>

      <Typography className="mb-16" component="p">
        You can adjust <code>delayResponse</code> value to test slow networks in the file:{' '}
        <code>src/@fake-db/mock.js</code>.
      </Typography>

      <FuseHighlight component="pre" className="language-js">
        {`
					const MockAdapter = require('axios-mock-adapter');
					const axios = require('axios');
					
					const mock = new MockAdapter(axios, { delayResponse: 500 });
					
					export default mock;
				`}
      </FuseHighlight>
    </>
  );
}

export default ApiCallsDoc;
