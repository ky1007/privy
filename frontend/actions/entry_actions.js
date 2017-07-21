import React from 'react';

import * as APIUtil from '../util/entry_api_util';

export const RECEIVE_ENTRIES = 'RECEIVE_ENTRIES';
export const RECEIVE_ENTRY = 'RECEIVE_ENTRY';

export const receiveEntries = (all_entries) => ({
  action: RECEIVE_ENTRIES,
  all_entries,
});

export const receiveEntry = (current) => ({
  action: RECEIVE_ENTRY,
  current,
});

// ajax TESTED TO WORK
export const createEntry = entry => dispatch => (
  APIUtil.createEntry(entry).then(entry => (
    dispatch(receiveEntry(entry))
  ))
);

// ajax TESTED TO WORK
export const fetchEntry = entry => dispatch => (
  APIUtil.fetchEntry(entry).then(entry => (
    dispatch(receiveEntry(entry))
  ))
);

// ajax TESTED TO WORK
export const destroyEntry = entry => dispatch => (
  APIUtil.destroyEntry(entry).then(entry => (
    dispatch(receiveEntry(entry))
  ))
);

// ajax TESTED TO WORK (only returns 1?)
export const fetchEntries = entry => dispatch => (
  APIUtil.fetchEntries(entry).then(entry => (
    dispatch(receiveEntries(entry))
  ))
);

// bonus test
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

window.createEntry = createEntry;
window.fetchEntry = fetchEntry;
window.destroyEntry = destroyEntry;
window.fetchEntries = fetchEntries;

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
}

window.tentry = tentry;
window.findrr = findrr;

// console.log(store.dispatch(createEntry(tentry)));

