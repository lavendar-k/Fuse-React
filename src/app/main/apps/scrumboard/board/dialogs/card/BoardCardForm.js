import { useDebounce } from '@fuse/hooks';
import _ from '@lodash';
import { DateTimePicker } from '@material-ui/pickers';
import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import List from '@material-ui/core/List';
import TextField from '@material-ui/core/TextField';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import { Autocomplete } from '@material-ui/lab';
import fromUnixTime from 'date-fns/fromUnixTime';
import getUnixTime from 'date-fns/getUnixTime';
import format from 'date-fns/format';
import { Controller, useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeCardDialog, removeCard, updateCard } from '../../../store/cardSlice';
import CardActivity from './activity/CardActivity';
import CardAttachment from './attachment/CardAttachment';
import CardChecklist from './checklist/CardChecklist';
import CardComment from './comment/CardComment';
import CheckListMenu from './toolbar/CheckListMenu';
import DueMenu from './toolbar/DueMenu';
import LabelsMenu from './toolbar/LabelsMenu';
import MembersMenu from './toolbar/MembersMenu';
import OptionsMenu from './toolbar/OptionsMenu';

function BoardCardForm(props) {
  const dispatch = useDispatch();
  const card = useSelector(({ scrumboardApp }) => scrumboardApp.card.data);
  const board = useSelector(({ scrumboardApp }) => scrumboardApp.board);
  const { register, watch, control, setValue } = useForm({ mode: 'onChange', defaultValues: card });
  const cardForm = watch();

  const updateCardData = useDebounce((boardId, newCard) => {
    dispatch(updateCard({ boardId, card: { ...newCard } }));
  }, 600);

  const list = card ? _.find(board.lists, (_list) => _list.idCards.includes(card.id)) : null;

  useEffect(() => {
    if (!card) {
      return;
    }
    if (!_.isEqual(card, cardForm)) {
      updateCardData(board.id, cardForm);
    }
  }, [board.id, card, cardForm, updateCardData]);

  useEffect(() => {
    register('idAttachmentCover');
  }, [register]);

  if (!card) {
    return null;
  }

  return (
    <>
      <DialogTitle component="div" className="p-0">
        <AppBar position="static" elevation={0}>
          <Toolbar className="flex w-full overflow-x-auto px-8 sm:px-16">
            <div className="flex flex-1">
              <Controller
                name="due"
                control={control}
                defaultValue={null}
                render={({ field: { onChange, value } }) => (
                  <DueMenu onDueChange={onChange} onRemoveDue={() => onChange(null)} due={value} />
                )}
              />

              <Controller
                name="idLabels"
                control={control}
                defaultValue={[]}
                render={({ field: { onChange, value } }) => (
                  <LabelsMenu
                    onToggleLabel={(labelId) => onChange(_.xor(value, [labelId]))}
                    labels={board.labels}
                    idLabels={value}
                  />
                )}
              />

              <Controller
                name="idMembers"
                control={control}
                defaultValue={[]}
                render={({ field: { onChange, value } }) => (
                  <MembersMenu
                    onToggleMember={(memberId) => onChange(_.xor(value, [memberId]))}
                    members={board.members}
                    idMembers={value}
                  />
                )}
              />

              <Controller
                name="attachments"
                control={control}
                defaultValue={[]}
                render={({ field: { onChange, value } }) => (
                  <IconButton color="inherit">
                    <Icon>attachment</Icon>
                  </IconButton>
                )}
              />

              <Controller
                name="checklists"
                control={control}
                defaultValue={[]}
                render={({ field: { onChange, value } }) => (
                  <CheckListMenu
                    onAddCheckList={(newList) => onChange([...cardForm.checklists, newList])}
                  />
                )}
              />

              <OptionsMenu
                onRemoveCard={() =>
                  dispatch(removeCard({ boardId: board.id, cardId: cardForm.id }))
                }
              />
            </div>
            <IconButton color="inherit" onClick={(ev) => dispatch(closeCardDialog())}>
              <Icon>close</Icon>
            </IconButton>
          </Toolbar>
        </AppBar>
      </DialogTitle>

      <DialogContent className="p-16 sm:p-24">
        <div className="flex flex-col sm:flex-row sm:justify-between justify-center items-center mb-24">
          <div className="mb-16 sm:mb-0 flex items-center">
            <Typography>{board.name}</Typography>

            <Icon className="text-20" color="inherit">
              chevron_right
            </Icon>

            <Typography>{list && list.name}</Typography>
          </div>
          {cardForm.due && (
            <DateTimePicker
              label="Due date"
              inputVariant="outlined"
              value={format(fromUnixTime(cardForm.due), 'Pp')}
              format="Pp"
              onChange={(val) => setValue('due', getUnixTime(val))}
              placeholder="Choose a due date"
              className="w-full sm:w-auto"
            />
          )}
        </div>

        <div className="flex items-center mb-24">
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Title"
                type="text"
                variant="outlined"
                fullWidth
                required
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      {card.subscribed && (
                        <Icon className="text-20" color="action">
                          remove_red_eye
                        </Icon>
                      )}
                    </InputAdornment>
                  ),
                }}
              />
            )}
          />
        </div>

        <div className="w-full mb-24">
          <Controller
            name="description"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Description"
                multiline
                rows="4"
                variant="outlined"
                fullWidth
              />
            )}
          />
        </div>

        <div className="flex flex-col sm:flex-row -mx-8">
          {cardForm.idLabels && cardForm.idLabels.length > 0 && (
            <div className="flex-1 mb-24 mx-8">
              <div className="flex items-center mt-16 mb-12">
                <Icon className="text-20" color="inherit">
                  label
                </Icon>
                <Typography className="font-semibold text-16 mx-8">Labels</Typography>
              </div>
              <Autocomplete
                className="mt-8 mb-16"
                multiple
                freeSolo
                options={board.labels}
                getOptionLabel={(label) => {
                  return label.name;
                }}
                value={cardForm.idLabels.map((id) => _.find(board.labels, { id }))}
                onChange={(event, newValue) => {
                  setValue(
                    'idLabels',
                    newValue.map((item) => item.id)
                  );
                }}
                renderTags={(value, getTagProps) =>
                  value.map((option, index) => {
                    return (
                      <Chip
                        label={option.name}
                        {...getTagProps({ index })}
                        className={clsx('m-3', option.class)}
                      />
                    );
                  })
                }
                renderInput={(params) => (
                  <TextField
                    {...params}
                    placeholder="Select multiple Labels"
                    label="Labels"
                    variant="outlined"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                )}
              />
            </div>
          )}

          {cardForm.idMembers && cardForm.idMembers.length > 0 && (
            <div className="flex-1 mb-24 mx-8">
              <div className="flex items-center mt-16 mb-12">
                <Icon className="text-20" color="inherit">
                  supervisor_account
                </Icon>
                <Typography className="font-semibold text-16 mx-8">Members</Typography>
              </div>
              <Autocomplete
                className="mt-8 mb-16"
                multiple
                freeSolo
                options={board.members}
                getOptionLabel={(member) => {
                  return member.name;
                }}
                value={cardForm.idMembers.map((id) => _.find(board.members, { id }))}
                onChange={(event, newValue) => {
                  setValue(
                    'idMembers',
                    newValue.map((item) => item.id)
                  );
                }}
                renderTags={(value, getTagProps) =>
                  value.map((option, index) => {
                    return (
                      <Chip
                        label={option.name}
                        {...getTagProps({ index })}
                        className={clsx('m-3', option.class)}
                        avatar={
                          <Tooltip title={option.name}>
                            <Avatar src={option.avatar} />
                          </Tooltip>
                        }
                      />
                    );
                  })
                }
                renderInput={(params) => (
                  <TextField
                    {...params}
                    placeholder="Select multiple Members"
                    label="Members"
                    variant="outlined"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                )}
              />
            </div>
          )}
        </div>

        {cardForm.attachments && cardForm.attachments.length > 0 && (
          <div className="mb-24">
            <div className="flex items-center mt-16 mb-12">
              <Icon className="text-20" color="inherit">
                attachment
              </Icon>
              <Typography className="font-semibold text-16 mx-8">Attachments</Typography>
            </div>
            <div className="flex flex-col sm:flex-row flex-wrap -mx-16">
              {cardForm.attachments.map((item) => (
                <CardAttachment
                  item={item}
                  card={cardForm}
                  // makeCover={makeCover}
                  // removeCover={removeCover}
                  // removeAttachment={removeAttachment}
                  key={item.id}
                />
              ))}
            </div>
          </div>
        )}

        {cardForm.checklists &&
          cardForm.checklists.map((checklist, index) => (
            <CardChecklist
              key={checklist.id}
              checklist={checklist}
              index={index}
              onCheckListChange={(item, itemIndex) => {
                setValue('checklists', _.setIn(cardForm.checklists, `[${itemIndex}]`, item));
              }}
              onRemoveCheckList={() => {
                setValue('checklists', _.reject(cardForm.checklists, { id: checklist.id }));
              }}
            />
          ))}

        <div className="mb-24">
          <div className="flex items-center mt-16 mb-12">
            <Icon className="text-20" color="inherit">
              comment
            </Icon>
            <Typography className="font-semibold text-16 mx-8">Comment</Typography>
          </div>
          <div>
            <CardComment
              members={board.members}
              onCommentAdd={(comment) => setValue('activities', [comment, ...cardForm.activities])}
            />
          </div>
        </div>

        <Controller
          name="activities"
          control={control}
          defaultValue={[]}
          render={({ field: { onChange, value } }) => (
            <div>
              {value.length > 0 && (
                <div className="mb-24">
                  <div className="flex items-center mt-16">
                    <Icon className="text-20" color="inherit">
                      list
                    </Icon>
                    <Typography className="font-semibold text-16 mx-8">Activity</Typography>
                  </div>
                  <List className="">
                    {value.map((item) => (
                      <CardActivity item={item} key={item.id} members={board.members} />
                    ))}
                  </List>
                </div>
              )}
            </div>
          )}
        />
      </DialogContent>
    </>
  );
}

export default BoardCardForm;
