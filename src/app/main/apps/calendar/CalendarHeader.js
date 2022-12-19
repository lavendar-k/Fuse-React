import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import { selectMainThemeDark } from 'app/store/fuse/settingsSlice';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import format from 'date-fns/format';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: 'url("../../assets/images/backgrounds/header-bg.png")',
    backgroundColor: '#FAFAFA',
    color: '#FFFFFF',
    backgroundSize: 'cover',
    backgroundPosition: '0 50%',
    backgroundRepeat: 'no-repeat',
    '&:before': {
      content: "''",
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      zIndex: 1,
      background: 'rgba(0, 0, 0, 0.45)',
    },
    '&.Jan': {
      backgroundImage: "url('/assets/images/calendar/winter.jpg')",
      backgroundPosition: '0 85%',
    },
    '&.Feb': {
      backgroundImage: "url('/assets/images/calendar/winter.jpg')",
      backgroundPosition: '0 85%',
    },
    '&.Mar': {
      backgroundImage: "url('/assets/images/calendar/spring.jpg')",
      backgroundPosition: '0 40%',
    },
    '&.Apr': {
      backgroundImage: "url('/assets/images/calendar/spring.jpg')",
      backgroundPosition: '0 40%',
    },
    '&.May': {
      backgroundImage: "url('/assets/images/calendar/spring.jpg')",
      backgroundPosition: '0 40%',
    },
    '&.Jun': {
      backgroundImage: "url('/assets/images/calendar/summer.jpg')",
      backgroundPosition: '0 80%',
    },
    '&.Jul': {
      backgroundImage: "url('/assets/images/calendar/summer.jpg')",
      backgroundPosition: '0 80%',
    },
    '&.Aug': {
      backgroundImage: "url('/assets/images/calendar/summer.jpg')",
      backgroundPosition: '0 80%',
    },
    '&.Sep': {
      backgroundImage: "url('/assets/images/calendar/autumn.jpg')",
      backgroundPosition: '0 40%',
    },
    '&.Oct': {
      backgroundImage: "url('/assets/images/calendar/autumn.jpg')",
      backgroundPosition: '0 40%',
    },
    '&.Nov': {
      backgroundImage: "url('/assets/images/calendar/autumn.jpg')",
      backgroundPosition: '0 40%',
    },
    '&.Dec': {
      backgroundImage: "url('/assets/images/calendar/winter.jpg')",
      backgroundPosition: '0 85%',
    },
  },
}));

const viewNamesObj = {
  dayGridMonth: {
    title: 'Month',
    icon: 'view_module',
  },
  timeGridWeek: {
    title: 'Week',
    icon: 'view_week',
  },
  timeGridDay: {
    title: 'Day',
    icon: 'view_agenda',
  },
};

function CalendarHeader(props) {
  const { calendarRef, currentDate } = props;
  const classes = useStyles(props);
  const mainThemeDark = useSelector(selectMainThemeDark);
  const calendarApi = () => calendarRef.current?.getApi();
  return (
    <ThemeProvider theme={mainThemeDark}>
      <div
        className={clsx(
          classes.root,
          'flex h-200 min-h-200 relative',
          format(new Date(currentDate?.start || null), 'MMM')
        )}
      >
        <div className="flex flex-1 flex-col p-12 justify-between z-10 container">
          <div className="flex flex-col items-center justify-between sm:flex-row">
            <div className="flex items-center my-16 sm:mb-0">
              <Icon
                component={motion.span}
                initial={{ scale: 0 }}
                animate={{ scale: 1, transition: { delay: 0.2 } }}
                className="text-24 md:text-32"
              >
                today
              </Icon>
              <motion.span
                initial={{ x: -20 }}
                animate={{ x: 0, transition: { delay: 0.2 } }}
                delay={300}
                className="text-16 md:text-24 mx-12 font-semibold"
              >
                Calendar
              </motion.span>
            </div>
            <div className="flex items-center">
              <Tooltip title="Today">
                <div>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1, transition: { delay: 0.3 } }}
                  >
                    <IconButton aria-label="today" onClick={() => calendarApi().today()}>
                      <Icon>today</Icon>
                    </IconButton>
                  </motion.div>
                </div>
              </Tooltip>
              {Object.entries(viewNamesObj).map(([name, view]) => (
                <Tooltip title={view.title} key={name}>
                  <div>
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1, transition: { delay: 0.3 } }}
                    >
                      <IconButton
                        aria-label={name}
                        onClick={() => calendarApi().changeView(name)}
                        disabled={currentDate?.view.type === name}
                      >
                        <Icon>{view.icon}</Icon>
                      </IconButton>
                    </motion.div>
                  </div>
                </Tooltip>
              ))}
            </div>
          </div>

          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.3 } }}
          >
            <Tooltip title="Previous">
              <IconButton aria-label="Previous" onClick={() => calendarApi().prev()}>
                <Icon>{mainThemeDark.direction === 'ltr' ? 'chevron_left' : 'chevron_right'}</Icon>
              </IconButton>
            </Tooltip>
            <Typography variant="h6">{currentDate?.view.title}</Typography>
            <Tooltip title="Next">
              <IconButton aria-label="Next" onClick={() => calendarApi().next()}>
                <Icon>{mainThemeDark.direction === 'ltr' ? 'chevron_right' : 'chevron_left'}</Icon>
              </IconButton>
            </Tooltip>
          </motion.div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default CalendarHeader;
