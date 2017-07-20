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

export const createEntry = entry = dispatch => (
  APIUtil.createEntry(entry).then(entry => (
    dispatch(receiveEntry(entry))
  ))
);

export const destroyEntry = entry = dispatch => (
  APIUtil.destroyEntry(entry).then(entry => (
    dispatch(receiveEntry(entry))
  ))
);

export const fetchEntry = entry = dispatch => (
  APIUtil.fetchEntry(entry).then(entry => (
    dispatch(receiveEntry(entry))
  ))
);

export const fetchEntries = entry = dispatch => (
  APIUtil.fetchEntries(entry).then(entry => (
    dispatch(receiveEntries(entry))
  ))
);

export const updateEntry = entry = dispatch => (
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
