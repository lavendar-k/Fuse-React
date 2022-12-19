import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';
import { memo, useState } from 'react';

function Widget7(props) {
  const [currentRange, setCurrentRange] = useState(props.widget.currentRange);

  function handleChangeRange(ev) {
    setCurrentRange(ev.target.value);
  }

  return (
    <Paper className="w-full rounded-20 shadow">
      <div className="flex items-center justify-between p-20 h-64 ">
        <Typography className="text-16 font-medium">{props.widget.title}</Typography>

        <Select
          native
          value={currentRange}
          onChange={handleChangeRange}
          inputProps={{
            name: 'currentRange',
          }}
          className="font-medium opacity-75"
          disableUnderline
        >
          {Object.entries(props.widget.ranges).map(([key, n]) => {
            return (
              <option key={key} value={key}>
                {n}
              </option>
            );
          })}
        </Select>
      </div>
      <List className="py-0">
        {props.widget.schedule[currentRange].map((item) => (
          <ListItem key={item.id}>
            <ListItemText
              classes={{ root: 'px-8', primary: 'font-medium text-16' }}
              primary={item.title}
              secondary={item.time}
            />
            <ListItemSecondaryAction>
              <IconButton aria-label="more">
                <Icon>more_vert</Icon>
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}

export default memo(Widget7);
