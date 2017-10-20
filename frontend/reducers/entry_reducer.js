import merge from 'lodash/merge';

import { RECEIVE_ENTRIES, RECEIVE_ENTRY, DELETE_ENTRY } from '../actions/entry_actions';
import { TOGGLE_BOOKMARK } from '../actions/bookmark_actions';

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
      return entries;
    
    case RECEIVE_ENTRY:
      return merge({}, state, { current: action.current });
    
    case DELETE_ENTRY:
      const newState = merge({}, state);
      delete newState.current;
      delete newState.allEntries[action.current.id];
      return newState;

    case TOGGLE_BOOKMARK:
      const bookmarkState = merge({}, state);
      bookmarkState.allEntries[action.bookmark.entry_id].bookmarked = action.bookmark.bookmarked;
      return bookmarkState;

    default:
      return state;
  }
};

export default entryReducer;
