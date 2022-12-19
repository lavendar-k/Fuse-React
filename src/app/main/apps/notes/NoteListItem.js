import Card from '@material-ui/core/Card';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import NoteLabel from './NoteLabel';
import NoteReminderLabel from './NoteReminderLabel';
import setDescriptionStyle from './setDescriptionStyle';
import { openNoteDialog } from './store/notesSlice';

function NoteListItem(props) {
  const dispatch = useDispatch();

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1, transition: { delay: 0.1 } }}
    >
      <Card
        className={clsx('cursor-pointer', props.className)}
        onClick={() => dispatch(openNoteDialog(props.note.id))}
      >
        {props.note.image && props.note.image !== '' && (
          <img src={props.note.image} className="w-full block" alt="note" />
        )}

        {props.note.title && props.note.title !== '' && (
          <Typography className="px-20 my-16 text-14 font-semibold">{props.note.title}</Typography>
        )}

        {props.note.description && props.note.description !== '' && (
          <Typography className="px-20 my-16 " component="div">
            <div
              className={clsx('w-full break-words', props.variateDescSize ? 'font-500' : 'text-14')}
              ref={(el) => {
                setTimeout(() =>
                  setDescriptionStyle(props.note.description, el, props.variateDescSize)
                );
              }}
            >
              {props.note.description}
            </div>
          </Typography>
        )}

        {props.note.checklist && props.note.checklist.length > 0 && (
          <ul className="px-20 my-16 flex flex-wrap list-reset">
            {props.note.checklist.map((item) => (
              <li key={item.id} className="flex items-center w-full">
                <Icon color="action" className="text-16">
                  {item.checked ? 'check_box_outline' : 'check_box_outline_blank'}
                </Icon>
                <Typography
                  className={clsx('truncate mx-8', item.checked && 'line-through')}
                  color={item.checked ? 'textSecondary' : 'inherit'}
                >
                  {item.text}
                </Typography>
              </li>
            ))}
          </ul>
        )}

        {(props.note.labels.length > 0 || props.note.reminder) && (
          <div className="px-20 my-16 flex flex-wrap w-full -mx-2">
            {props.note.reminder && (
              <NoteReminderLabel className="mt-4 mx-2 max-w-full" date={props.note.reminder} />
            )}
            {props.note.labels.map((id) => (
              <NoteLabel id={id} key={id} className="mt-4 mx-2 max-w-full" linkable />
            ))}
          </div>
        )}
      </Card>
    </motion.div>
  );
}

export default NoteListItem;
