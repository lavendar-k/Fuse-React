import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { selectFileById } from './store/filesSlice';

function DetailSidebarHeader(props) {
  const selectedItem = useSelector((state) =>
    selectFileById(state, state.fileManagerApp.files.selectedItemId)
  );

  if (!selectedItem) {
    return null;
  }

  return (
    <div className="flex flex-col justify-between h-full p-4 sm:p-12">
      <div className="toolbar flex align-center justify-end">
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1, transition: { delay: 0.2 } }}>
          <IconButton>
            <Icon>delete</Icon>
          </IconButton>
        </motion.div>
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1, transition: { delay: 0.2 } }}>
          <IconButton>
            <Icon>cloud_download</Icon>
          </IconButton>
        </motion.div>
        <IconButton>
          <Icon>more_vert</Icon>
        </IconButton>
      </div>

      <div className="p-12">
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1, transition: { delay: 0.2 } }}>
          <Typography variant="subtitle1" className="mb-8 font-semibold">
            {selectedItem.name}
          </Typography>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.3 } }}>
          <Typography variant="caption" className="font-medium">
            <span>Edited</span>
            <span>: {selectedItem.modified}</span>
          </Typography>
        </motion.div>
      </div>
    </div>
  );
}

export default DetailSidebarHeader;
