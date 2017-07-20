import * as APIUtil from '../util/session_api_util';
import merge from 'lodash/merge';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERROR = 'RECEIVE_ERROR';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser,
});

export const receiveError = errors => ({
  type: RECEIVE_ERROR,
  errors,
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS,
});

export const login = userData => dispatch => (
  APIUtil.login(userData).then(user => (
    dispatch(receiveCurrentUser(user))
  ), err => (
    dispatch(receiveError(err.responseJSON))
  ))
);

export const signup = userData => dispatch => (
  APIUtil.signup(userData).then(user => (
    dispatch(receiveCurrentUser(user))
  ), err => (
    dispatch(receiveError(err.responseJSON))
  ))
);

export const logout = () => dispatch => (
  APIUtil.logout().then(user => (
    dispatch(receiveCurrentUser(null))
  ))
);
