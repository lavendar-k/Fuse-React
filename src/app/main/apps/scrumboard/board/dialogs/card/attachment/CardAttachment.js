import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import format from 'date-fns/format';
import fromUnixTime from 'date-fns/fromUnixTime';
import { useState } from 'react';

function CardAttachment(props) {
  const [anchorEl, setAnchorEl] = useState(null);

  function handleMenuOpen(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleMenuClose() {
    setAnchorEl(null);
  }

  switch (props.item.type) {
    case 'image': {
      return (
        <div className="flex w-full sm:w-1/2 mb-16 px-16" key={props.item.id}>
          <div className="flex items-center justify-center min-w-128 w-128 h-128">
            <Paper className="overflow-hidden shadow">
              <img className="block max-h-full max-h-full" src={props.item.src} alt="attachment" />
            </Paper>
          </div>
          <div className="flex flex-auto flex-col justify-center items-start min-w-0 px-16">
            <div className="flex items-center w-full">
              <Typography className="text-16 font-semibold truncate flex-shrink">
                {props.item.name}
              </Typography>
              {props.card.idAttachmentCover === props.item.id && (
                <Icon className="text-orange-300 text-20 mx-4">star</Icon>
              )}
            </div>
            <Typography className="truncate w-full mb-12" color="textSecondary">
              {format(fromUnixTime(props.item.time), 'Pp')}
            </Typography>
            <Button
              aria-owns={anchorEl ? 'actions-menu' : null}
              aria-haspopup="true"
              onClick={handleMenuOpen}
              variant="outlined"
              size="small"
            >
              Actions
              <Icon className="text-20">arrow_drop_down</Icon>
            </Button>
            <Menu
              id="actions-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              {props.card.idAttachmentCover !== props.item.id ? (
                <MenuItem
                  onClick={() => {
                    handleMenuClose();
                    props.makeCover(props.item.id);
                  }}
                >
                  Make Cover
                </MenuItem>
              ) : (
                <MenuItem
                  onClick={() => {
                    handleMenuClose();
                    props.removeCover();
                  }}
                >
                  Remove Cover
                </MenuItem>
              )}
              <MenuItem
                onClick={() => {
                  handleMenuClose();
                  props.removeAttachment(props.item.id);
                }}
              >
                Remove Attachment
              </MenuItem>
            </Menu>
          </div>
        </div>
      );
    }
    case 'link': {
      return (
        <div className="flex w-full sm:w-1/2 mb-16 px-16" key={props.item.id}>
          <Paper className="min-w-128 w-128 h-128 flex items-center justify-center rounded-4 overflow-hidden shadow">
            <Typography className="font-semibold">LINK</Typography>
          </Paper>
          <div className="flex flex-auto flex-col justify-center items-start min-w-0 px-16">
            <Typography className="text-16 font-semibold truncate w-full">
              {props.item.url}
            </Typography>
            <Typography className="truncate w-full mb-12" color="textSecondary">
              {props.item.time}
            </Typography>
            <Button
              aria-owns={anchorEl ? 'actions-menu' : null}
              aria-haspopup="true"
              onClick={handleMenuOpen}
              variant="outlined"
              size="small"
            >
              Actions
              <Icon className="text-20">arrow_drop_down</Icon>
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem
                onClick={() => {
                  handleMenuClose();
                  props.removeAttachment(props.item.id);
                }}
              >
                Remove Attachment
              </MenuItem>
            </Menu>
          </div>
        </div>
      );
    }
    default: {
      return null;
    }
  }
}

export default CardAttachment;
