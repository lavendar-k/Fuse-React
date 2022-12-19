import FuseHighlight from '@fuse/core/FuseHighlight';
import AppBar from '@material-ui/core/AppBar';
import Card from '@material-ui/core/Card';
import Icon from '@material-ui/core/Icon';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { useState } from 'react';
import DemoFrame from './DemoFrame';

const propTypes = {
  raw: PropTypes.object,
  currentTabIndex: PropTypes.number,
};

const defaultProps = {
  currentTabIndex: 0,
};

function FuseExample(props) {
  const [currentTab, setCurrentTab] = useState(props.currentTabIndex);
  const { component: Component, raw, iframe, className } = props;

  function handleChange(event, value) {
    setCurrentTab(value);
  }

  return (
    <Card className={clsx(className, 'shadow')}>
      <AppBar position="static" color="default" className="shadow-0">
        <Tabs
          classes={{
            root: 'border-b-1',
            flexContainer: 'justify-end',
          }}
          value={currentTab}
          onChange={handleChange}
        >
          {Component && <Tab classes={{ root: 'min-w-64' }} icon={<Icon>remove_red_eye</Icon>} />}
          {raw && <Tab classes={{ root: 'min-w-64' }} icon={<Icon>code</Icon>} />}
        </Tabs>
      </AppBar>
      <div className="flex justify-center max-w-full">
        <div className={currentTab === 0 ? 'flex flex-1 max-w-full' : 'hidden'}>
          {Component &&
            (iframe ? (
              <DemoFrame>
                <Component />
              </DemoFrame>
            ) : (
              <div className="p-24 flex flex-1 justify-center max-w-full">
                <Component />
              </div>
            ))}
        </div>
        <div className={currentTab === 1 ? 'flex flex-1' : 'hidden'}>
          {raw && (
            <div className="flex flex-1">
              <FuseHighlight component="pre" className="language-javascript w-full">
                {raw.default}
              </FuseHighlight>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}

FuseExample.propTypes = propTypes;
FuseExample.defaultProps = defaultProps;

export default FuseExample;
