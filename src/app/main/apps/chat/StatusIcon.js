import Icon from '@material-ui/core/Icon';

function StatusIcon(props) {
  switch (props.status) {
    case 'online':
      return <Icon className="block text-16 text-green bg-white rounded-full">check_circle</Icon>;
    case 'away':
      return (
        <Icon className="block text-16 text-white bg-yellow-700 rounded-full">access_time</Icon>
      );
    case 'do-not-disturb':
      return (
        <Icon className="block text-16 text-red bg-white rounded-full">remove_circle_outline</Icon>
      );
    case 'offline':
      return (
        <Icon className="block text-16 text-grey-700 bg-white rounded-full">not_interested</Icon>
      );
    default:
      return null;
  }
}

export default StatusIcon;
