import FuseUtils from '@fuse/utils';
import _ from '@lodash';

function CardModel(data) {
  data = data || {};

  return _.defaults(data, {
    id: FuseUtils.generateGUID(),
    name: '',
    description: '',
    idAttachmentCover: '',
    idMembers: [],
    idLabels: [],
    attachments: [],
    subscribed: true,
    checklists: [],
    checkItems: 0,
    checkItemsChecked: 0,
    comments: [],
    activities: [],
    due: '',
  });
}
export default CardModel;
