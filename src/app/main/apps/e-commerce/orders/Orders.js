import FusePageCarded from '@fuse/core/FusePageCarded';
import withReducer from 'app/store/withReducer';
import reducer from '../store';
import OrdersHeader from './OrdersHeader';
import OrdersTable from './OrdersTable';

function Orders() {
  return (
    <FusePageCarded
      classes={{
        content: 'flex',
        contentCard: 'overflow-hidden',
        header: 'min-h-72 h-72 sm:h-136 sm:min-h-136',
      }}
      header={<OrdersHeader />}
      content={<OrdersTable />}
      innerScroll
    />
  );
}

export default withReducer('eCommerceApp', reducer)(Orders);
