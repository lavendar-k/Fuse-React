import FuseUtils from '@fuse/utils';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter, useParams } from 'react-router-dom';
import { useDeepCompareEffect } from '@fuse/hooks';
import { getMails, selectMails } from '../store/mailsSlice';
import MailListItem from './MailListItem';

function MailList(props) {
  const dispatch = useDispatch();
  const mails = useSelector(selectMails);
  const searchText = useSelector(({ mailApp }) => mailApp.mails.searchText);

  const routeParams = useParams();
  const [filteredData, setFilteredData] = useState(null);
  const { t } = useTranslation('mailApp');

  useDeepCompareEffect(() => {
    dispatch(getMails(routeParams));
  }, [dispatch, routeParams]);

  useEffect(() => {
    function getFilteredArray() {
      if (searchText.length === 0) {
        return mails;
      }
      return FuseUtils.filterArrayByString(mails, searchText);
    }

    if (mails) {
      setFilteredData(getFilteredArray());
    }
  }, [mails, searchText]);

  if (!filteredData) {
    return null;
  }

  if (filteredData.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.1 } }}
        className="flex flex-1 items-center justify-center h-full"
      >
        <Typography color="textSecondary" variant="h5">
          {t('NO_MESSAGES')}
        </Typography>
      </motion.div>
    );
  }

  const container = {
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <List className="p-0">
      <motion.div variants={container} initial="hidden" animate="show" v>
        {filteredData.map((mail) => (
          <motion.div variants={item} key={mail.id}>
            <MailListItem mail={mail} />
          </motion.div>
        ))}
      </motion.div>
    </List>
  );
}

export default withRouter(MailList);
