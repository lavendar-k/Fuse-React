import _ from '@lodash';
import Avatar from '@material-ui/core/Avatar';
import Checkbox from '@material-ui/core/Checkbox';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter, useParams } from 'react-router-dom';
import MailChip from '../MailChip';
import { toggleInSelectedMails } from '../store/mailsSlice';
import { selectLabelsEntities } from '../store/labelsSlice';

const pathToRegexp = require('path-to-regexp');

const useStyles = makeStyles((theme) => ({
  mailItem: {
    '&.unread': {
      background: 'rgba(0,0,0,0.03)',
    },
    '&.selected': {
      '&::after': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        display: 'block',
        height: '100%',
        width: 3,
        backgroundColor: theme.palette.primary.main,
      },
    },
  },
  avatar: {
    backgroundColor: theme.palette.primary[500],
  },
}));

const MailListItem = (props) => {
  const dispatch = useDispatch();
  const selectedMailIds = useSelector(({ mailApp }) => mailApp.mails.selectedMailIds);
  const labels = useSelector(selectLabelsEntities);
  const routeParams = useParams();

  const classes = useStyles(props);
  const toPath = pathToRegexp.compile(props.match.path);
  const checked =
    selectedMailIds.length > 0 && selectedMailIds.find((id) => id === props.mail.id) !== undefined;

  return (
    <ListItem
      dense
      button
      onClick={() =>
        props.history.push(
          toPath({
            ...routeParams,
            mailId: props.mail.id,
          })
        )
      }
      className={clsx(
        classes.mailItem,
        checked && 'selected',
        !props.mail.read && 'unread',
        'items-start py-20 px-0 md:px-8 relative'
      )}
    >
      <div className="flex flex-col sm:flex-row items-center justify-start">
        <Checkbox
          tabIndex={-1}
          disableRipple
          checked={checked}
          onChange={() => dispatch(toggleInSelectedMails(props.mail.id))}
          onClick={(ev) => ev.stopPropagation()}
        />

        <div className="px-8 order-first sm:order-none">
          {props.mail.from.avatar ? (
            <Avatar alt={props.mail.from.name} src={props.mail.from.avatar} />
          ) : (
            <Avatar className={classes.avatar}>{props.mail.from.name[0]}</Avatar>
          )}
        </div>
      </div>

      <div className="flex flex-1 flex-col relative overflow-hidden px-8">
        <Typography className="font-medium">{props.mail.from.name}</Typography>

        <div className="flex flex-col py-4">
          <Typography className="truncate text-14 pb-2">{props.mail.subject}</Typography>
          <Typography color="textSecondary" className="truncate">
            {_.truncate(props.mail.message.replace(/<(?:.|\n)*?>/gm, ''), { length: 180 })}
          </Typography>
        </div>

        <div className="flex -mx-2">
          {!_.isEmpty(labels) &&
            props.mail.labels.map((label) => (
              <MailChip
                className="mx-2 mt-4"
                title={labels[label].title}
                color={labels[label].color}
                key={label}
              />
            ))}
        </div>
      </div>

      <div className="px-8">
        <Typography className="text-12" color="textSecondary">
          {props.mail.time}
        </Typography>
      </div>
    </ListItem>
  );
};

export default withRouter(MailListItem);
