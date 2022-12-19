import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { memo } from 'react';

function Widget9(props) {
  return (
    <Card className="w-full rounded-20 shadow">
      <div className="px-8 py-20 flex flex-row items-start justify-between">
        <Typography className="h3 font-medium px-12">Top campaigns</Typography>

        <div className="-mt-12">
          <IconButton aria-label="more">
            <Icon>more_vert</Icon>
          </IconButton>
        </div>
      </div>

      <table className="simple clickable">
        <thead>
          <tr>
            <th aria-label="title" />
            <th className="text-right">
              <Typography color="textSecondary" className="font-semibold">
                Clicks
              </Typography>
            </th>
            <th className="text-right">
              <Typography color="textSecondary" className="font-semibold">
                Conv
              </Typography>
            </th>
          </tr>
        </thead>
        <tbody>
          {props.data.rows.map((row) => (
            <tr key={row.title}>
              <td className="font-semibold">{row.title}</td>
              <td className="text-right">{row.clicks}</td>
              <td className="text-right">{row.conversion}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <Divider className="card-divider w-full" />

      <div className="p-20 flex flex-row items-center">
        <Button variant="outlined">Go to campaigns</Button>
      </div>
    </Card>
  );
}

export default memo(Widget9);
