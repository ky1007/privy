import React from 'react';

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

// ajax TESTED TO WORK, state works!
export const createEntry = entry => dispatch => (
  APIUtil.createEntry(entry).then(entry => (
    dispatch(receiveEntry(entry))
  ))
);

// ajax TESTED TO WORK (only returns 1?), same with state (only returns 1)!
export const fetchEntries = entry => dispatch => (
  APIUtil.fetchEntries(entry).then(entry => (
    dispatch(receiveEntries(entry))
  ))
);

// ajax TESTED TO WORK, same with state! USED: dispatch(fetchEntry(2));
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

// untested, will test after React components are built
export const updateEntry = entry => dispatch => (
  APIUtil.updateEntry(entry).then(entry => (
    dispatch(receiveEntry(entry))
  ))
);

// QUESTION: good practice to catch errors here or no?
// export const createEntry = entry => dispatch => (
//   APIUtil.createEntry(entry).then(entry => (
//     dispatch(receieveEntry(entry))
//   ), err => (
//     dispatch(receiveErrors(err.responseJSON))
//   ))
// );

// TEMP - for testing
window.createEntry = createEntry;
window.fetchEntry = fetchEntry;
window.destroyEntry = destroyEntry;
window.fetchEntries = fetchEntries;
window.fetchEntry = fetchEntry;

export const tentry = {
  title: "hey",
  general: "hey",
  gratitude: "hey",
  improvements: "hey",
  writer_id: 1,
  image_url: "hey",
  public: true,
};

export const findrr = {
  entry: {
    writer_id: 1,
  }
};

window.tentry = tentry;
window.findrr = findrr;

// dispatch(createEntry(tentry));
// dispatch(fetchEntry(2));
// dispatch(fetchEntries());
// dispatch(fetchEntries({writer_id: 1}));
// dispatch(destroyEntry(3));

// TEMP END