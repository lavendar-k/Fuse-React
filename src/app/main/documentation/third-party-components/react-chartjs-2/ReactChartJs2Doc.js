/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
import FuseExample from '@fuse/core/FuseExample';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';

function ReactChartJs2Doc() {
  return (
    <>
      <div className="flex w-full items-center justify-between mb-24">
        <Typography variant="h4" className="">
          ReactChartJs2
        </Typography>
        <Button
          variant="outlined"
          component="a"
          href="https://github.com/jerairrest/react-chartjs-2"
          target="_blank"
          role="button"
        >
          <Icon>link</Icon>
          <span className="mx-4">Reference</span>
        </Button>
      </div>

      <Typography className="mb-16" component="p">
        <code>react-chartjs-2</code> is a React wrapper for Chart.js 2.
      </Typography>

      <hr />

      <Typography className="text-32 mt-32 mb-8" component="h2">
        Example Usages
      </Typography>

      <FuseExample
        className="mb-64"
        component={require('./examples/doughnut.js').default}
        raw={require('!raw-loader!./examples/doughnut.js')}
      />

      <FuseExample
        className="mb-64"
        component={require('./examples/dynamic-doughnut.js').default}
        raw={require('!raw-loader!./examples/dynamic-doughnut.js')}
      />

      <FuseExample
        className="mb-64"
        component={require('./examples/pie.js').default}
        raw={require('!raw-loader!./examples/pie.js')}
      />

      <FuseExample
        className="mb-64"
        component={require('./examples/line.js').default}
        raw={require('!raw-loader!./examples/line.js')}
      />

      <FuseExample
        className="mb-64"
        component={require('./examples/bar.js').default}
        raw={require('!raw-loader!./examples/bar.js')}
      />

      <FuseExample
        className="mb-64"
        component={require('./examples/horizontalBar.js').default}
        raw={require('!raw-loader!./examples/horizontalBar.js')}
      />

      <FuseExample
        className="mb-64"
        component={require('./examples/radar.js').default}
        raw={require('!raw-loader!./examples/radar.js')}
      />

      <FuseExample
        className="mb-64"
        component={require('./examples/polar.js').default}
        raw={require('!raw-loader!./examples/polar.js')}
      />

      <FuseExample
        className="mb-64"
        component={require('./examples/bubble.js').default}
        raw={require('!raw-loader!./examples/bubble.js')}
      />

      <FuseExample
        className="mb-64"
        component={require('./examples/scatter.js').default}
        raw={require('!raw-loader!./examples/scatter.js')}
      />

      <FuseExample
        className="mb-64"
        component={require('./examples/mix.js').default}
        raw={require('!raw-loader!./examples/mix.js')}
      />

      <FuseExample
        className="mb-64"
        component={require('./examples/randomizedLine.js').default}
        raw={require('!raw-loader!./examples/randomizedLine.js')}
      />

      <FuseExample
        className="mb-64"
        component={require('./examples/crazyLine.js').default}
        raw={require('!raw-loader!./examples/crazyLine.js')}
      />

      <FuseExample
        className="mb-64"
        component={require('./examples/legend-options.js').default}
        raw={require('!raw-loader!./examples/legend-options.js')}
      />

      <FuseExample
        className="mb-64"
        component={require('./examples/legend-handlers.js').default}
        raw={require('!raw-loader!./examples/legend-handlers.js')}
      />
    </>
  );
}

export default ReactChartJs2Doc;
