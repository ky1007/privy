import * as APIUtil from '../util/bookmark_api_util';

export const RECEIVE_BOOKMARKS = 'RECEIVE_BOOKMARKS';
export const DELETE_BOOKMARK = 'DELETE_BOOKMARK';

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
    dispatch(receiveBookmarks(bookmark))
  ))
);

export const destroyBookmark = id => dispatch => (
  APIUtil.createBookmark(id).then(bookmark => (
    dispatch(deleteBookmark(bookmark))
  ))
);

