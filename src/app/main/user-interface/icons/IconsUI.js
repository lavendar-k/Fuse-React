import FusePageSimple from '@fuse/core/FusePageSimple';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Input from '@material-ui/core/Input';
import Paper from '@material-ui/core/Paper';
import { ThemeProvider, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import { useEffect, useMemo, useState } from 'react';

function IconsUI() {
  const theme = useTheme();
  const [searchText, setSearchText] = useState('');
  const [data, setData] = useState(null);
  const [filteredData, setFilteredData] = useState(null);

  useEffect(() => {
    axios.get('/api/icons').then((res) => {
      setData(res.data);
    });
  }, []);

  useEffect(() => {
    setFilteredData(
      searchText.length > 0
        ? data.filter((item) => {
            if (item.name.includes(searchText)) {
              return true;
            }

            // eslint-disable-next-line no-unused-vars
            for (let i = 0; i < item.tags.length; i += 1) {
              const tag = item.tags[i];
              if (tag.includes(searchText)) {
                return true;
              }
            }
            return false;
          })
        : data
    );
  }, [data, searchText]);

  function handleSearch(event) {
    setSearchText(event.target.value);
  }

  return (
    <FusePageSimple
      classes={{
        content: 'flex',
      }}
      header={
        <div className="flex flex-wrap flex-1 items-center justify-between p-12 md:p-24">
          <div className="flex flex-col w-full sm:w-auto">
            <div className="flex items-center mb-4">
              <Icon className="text-18" color="action">
                home
              </Icon>
              <Icon className="text-16" color="action">
                chevron_right
              </Icon>
              <Typography color="textSecondary" className="font-medium">
                User Interface
              </Typography>
            </div>
            <Typography variant="h6" className="text-18 sm:text-24 font-semibold">
              Icons
            </Typography>
          </div>

          <div className="flex flex-1 items-center justify-center w-full sm:w-auto sm:px-12">
            <ThemeProvider theme={theme}>
              <Paper className="flex items-center min-w-full sm:min-w-0 w-full max-w-512 px-12 py-4 rounded-16 shdaow">
                <Icon color="action">search</Icon>

                {useMemo(
                  () => (
                    <Input
                      placeholder="Search..."
                      className="flex flex-1 px-8"
                      disableUnderline
                      fullWidth
                      value={searchText}
                      onChange={handleSearch}
                      inputProps={{
                        'aria-label': 'Search',
                      }}
                    />
                  ),
                  [searchText]
                )}
              </Paper>
            </ThemeProvider>
          </div>

          <Button
            className="ml-8 sm:ml-0"
            variant="outlined"
            component="a"
            href="https://material.io/icons/"
            target="_blank"
            role="button"
            color="default"
          >
            <Icon>link</Icon>
            <span className="mx-4 hidden sm:flex">Reference</span>
          </Button>
        </div>
      }
      content={
        <div className="py-24 max-w-2xl mx-auto">
          {useMemo(
            () =>
              filteredData &&
              (filteredData.length > 0 ? (
                <div className="flex flex-wrap justify-center">
                  {filteredData.map((item) => (
                    <div
                      className="w-1/3 h-128 p-8 sm:w-160 sm:p-16 flex flex-col items-center justify-center"
                      key={item.name}
                    >
                      <Icon className="text-48" color="action">
                        {item.name}
                      </Icon>
                      <Typography variant="caption" className="mt-4">
                        {item.name}
                      </Typography>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-auto items-center justify-center w-full h-full">
                  <Typography color="textSecondary" variant="h5">
                    No results!
                  </Typography>
                </div>
              )),
            [filteredData]
          )}
        </div>
      }
    />
  );
}

export default IconsUI;
