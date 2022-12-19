import _ from '@lodash';
import Divider from '@material-ui/core/Divider';
import { alpha } from '@material-ui/core/styles/colorManipulator';
import { makeStyles, ThemeProvider, useTheme } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { memo, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { useSelector } from 'react-redux';
import { selectContrastMainTheme } from 'app/store/fuse/settingsSlice';

const useStyles = makeStyles((theme) => ({
  root: {
    background: `linear-gradient(to right, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
    color: theme.palette.primary.contrastText,
  },
}));

function Widget1(props) {
  const classes = useStyles(props);
  const theme = useTheme();
  const contrastTheme = useSelector(selectContrastMainTheme(theme.palette.primary.main));
  const data = _.merge({}, props.data);

  const [tabValue, setTabValue] = useState(2);
  const series = data.series[Object.keys(data.series)[tabValue]];

  _.setWith(data, 'options.fill.colors', [theme.palette.secondary.main]);
  _.setWith(data, 'options.markers.colors', [theme.palette.secondary.main]);
  _.setWith(data, 'options.stroke.colors', [theme.palette.primary.contrastText]);
  _.setWith(data, 'options.markers.strokeColors', [theme.palette.primary.contrastText]);
  _.setWith(data, 'options.grid.borderColor', alpha(theme.palette.primary.contrastText, 0.3));

  return (
    <ThemeProvider theme={contrastTheme}>
      <div className={clsx(classes.root)}>
        <div className="container relative p-16 sm:p-24 flex flex-col sm:flex-row justify-between items-center">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="flex flex-col items-center sm:items-start mb-16 sm:mb-0">
              <Typography className="h2 font-medium" color="textPrimary">
                Visitors
              </Typography>
              <Typography className="h5" color="textSecondary">
                Unique visitors by month
              </Typography>
            </div>
          </motion.div>

          <div className="flex flex-row items-center">
            <Tabs
              value={tabValue}
              onChange={(event, value) => setTabValue(value)}
              indicatorColor="secondary"
              textColor="inherit"
              variant="scrollable"
              scrollButtons="off"
              className="w-full -mx-4 min-h-40"
              classes={{ indicator: 'flex justify-center bg-transparent w-full h-full' }}
              TabIndicatorProps={{
                children: <Divider className="w-full h-full rounded-full opacity-50" />,
              }}
            >
              {Object.keys(data.series).map((key) => (
                <Tab
                  key={key}
                  className="text-14 font-semibold min-h-40 min-w-64 mx-4 capitalize"
                  disableRipple
                  label={key}
                />
              ))}
            </Tabs>
          </div>
        </div>
        <div className="container relative h-200 sm:h-256 pb-16">
          <ReactApexChart
            options={data.options}
            series={series}
            type={data.options.chart.type}
            height={data.options.chart.height}
          />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default memo(Widget1);
