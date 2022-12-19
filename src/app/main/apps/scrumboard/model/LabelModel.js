import FuseUtils from '@fuse/utils';
import _ from '@lodash';

function LabelModel(data) {
  data = data || {};
  return _.defaults(data, {
    id: FuseUtils.generateGUID(),
    name: '',
    class: 'bg-blue text-white',
  });
}

export default LabelModel;
