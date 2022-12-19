import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import format from 'date-fns/format';
import { memo, useEffect, useRef, useState } from 'react';

function WidgetNow() {
  const [time, setTime] = useState(new Date());
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(update, 1000);
    return () => {
      clearInterval(intervalRef.current);
    };
  });

  function update() {
    setTime(new Date());
  }

  return (
    <Paper className="w-full rounded-20 shadow flex flex-col justify-between">
      <div className="flex items-center justify-between px-4 pt-8">
        <Typography className="text-16 px-16 font-medium tracking-tighter" color="textSecondary">
          {format(time, 'eee, HH:mm:ss')}
        </Typography>
        <IconButton aria-label="more">
          <Icon>more_vert</Icon>
        </IconButton>
      </div>
      <div className="text-center px-20 pt-20 pb-32">
        <Typography className="text-24 leading-tight font-normal" color="textSecondary">
          {format(time, 'MMMM')}
        </Typography>
        <Typography
          className="text-72 leading-tight font-medium tracking-tighter"
          color="textSecondary"
        >
          {format(time, 'd')}
        </Typography>
        <Typography
          className="mt-8 text-20 leading-tight font-semibold tracking-tighter"
          color="textSecondary"
        >
          {format(time, 'Y')}
        </Typography>
      </div>
    </Paper>
  );
}

export default memo(WidgetNow);
