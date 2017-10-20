import * as APIUtil from '../util/bookmark_api_util';

export const TOGGLE_BOOKMARK = 'TOGGLE_BOOKMARK';
export const RECEIVE_BOOKMARKS = 'RECEIVE_BOOKMARKS';
export const DELETE_BOOKMARK = 'DELETE_BOOKMARK';

export const toggleBookmark = bookmark => ({
  type: TOGGLE_BOOKMARK,
  bookmark,
});

export const receiveBookmarks = allBookmarks => ({
  type: RECEIVE_BOOKMARKS,
  allBookmarks,
});

export const deleteBookmark = id => ({
  type: DELETE_BOOKMARK,
  current: id,
});

export const createBookmark = bookmark => dispatch => (
  APIUtil.createBookmark(bookmark).then(bookmark => (
    dispatch(toggleBookmark(bookmark))
  ))
);

export const fetchBookmarks = userId => dispatch => (
  APIUtil.fetchBookmarks(userId).then(bookmarks => (
    dispatch(receiveBookmarks(bookmarks))
  ))
);

export const destroyBookmark = bookmark => dispatch => (
  APIUtil.destroyBookmark(bookmark).then(bookmark => (
    dispatch(toggleBookmark(bookmark))
  ))
);
