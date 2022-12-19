import AppBar from '@material-ui/core/AppBar';
import Card from '@material-ui/core/Card';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import { useTheme } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';
import { memo, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import _ from '@lodash';

function Widget8(props) {
  const theme = useTheme();
  const [tabIndex, setTabIndex] = useState(0);
  const data = _.merge({}, props.data);

  _.setWith(data, 'options.colors', [theme.palette.secondary.main]);
  _.setWith(data, 'options.markers.strokeColor', theme.palette.background.default);

  return (
    <Card className="w-full rounded-20 shadow">
      <AppBar position="static" elevation={0}>
        <div className="px-8 py-20 flex flex-row items-start justify-between">
          <div className="px-12">
            <Typography className="h3 font-medium mb-4">Sales</Typography>
            <Typography className="h5" color="inherit">
              Lifetime sum of your sales
            </Typography>
          </div>

          <div className="-mt-12">
            <IconButton aria-label="more" color="inherit">
              <Icon>more_vert</Icon>
            </IconButton>
          </div>
        </div>
        <div className="p-16 pt-8 flex flex-row items-end">
          <Typography className="text-44 font-semibold leading-none" color="inherit">
            {data.today}
          </Typography>
          <div className="flex flex-col mx-8">
            {data.change.value > 0 && <Icon className="text-green text-20">trending_up</Icon>}
            {data.change.value < 0 && <Icon className="text-red text-20">trending_down</Icon>}
            <Typography className="font-semibold" color="textSecondary">
              {`${data.change.value}(${data.change.percentage}%)`}
            </Typography>
          </div>
        </div>
        <Tabs value={tabIndex} onChange={(ev, index) => setTabIndex(index)} variant="fullWidth">
          <Tab label="1Day" className="min-w-0" />
          <Tab label="1Week" className="min-w-0" />
          <Tab label="1Month" className="min-w-0" />
        </Tabs>
      </AppBar>
      <div className="py-16 h-200">
        <ReactApexChart
          options={data.options}
          series={data.series[tabIndex]}
          type={data.options.chart.type}
          height={data.options.chart.height}
        />
      </div>
    </Card>
  );
}

export default memo(Widget8);
