import NavLinkAdapter from '@fuse/core/NavLinkAdapter';
import Collapse from '@material-ui/core/Collapse';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import { alpha } from '@material-ui/core/styles/colorManipulator';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { useEffect, useState, useMemo } from 'react';
import { useLocation } from 'react-router-dom';

import FuseNavBadge from '../../FuseNavBadge';
import FuseNavItem from '../../FuseNavItem';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 0,
    '&.open': {},
  },
  item: (props) => ({
    height: 40,
    width: '100%',
    borderRadius: '6px',
    margin: '0 0 4px 0',
    paddingRight: 12,
    paddingLeft: props.itemPadding > 80 ? 80 : props.itemPadding,
    color: alpha(theme.palette.text.primary, 0.7),
    '&:hover': {
      color: theme.palette.text.primary,
    },
    '& .fuse-list-item-icon': {
      marginRight: 12,
      color: 'inherit',
    },
  }),
}));

function needsToBeOpened(location, item) {
  return location && isUrlInChildren(item, location.pathname);
}

function isUrlInChildren(parent, url) {
  if (!parent.children) {
    return false;
  }

  for (let i = 0; i < parent.children.length; i += 1) {
    if (parent.children[i].children) {
      if (isUrlInChildren(parent.children[i], url)) {
        return true;
      }
    }

    if (parent.children[i].url === url || url.includes(parent.children[i].url)) {
      return true;
    }
  }

  return false;
}

function FuseNavVerticalCollapse(props) {
  const [open, setOpen] = useState(() => needsToBeOpened(props.location, props.item));
  const { item, nestedLevel, onItemClick } = props;
  const classes = useStyles({
    itemPadding: nestedLevel > 0 ? 28 + nestedLevel * 16 : 12,
  });
  const location = useLocation();

  useEffect(() => {
    if (needsToBeOpened(location, props.item)) {
      if (!open) {
        setOpen(true);
      }
    }
    // eslint-disable-next-line
	}, [location, props.item]);

  return useMemo(
    () => (
      <ul className={clsx(classes.root, open && 'open')}>
        <ListItem
          button
          className={clsx(classes.item, 'fuse-list-item')}
          onClick={() => setOpen(!open)}
          component={item.url ? NavLinkAdapter : 'li'}
          to={item.url}
          role="button"
        >
          {item.icon && (
            <Icon
              className={clsx('fuse-list-item-icon text-20 flex-shrink-0', item.iconClass)}
              color="action"
            >
              {item.icon}
            </Icon>
          )}

          <ListItemText
            className="fuse-list-item-text"
            primary={item.title}
            classes={{ primary: 'text-13 font-medium' }}
          />

          {item.badge && <FuseNavBadge className="mx-4" badge={item.badge} />}

          <IconButton
            disableRipple
            className="w-40 h-40 -mx-12 p-0 focus:bg-transparent hover:bg-transparent"
            onClick={(ev) => ev.preventDefault()}
          >
            <Icon className="text-16 arrow-icon" color="inherit">
              {open ? 'expand_less' : 'expand_more'}
            </Icon>
          </IconButton>
        </ListItem>

        {item.children && (
          <Collapse in={open} className="collapse-children">
            {item.children.map((_item) => (
              <FuseNavItem
                key={_item.id}
                type={`vertical-${_item.type}`}
                item={_item}
                nestedLevel={nestedLevel + 1}
                onItemClick={onItemClick}
              />
            ))}
          </Collapse>
        )}
      </ul>
    ),
    [
      classes.item,
      classes.root,
      item.badge,
      item.children,
      item.icon,
      item.iconClass,
      item.title,
      item.url,
      nestedLevel,
      onItemClick,
      open,
    ]
  );
}

FuseNavVerticalCollapse.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string,
    icon: PropTypes.string,
    children: PropTypes.array,
  }),
};
FuseNavVerticalCollapse.defaultProps = {};

const NavVerticalCollapse = FuseNavVerticalCollapse;

export default NavVerticalCollapse;
