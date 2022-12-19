import FuseUtils from '@fuse/utils';
import _ from '@lodash';

function ListModel(data) {
  data = data || {};

  return _.defaults(data, {
    id: FuseUtils.generateGUID(),
    name: '',
    idCards: [],
  });
}

export default ListModel;
