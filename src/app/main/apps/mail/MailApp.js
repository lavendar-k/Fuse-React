import FusePageCarded from '@fuse/core/FusePageCarded';
import withReducer from 'app/store/withReducer';
import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import MailDetails from './mail/MailDetails';
import MailToolbar from './mail/MailToolbar';
import MailAppHeader from './MailAppHeader';
import MailAppSidebarContent from './MailAppSidebarContent';
import MailAppSidebarHeader from './MailAppSidebarHeader';
import MailList from './mails/MailList';
import MailsToolbar from './mails/MailsToolbar';
import reducer from './store';
import { getFilters } from './store/filtersSlice';
import { getFolders } from './store/foldersSlice';
import { getLabels } from './store/labelsSlice';

function MailApp(props) {
  const dispatch = useDispatch();

  const pageLayout = useRef(null);
  const routeParams = useParams();

  useEffect(() => {
    dispatch(getFilters());
    dispatch(getFolders());
    dispatch(getLabels());
  }, [dispatch]);

  return (
    <FusePageCarded
      classes={{
        root: 'w-full',
        content: 'flex flex-col',
        header: 'items-center min-h-72 h-72 sm:h-136 sm:min-h-136',
      }}
      header={<MailAppHeader pageLayout={pageLayout} />}
      contentToolbar={routeParams.mailId ? <MailToolbar /> : <MailsToolbar />}
      content={routeParams.mailId ? <MailDetails /> : <MailList />}
      leftSidebarHeader={<MailAppSidebarHeader />}
      leftSidebarContent={<MailAppSidebarContent />}
      ref={pageLayout}
      innerScroll
    />
  );
}

export default withReducer('mailApp', reducer)(MailApp);
