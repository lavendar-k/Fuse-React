import FusePageSimple from '@fuse/core/FusePageSimple';
import Button from '@material-ui/core/Button';
import { blue, green } from '@material-ui/core/colors';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import Paper from '@material-ui/core/Paper';
import { makeStyles, ThemeProvider, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const useStyles = makeStyles({
  title: {
    color: blue[800],
  },
  url: {
    color: green[800],
  },
});

function ModernSearchPage() {
  const classes = useStyles();
  const theme = useTheme();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('/api/search').then((res) => {
      setData(res.data);
    });
  }, []);

  const container = {
    show: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <FusePageSimple
      header={
        <div className="flex flex-1 items-center p-16 sm:p-24 max-w-md">
          <ThemeProvider theme={theme}>
            <Paper className="flex items-center h-44 w-full px-16 rounded-16 shadow">
              <Input
                placeholder="Search..."
                disableUnderline
                fullWidth
                inputProps={{
                  'aria-label': 'Search',
                }}
              />
              <Icon color="action">search</Icon>
            </Paper>
          </ThemeProvider>
        </div>
      }
      content={
        <div className="p-16 pt-0 sm:p-24 sm:pt-0 max-w-md">
          {data.length > 0 && (
            <motion.div variants={container} initial="hidden" animate="show">
              <motion.div variants={item}>
                <Typography color="textSecondary" className="text-13 mx-16 my-24">
                  {data.length} results
                </Typography>
              </motion.div>

              {data.map((_item) => (
                <Paper
                  component={motion.div}
                  variants={item}
                  className="p-16 mb-16 rounded-16 shadow overflow-hidden"
                  key={_item.id}
                >
                  <Typography className={clsx(classes.title, 'text-18 font-medium cursor-pointer')}>
                    {_item.title}
                  </Typography>
                  <Typography className={clsx(classes.url, 'my-4')}>{_item.url}</Typography>
                  <Typography>{_item.excerpt}</Typography>
                </Paper>
              ))}
            </motion.div>
          )}

          <div className="flex justify-center mt-48">
            <Paper className="rounded-16 shadow">
              <IconButton>
                <Icon className="text-20">
                  {theme.direction === 'ltr' ? 'chevron_left' : 'chevron_right'}
                </Icon>
              </IconButton>
              <Button className="min-w-48 h-48 p-0 px-16">1</Button>
              <Button className="min-w-48 h-48 p-0 px-16">2</Button>
              <Button className="min-w-48 h-48 p-0 px-16">3</Button>
              <Button className="min-w-48 h-48 p-0 px-16">4</Button>
              <Button className="min-w-48 h-48 p-0 px-16">5</Button>
              <IconButton>
                <Icon className="text-20">
                  {theme.direction === 'ltr' ? 'chevron_right' : 'chevron_left'}
                </Icon>
              </IconButton>
            </Paper>
          </div>
        </div>
      }
    />
  );
}

export default ModernSearchPage;
