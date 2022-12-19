import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import { useTheme } from '@material-ui/core/styles';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter, useParams } from 'react-router-dom';
import { updateMail } from '../store/mailSlice';

const pathToRegexp = require('path-to-regexp');

function MailToolbar(props) {
  const dispatch = useDispatch();
  const mail = useSelector(({ mailApp }) => mailApp.mail);
  const theme = useTheme();

  const toPath = pathToRegexp.compile(props.match.path);

  const routeParams = useParams();
  const matchParams = { ...routeParams };
  delete matchParams.mailId;
  const deselectUrl = toPath(matchParams);

  if (!mail) {
    return null;
  }

  return (
    <div className="flex flex-1 items-center justify-between overflow-hidden sm:px-16">
      <IconButton onClick={() => props.history.push(deselectUrl)}>
        <Icon>{theme.direction === 'ltr' ? 'arrow_back' : 'arrow_forward'}</Icon>
      </IconButton>

      <div className="flex items-center justify-start" aria-label="Toggle star">
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1, transition: { delay: 0.1 } }}>
          <IconButton onClick={() => dispatch(updateMail({ starred: !mail.starred }))}>
            {mail.starred ? <Icon>star</Icon> : <Icon>star_border</Icon>}
          </IconButton>
        </motion.div>
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1, transition: { delay: 0.1 } }}>
          <IconButton onClick={() => dispatch(updateMail({ important: !mail.important }))}>
            {mail.important ? <Icon>label</Icon> : <Icon>label_off</Icon>}
          </IconButton>
        </motion.div>
      </div>
    </div>
  );
}

export default withRouter(MailToolbar);
