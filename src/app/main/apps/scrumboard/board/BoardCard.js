import _ from '@lodash';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import Icon from '@material-ui/core/Icon';
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import format from 'date-fns/format';
import fromUnixTime from 'date-fns/fromUnixTime';
import getUnixTime from 'date-fns/getUnixTime';
import { Draggable } from 'react-beautiful-dnd';
import { useDispatch, useSelector } from 'react-redux';
import { openCardDialog } from '../store/cardSlice';

const useStyles = makeStyles((theme) => ({
  card: {
    transitionProperty: 'box-shadow',
    transitionDuration: theme.transitions.duration.short,
    transitionTimingFunction: theme.transitions.easing.easeInOut,
  },
}));

function BoardCard(props) {
  const dispatch = useDispatch();
  const board = useSelector(({ scrumboardApp }) => scrumboardApp.board);

  const classes = useStyles(props);
  const { cardId, index } = props;
  const card = _.find(board.cards, { id: cardId });
  const checkItemsChecked = getCheckItemsChecked(card);
  const checkItems = getCheckItems(card);
  const commentsCount = getCommentsCount(card);

  function handleCardClick(ev, _card) {
    ev.preventDefault();
    dispatch(openCardDialog(_card));
  }

  function getCheckItemsChecked(_card) {
    return _.sum(
      _card.checklists.map((list) => _.sum(list.checkItems.map((x) => (x.checked ? 1 : 0))))
    );
  }

  function getCheckItems(_card) {
    return _.sum(_card.checklists.map((x) => x.checkItems.length));
  }

  function getCommentsCount(_card) {
    return _.sum(_card.activities.map((x) => (x.type === 'comment' ? 1 : 0)));
  }

  return (
    <Draggable draggableId={cardId} index={index} type="card">
      {(provided, snapshot) => (
        <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
          <Card
            className={clsx(
              classes.card,
              snapshot.isDragging ? 'shadow-lg' : 'shadow-0',
              'w-full mb-16 rounded-16 cursor-pointer border-1'
            )}
            onClick={(ev) => handleCardClick(ev, card)}
          >
            {board.settings.cardCoverImages && card.idAttachmentCover !== '' && (
              <img
                className="block"
                src={_.find(card.attachments, { id: card.idAttachmentCover }).src}
                alt="card cover"
              />
            )}

            <div className="p-16 pb-0">
              {card.idLabels.length > 0 && (
                <div className="flex flex-wrap mb-8 -mx-4">
                  {card.idLabels.map((id) => {
                    const label = _.find(board.labels, { id });
                    return (
                      <Tooltip title={label.name} key={id}>
                        <div className={clsx(label.class, 'w-32  h-6 rounded-6 mx-4 mb-6')} />
                      </Tooltip>
                    );
                  })}
                </div>
              )}

              <Typography className="font-medium mb-12">{card.name}</Typography>

              {(card.due || checkItems > 0) && (
                <div className="flex items-center mb-12 -mx-4">
                  {card.due && (
                    <div
                      className={clsx(
                        'flex items-center px-8 py-4 mx-4 rounded-16',
                        getUnixTime(new Date()) > card.due
                          ? 'bg-red text-white'
                          : 'bg-green text-white'
                      )}
                    >
                      <Icon className="text-16">access_time</Icon>
                      <span className="mx-4">{format(fromUnixTime(card.due), 'MMM do yy')}</span>
                    </div>
                  )}

                  {checkItems > 0 && (
                    <div
                      className={clsx(
                        'flex items-center px-8 py-4 mx-4 rounded-16',
                        checkItemsChecked === checkItems
                          ? 'bg-green text-white'
                          : 'bg-grey-700 text-white'
                      )}
                    >
                      <Icon className="text-16">check_circle</Icon>
                      <span className="mx-4">{`${checkItemsChecked}/${checkItems}`}</span>
                    </div>
                  )}
                </div>
              )}

              {card.idMembers.length > 0 && (
                <div className="flex flex-wrap mb-12 -mx-4">
                  {card.idMembers.map((id) => {
                    const member = _.find(board.members, { id });
                    return (
                      <Tooltip title={member.name} key={id}>
                        <Avatar className="mx-4 w-32 h-32" src={member.avatar} />
                      </Tooltip>
                    );
                  })}
                  <div />
                </div>
              )}
            </div>

            <div className="flex justify-between h-48 px-16 border-t-1">
              <div className="flex items-center -mx-6">
                {card.subscribed && (
                  <Icon className="text-18 mx-6" color="action">
                    remove_red_eye
                  </Icon>
                )}

                {card.description !== '' && (
                  <Icon className="text-18 mx-6" color="action">
                    description
                  </Icon>
                )}
              </div>

              <div className="flex items-center justify-end -mx-6">
                {card.attachments && (
                  <span className="flex items-center mx-6">
                    <Icon className="text-18" color="action">
                      attachment
                    </Icon>
                    <Typography className="mx-8" color="textSecondary">
                      {card.attachments.length}
                    </Typography>
                  </span>
                )}
                {commentsCount > 0 && (
                  <span className="flex items-center mx-6">
                    <Icon className="text-18" color="action">
                      comment
                    </Icon>
                    <Typography className="mx-8" color="textSecondary">
                      {commentsCount}
                    </Typography>
                  </span>
                )}
              </div>
            </div>
          </Card>
        </div>
      )}
    </Draggable>
  );
}

export default BoardCard;
