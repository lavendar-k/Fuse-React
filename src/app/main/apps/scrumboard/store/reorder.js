import _ from '@lodash';

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

export default reorder;

export const reorderQuoteMap = (lists, source, destination) => {
  const current = _.find(lists, { id: source.droppableId });
  const next = _.find(lists, { id: destination.droppableId });
  const target = current.idCards[source.index];

  // moving to same list
  if (source.droppableId === destination.droppableId) {
    const reordered = reorder(current.idCards, source.index, destination.index);
    return lists.map((list) => {
      if (list.id === source.droppableId) {
        list.idCards = reordered;
      }
      return list;
    });
  }

  // moving to different list

  // remove from original
  current.idCards.splice(source.index, 1);
  // insert into next
  next.idCards.splice(destination.index, 0, target);

  return lists.map((list) => {
    if (list.id === source.droppableId) {
      return current;
    }
    if (list.id === destination.droppableId) {
      return next;
    }
    return list;
  });
};
