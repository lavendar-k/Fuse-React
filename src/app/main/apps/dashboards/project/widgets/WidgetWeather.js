import Divider from '@material-ui/core/Divider';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { memo } from 'react';

function WidgetWeather(props) {
  return (
    <Paper className="w-full rounded-20 shadow flex flex-col justify-between">
      <div className="flex items-center justify-between px-4 pt-8">
        <div className="flex items-center px-16">
          <Icon color="action">location_on</Icon>
          <Typography className="text-16 mx-8 font-medium" color="textSecondary">
            {props.widget.locations[props.widget.currentLocation].name}
          </Typography>
        </div>
        <IconButton aria-label="more">
          <Icon>more_vert</Icon>
        </IconButton>
      </div>
      <div className="flex items-center justify-center p-20 pb-32">
        <Icon className="meteocons text-40 ltr:mr-8 rtl:ml-8" color="action">
          {props.widget.locations[props.widget.currentLocation].icon}
        </Icon>
        <Typography className="text-44 mx-8 font-medium tracking-tighter" color="textSecondary">
          {props.widget.locations[props.widget.currentLocation].temp[props.widget.tempUnit]}
        </Typography>
        <Typography className="text-48" color="textSecondary">
          °
        </Typography>
        <Typography className="text-44" color="textSecondary">
          C
        </Typography>
      </div>
      <Divider />
      <div className="flex justify-between items-center p-16">
        <div className="flex items-center">
          <Icon className="meteocons text-14" color="action">
            windy
          </Icon>
          <Typography className="mx-4 font-semibold">
            {props.widget.locations[props.widget.currentLocation].windSpeed[props.widget.speedUnit]}
          </Typography>
          <Typography color="textSecondary">{props.widget.speedUnit}</Typography>
        </div>

        <div className="flex items-center">
          <Icon className="meteocons text-14" color="action">
            compass
          </Icon>
          <Typography className="mx-4 font-semibold">
            {props.widget.locations[props.widget.currentLocation].windDirection}
          </Typography>
        </div>

        <div className="flex items-center">
          <Icon className="meteocons text-14" color="action">
            rainy
          </Icon>
          <Typography className="mx-4 font-semibold">
            {props.widget.locations[props.widget.currentLocation].rainProbability}
          </Typography>
        </div>
      </div>
      <Divider />
      <div className="w-full py-16">
        {props.widget.locations[props.widget.currentLocation].next5Days.map((day) => (
          <div className="flex items-center justify-between w-full py-16 px-24" key={day.name}>
            <Typography className="text-15 font-medium">{day.name}</Typography>
            <div className="flex items-center">
              <Icon className="meteocons text-24 ltr:mr-16 rtl:ml-16" color="action">
                {day.icon}
              </Icon>
              <Typography className="text-20 font-medium tracking-tighter">
                {day.temp[props.widget.tempUnit]}
              </Typography>
              <Typography className="text-20" color="textSecondary">
                &deg;
              </Typography>
              <Typography className="text-20" color="textSecondary">
                {props.widget.tempUnit}
              </Typography>
            </div>
          </div>
        ))}
      </div>
    </Paper>
  );
}

export default memo(WidgetWeather);
