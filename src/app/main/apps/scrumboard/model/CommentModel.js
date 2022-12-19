import FuseUtils from '@fuse/utils';
import getUnixTime from 'date-fns/getUnixTime';
import _ from '@lodash';

function CommentModel(data) {
  data = data || {};

  return _.defaults(data, {
    id: FuseUtils.generateGUID(),
    type: 'comment',
    idMember: null,
    message: '',
    time: getUnixTime(new Date()),
  });
}

export default CommentModel;
