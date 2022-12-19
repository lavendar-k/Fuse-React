import FormControlLabel from '@material-ui/core/FormControlLabel';
import Icon from '@material-ui/core/Icon';
import { makeStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { selectFileById } from './store/filesSlice';

const useStyles = makeStyles({
  table: {
    '& th': {
      padding: '16px 0',
    },
  },
  typeIcon: {
    '&.folder:before': {
      content: "'folder'",
      color: '#FFB300',
    },
    '&.document:before': {
      content: "'insert_drive_file'",
      color: '#1565C0',
    },
    '&.spreadsheet:before': {
      content: "'insert_chart'",
      color: '#4CAF50',
    },
  },
});

function DetailSidebarContent(props) {
  const selectedItem = useSelector((state) =>
    selectFileById(state, state.fileManagerApp.files.selectedItemId)
  );

  const classes = useStyles();

  if (!selectedItem) {
    return null;
  }

  return (
    <motion.div
      initial={{ y: 50, opacity: 0.8 }}
      animate={{ y: 0, opacity: 1, transition: { delay: 0.3 } }}
      className="file-details p-16 sm:p-24"
    >
      <div className="preview h-128 sm:h-256 file-icon flex items-center justify-center">
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1, transition: { delay: 0.3 } }}>
          <Icon className={clsx(classes.typeIcon, selectedItem.type, 'text-48')} />
        </motion.div>
      </div>

      <FormControlLabel
        className="offline-switch"
        control={<Switch checked={selectedItem.offline} aria-label="Available Offline" />}
        label="Available Offline"
      />

      <Typography variant="subtitle1" className="py-16">
        Info
      </Typography>

      <table className={clsx(classes.table, 'w-full text-justify')}>
        <tbody>
          <tr className="type">
            <th className="font-semibold">Type</th>
            <td>{selectedItem.type}</td>
          </tr>

          <tr className="size">
            <th className="font-semibold">Size</th>
            <td>{selectedItem.size === '' ? '-' : selectedItem.size}</td>
          </tr>

          <tr className="location">
            <th className="font-semibold">Location</th>
            <td>{selectedItem.location}</td>
          </tr>

          <tr className="owner">
            <th className="font-semibold">Owner</th>
            <td>{selectedItem.owner}</td>
          </tr>

          <tr className="modified">
            <th className="font-semibold">Modified</th>
            <td>{selectedItem.modified}</td>
          </tr>

          <tr className="opened">
            <th className="font-semibold">Opened</th>
            <td>{selectedItem.opened}</td>
          </tr>

          <tr className="created">
            <th className="font-semibold">Created</th>
            <td>{selectedItem.created}</td>
          </tr>
        </tbody>
      </table>
    </motion.div>
  );
}

export default DetailSidebarContent;
