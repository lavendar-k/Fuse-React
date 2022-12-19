import Hidden from '@material-ui/core/Hidden';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import NotesSearch from './NotesSearch';
import { toggleVariateDescSize } from './store/notesSlice';

function NotesHeader(props) {
  const dispatch = useDispatch();
  const variateDescSize = useSelector(({ notesApp }) => notesApp.notes.variateDescSize);

  return (
    <div className="flex flex-1 items-center justify-between p-8 sm:p-24 relative">
      <div className="flex flex-shrink items-center sm:w-224">
        <Hidden lgUp>
          <IconButton
            onClick={(ev) => props.pageLayout.current.toggleLeftSidebar()}
            aria-label="open left sidebar"
          >
            <Icon>menu</Icon>
          </IconButton>
        </Hidden>

        <div className="flex items-center">
          <Icon
            component={motion.span}
            initial={{ scale: 0 }}
            animate={{ scale: 1, transition: { delay: 0.2 } }}
            className="text-24 md:text-32"
          >
            account_box
          </Icon>
          <Typography
            component={motion.span}
            initial={{ x: -20 }}
            animate={{ x: 0, transition: { delay: 0.2 } }}
            delay={300}
            className="text-16 md:text-24 mx-12 font-semibold"
          >
            Notes
          </Typography>
        </div>
      </div>

      <div className="flex flex-1 items-center justify-end">
        <Tooltip title="Toggle Variate Description Size">
          <IconButton onClick={(ev) => dispatch(toggleVariateDescSize())}>
            <Icon color={variateDescSize ? 'action' : 'disabled'}>format_size</Icon>
          </IconButton>
        </Tooltip>
        <NotesSearch />
      </div>
    </div>
  );
}

export default NotesHeader;
