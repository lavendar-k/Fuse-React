import Button from '@material-ui/core/Button';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { changeLanguage } from 'app/store/i18nSlice';

const languages = [
  {
    id: 'en',
    title: 'English',
    flag: 'us',
  },
  {
    id: 'tr',
    title: 'Turkish',
    flag: 'tr',
  },
  {
    id: 'ar',
    title: 'Arabic',
    flag: 'sa',
  },
];

function LanguageSwitcher(props) {
  const dispatch = useDispatch();

  const currentLanguageId = useSelector(({ i18n }) => i18n.language);
  const currentLanguage = languages.find((lng) => lng.id === currentLanguageId);

  const [menu, setMenu] = useState(null);

  const langMenuClick = (event) => {
    setMenu(event.currentTarget);
  };

  const langMenuClose = () => {
    setMenu(null);
  };

  function handleLanguageChange(lng) {
    dispatch(changeLanguage(lng.id));

    langMenuClose();
  }

  return (
    <>
      <Button className="h-40 w-64" onClick={langMenuClick}>
        <img
          className="mx-4 min-w-20"
          src={`assets/images/flags/${currentLanguage.flag}.png`}
          alt={currentLanguage.title}
        />

        <Typography className="mx-4 font-semibold uppercase" color="textSecondary">
          {currentLanguage.id}
        </Typography>
      </Button>

      <Popover
        open={Boolean(menu)}
        anchorEl={menu}
        onClose={langMenuClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        classes={{
          paper: 'py-8',
        }}
      >
        {languages.map((lng) => (
          <MenuItem key={lng.id} onClick={() => handleLanguageChange(lng)}>
            <ListItemIcon className="min-w-40">
              <img
                className="min-w-20"
                src={`assets/images/flags/${lng.flag}.png`}
                alt={lng.title}
              />
            </ListItemIcon>
            <ListItemText primary={lng.title} />
          </MenuItem>
        ))}

        <MenuItem
          component={Link}
          to="/documentation/configuration/multi-language"
          onClick={langMenuClose}
          role="button"
        >
          <ListItemText primary="Learn More" />
        </MenuItem>
      </Popover>
    </>
  );
}

export default LanguageSwitcher;
