import DemoContent from '@fuse/core/DemoContent';
import DemoSidebarContent from '@fuse/core/DemoSidebarContent';
import FusePageCarded from '@fuse/core/FusePageCarded';
import Hidden from '@material-ui/core/Hidden';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import { useRef, useState } from 'react';

const useStyles = makeStyles({
  layoutRoot: {},
});

function CardedLeftSidebarTabbedSample() {
  const classes = useStyles();
  const [selectedTab, setSelectedTab] = useState(0);
  const pageLayout = useRef(null);

  const handleTabChange = (event, value) => {
    setSelectedTab(value);
  };

  return (
    <FusePageCarded
      classes={{
        root: classes.layoutRoot,
        toolbar: 'p-0',
      }}
      header={
        <div className="flex flex-col flex-1">
          <div className="flex items-center py-24">
            <Hidden lgUp>
              <IconButton
                onClick={(ev) => pageLayout.current.toggleLeftSidebar()}
                aria-label="open left sidebar"
              >
                <Icon>menu</Icon>
              </IconButton>
            </Hidden>
            <div className="flex-1">
              <h4>Header</h4>
            </div>
          </div>
        </div>
      }
      contentToolbar={
        <Tabs
          value={selectedTab}
          onChange={handleTabChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="off"
          className="w-full h-64"
        >
          <Tab className="h-64" label="Item One" />
          <Tab className="h-64" label="Item Two" />
          <Tab className="h-64" label="Item Three" />
          <Tab className="h-64" label="Item Four" />
          <Tab className="h-64" label="Item Five" />
          <Tab className="h-64" label="Item Six" />
          <Tab className="h-64" label="Item Seven" />
        </Tabs>
      }
      content={
        <div className="p-24">
          {selectedTab === 0 && (
            <div>
              <h3 className="mb-16">Item One</h3>
              <DemoContent />
            </div>
          )}
          {selectedTab === 1 && (
            <div>
              <h3 className="mb-16">Item Two</h3>
              <DemoContent />
            </div>
          )}
          {selectedTab === 2 && (
            <div>
              <h3 className="mb-16">Item Three</h3>
              <DemoContent />
            </div>
          )}
          {selectedTab === 3 && (
            <div>
              <h3 className="mb-16">Item Four</h3>
              <DemoContent />
            </div>
          )}
          {selectedTab === 4 && (
            <div>
              <h3 className="mb-16">Item Five</h3>
              <DemoContent />
            </div>
          )}
          {selectedTab === 5 && (
            <div>
              <h3 className="mb-16">Item Six</h3>
              <DemoContent />
            </div>
          )}
          {selectedTab === 6 && (
            <div>
              <h3 className="mb-16">Item Seven</h3>
              <DemoContent />
            </div>
          )}
        </div>
      }
      leftSidebarHeader={
        <div className="p-24">
          <h4>Sidebar Header</h4>
        </div>
      }
      leftSidebarContent={
        <div className="p-24">
          <h4>Sidebar Content</h4>
          <br />
          <DemoSidebarContent />
        </div>
      }
      ref={pageLayout}
    />
  );
}

export default CardedLeftSidebarTabbedSample;
