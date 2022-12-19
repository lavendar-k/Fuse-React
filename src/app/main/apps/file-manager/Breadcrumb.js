import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';

function Breadcrumb({ className, selected }) {
  const arr = selected.location.split('>');

  return (
    <Typography className={className}>
      {arr.map((path, index) => (
        <span key={index} className="flex items-center">
          <span>{path}</span>
          {arr.length - 1 !== index && <Icon>chevron_right</Icon>}
        </span>
      ))}
    </Typography>
  );
}

export default Breadcrumb;
