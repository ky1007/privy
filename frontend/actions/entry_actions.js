import * as APIUtil from '../util/entry_api_util';

export const RECEIVE_ENTRIES = 'RECEIVE_ENTRIES';
export const RECEIVE_ENTRY = 'RECEIVE_ENTRY';
export const DELETE_ENTRY = 'DELETE_ENTRY';

export const receiveEntries = allEntries => ({
  type: RECEIVE_ENTRIES,
  allEntries,
});

export const receiveEntry = current => ({
  type: RECEIVE_ENTRY,
  current,
});

export const deleteEntry = id => ({
  type: DELETE_ENTRY,
  current: id,
});

// --- ENTRY ACTIONS ---
export const createEntry = entry => dispatch => (
  APIUtil.createEntry(entry).then(entry => (
    dispatch(receiveEntry(entry))
  ))
);

export const fetchEntries = entry => dispatch => (
  APIUtil.fetchEntries(entry).then(entry => (
    dispatch(receiveEntries(entry))
  ))
);

export const fetchFeedEntries = id => dispatch => (
  APIUtil.fetchFeedEntries(id).then(entry => (
    dispatch(receiveEntries(entry))
  ))
);

export const fetchBookmarkedEntries = id => dispatch => (
  APIUtil.fetchBookmarkedEntries(id).then(entry => (
    dispatch(receiveEntries(entry))
  ))
);

export const fetchEntry = id => dispatch => (
  APIUtil.fetchEntry(id).then(entry => (
    dispatch(receiveEntry(entry))
  ))
);

export const destroyEntry = id => dispatch => (
  APIUtil.destroyEntry(id).then(entry => (
    dispatch(deleteEntry(entry))
  ))
);

export const updateEntry = entry => dispatch => (
  APIUtil.updateEntry(entry).then(entry => (
    dispatch(receiveEntry(entry))
  ))
);


// --- LIKE ACTIONS ---
// export const createLike = likeRequest => dispatch => (
//   APIUtil.createLike(likeRequest).then(entry => (
//     dispatch(receiveEntry(entry))
//   ))
// );

// export const destroyLike = unlikeRequest => dispatch => (
//   APIUtil.destroyLike(unlikeRequest).then(entry => (
//     dispatch(receiveEntry(entry))
//   ))
// );
