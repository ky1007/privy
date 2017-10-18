import merge from 'lodash/merge';

import { RECEIVE_ENTRIES, RECEIVE_ENTRY, DELETE_ENTRY } from '../actions/entry_actions';
import { RECEIVE_FOLLOW } from '../actions/follow_actions';

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

    case RECEIVE_FOLLOW:
      const followState = state;
      followState.allEntries[action.following.entry_id].writer_info.following = action.follow.following;
      return followState;

    // case TOGGLE_BOOKMARK:
    //   const bookmarks = action.allBookmarks;
    //   for (const key in bookmarks) {
    //     if (!validation_messages)
    //   }

    default:
      return state;
  }
};

export default entryReducer;
