import FuseUtils from '@fuse/utils';
import _ from '@lodash';

function NoteListItemModel(data) {
  data = data || {};

  return _.defaults(data, {
    id: FuseUtils.generateGUID(),
    text: '',
    checked: false,
  });
}

export default NoteListItemModel;
