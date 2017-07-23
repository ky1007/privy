import merge from 'lodash/merge';

import { RECEIVE_ENTRIES, RECEIVE_ENTRY } from '../actions/entry_actions';

// WHAT ACTION LOOKS LIKE COMING IN
// {
//   allEntries: {
//     id: 1,
//     moreStuff: 2,
//   }
//   current: {
//     id: 1,
//     moreStuff: 1,
//   }
// }

const entryReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ENTRIES:
      const entries = { allEntries: action.allEntries };
      return merge({}, state, entries);
    case RECEIVE_ENTRY:
      return merge({}, state, { current: action.current });
    default:
      return state;
  }
};

export default entryReducer;