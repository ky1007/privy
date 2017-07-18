import * as APIUtil from '../util/session_api_util';
import merge from 'lodash/merge';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERROR = 'RECEIVE_ERROR';

export const login = userData => dispatch => (
  APIUtil.login(userData).then(user => (
    dispatch(receiveCurrentUser(user))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const signup = userData => dispatch => (
  APIUtil.login(userData).then(user => (
    dispatch(receiveCurrentUser(user))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const logout = () => dispatch => (
  APIUtil.logout().then(user => (
    dispatch(receiveCurrentUser(null))
  ))
);

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveError = error => ({
  type: RECEIVE_ERROR,
  error
});
