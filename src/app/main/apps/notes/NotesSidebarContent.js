import NavLinkAdapter from '@fuse/core/NavLinkAdapter';
import Divider from '@material-ui/core/Divider';
import Icon from '@material-ui/core/Icon';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { openLabelsDialog, selectLabels } from './store/labelsSlice';

const useStyles = makeStyles((theme) => ({
  paper: {
    [theme.breakpoints.down('md')]: {
      boxShadow: 'none',
    },
  },
  listItem: {
    color: 'inherit!important',
    textDecoration: 'none!important',
    height: 40,
    width: '100%',
    borderRadius: 6,
    paddingLeft: 12,
    paddingRight: 12,
    marginBottom: 4,
    '&.active': {
      backgroundColor:
        theme.palette.type === 'light'
          ? 'rgba(0, 0, 0, .05)!important'
          : 'rgba(255, 255, 255, .1)!important',
      pointerEvents: 'none',
      '& .list-item-icon': {
        color: 'inherit',
      },
    },
    '& .list-item-icon': {
      fontSize: 16,
      width: 16,
      height: 16,
      marginRight: 16,
    },
  },
}));

function NotesSidebarContent(props) {
  const dispatch = useDispatch();
  const labels = useSelector(selectLabels);

  const classes = useStyles(props);

  return (
    <div className="p-0 lg:p-24 lg:ltr:pr-4 lg:rtl:pl-4">
      <Paper
        component={motion.div}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition: { delay: 0.2 } }}
        className={clsx(classes.paper, 'rounded-0 shadow-none lg:rounded-20 lg:shadow pt-12')}
      >
        <List className="px-12">
          <ListItem
            button
            component={NavLinkAdapter}
            to="/apps/notes"
            exact
            activeClassName="active"
            className={classes.listItem}
          >
            <Icon className="list-item-icon text-16" color="action">
              label
            </Icon>
            <ListItemText className="truncate" primary="Notes" disableTypography />
          </ListItem>
          <ListItem
            button
            component={NavLinkAdapter}
            to="/apps/notes/reminders"
            exact
            activeClassName="active"
            className={classes.listItem}
          >
            <Icon className="list-item-icon text-16" color="action">
              notifications
            </Icon>
            <ListItemText className="truncate" primary="Reminders" disableTypography />
          </ListItem>
        </List>
        <Divider />
        <List className="px-12">
          <ListSubheader>Labels</ListSubheader>
          {labels.map((label) => (
            <ListItem
              key={label.id}
              button
              component={NavLinkAdapter}
              to={`/apps/notes/labels/${label.handle}/${label.id}`}
              exact
              activeClassName="active"
              className={classes.listItem}
            >
              <Icon className="list-item-icon text-16" color="action">
                label
              </Icon>
              <ListItemText className="truncate" primary={label.name} disableTypography />
            </ListItem>
          ))}
          <ListItem
            button
            className={classes.listItem}
            onClick={(ev) => dispatch(openLabelsDialog())}
          >
            <Icon className="list-item-icon text-16" color="action">
              edit
            </Icon>
            <ListItemText className="truncate" primary="Edit Labels" disableTypography />
          </ListItem>
        </List>
        <Divider />
        <List className="px-12">
          <ListItem
            button
            component={NavLinkAdapter}
            to="/apps/notes/archive"
            activeClassName="active"
            className={classes.listItem}
          >
            <Icon className="list-item-icon text-16" color="action">
              archive
            </Icon>
            <ListItemText className="truncate" primary="Archive" disableTypography />
          </ListItem>
        </List>
      </Paper>
    </div>
  );
}

export default NotesSidebarContent;
