import Icon from '@material-ui/core/Icon';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { motion } from 'framer-motion';
import { useState } from 'react';

import { useTranslation } from 'react-i18next';

const accounts = {
  creapond: 'johndoe@creapond.com',
  withinpixels: 'johndoe@withinpixels.com',
};

function MailAppSidebarHeader(props) {
  const [selectedAccount, setSelectedCount] = useState('creapond');
  const { t } = useTranslation('mailApp');

  function handleAccountChange(ev) {
    setSelectedCount(ev.target.value);
  }

  return (
    <div className="flex flex-col justify-center h-full p-24">
      <div className="flex items-center flex-1">
        <Icon
          component={motion.span}
          initial={{ scale: 0 }}
          animate={{ scale: 1, transition: { delay: 0.2 } }}
          className="text-24 md:text-32"
        >
          mail
        </Icon>
        <Typography
          component={motion.span}
          initial={{ x: -20 }}
          animate={{ x: 0, transition: { delay: 0.2 } }}
          delay={300}
          className="text-16 md:text-24 mx-12 font-semibold"
        >
          {t('APP_TITLE')}
        </Typography>
      </div>

      <motion.div
        initial={{ y: 20, opacity: 0.8 }}
        animate={{ y: 0, opacity: 1, transition: { delay: 0.3 } }}
      >
        <TextField
          className="w-full"
          id="account-selection"
          select
          label={selectedAccount}
          value={selectedAccount}
          onChange={handleAccountChange}
          placeholder="Select Account"
          margin="normal"
          variant="filled"
        >
          {Object.keys(accounts).map((key, value) => (
            <MenuItem key={key} value={key}>
              {accounts[key]}
            </MenuItem>
          ))}
        </TextField>
      </motion.div>
    </div>
  );
}

export default MailAppSidebarHeader;
