import Paper from '@material-ui/core/Paper';
import { useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { memo } from 'react';
import ReactApexChart from 'react-apexcharts';
import _ from '@lodash';

function Widget8(props) {
  const widget = _.merge({}, props.widget);
  const theme = useTheme();

  _.setWith(widget, 'mainChart.options.theme.monochrome.color', theme.palette.primary.main);

  return (
    <Paper className="w-full rounded-20 shadow">
      <div className="flex items-center justify-between p-20 h-64">
        <Typography className="text-16 font-medium">{widget.title}</Typography>
      </div>
      <div className="h-400 w-full">
        <ReactApexChart
          options={widget.mainChart.options}
          series={widget.mainChart.series}
          type={widget.mainChart.options.chart.type}
          height={widget.mainChart.options.chart.height}
        />
      </div>
    </Paper>
  );
}

export default memo(Widget8);
