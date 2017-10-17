import merge from 'lodash/merge';

import { RECEIVE_BOOKMARKS, DELETE_BOOKMARK } from '../actions/bookmark_actions';

const bookmarkReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    // case TOGGLE_BOOKMARK:
    //   const bookmarks = action.allBookmarks;
    //   for (const key in bookmarks) {
    //     if (!validation_messages)
    //   }

    case RECEIVE_BOOKMARKS:
      return merge({}, state, { allBookmarks: action.current });
    
    case DELETE_BOOKMARK:
      const newState = merge({}, state);
      delete newState.allBookmarks;
      return newState;

    default:
      return state;
  }
};

export default bookmarkReducer;
