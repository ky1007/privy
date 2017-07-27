// import * as APIUtil from '../util/user_api_util';

export const RECEIVE_USERS = 'RECEIVE_USERS';
export const RECEIVE_USER = 'RECEIVE_USER';

export const receiveUsers = allUsers => ({
  type: RECEIVE_USERS,
  allUsers,
});

export const receiveUser = current => ({
  type: RECEIVE_USERS,
  current,
});

export const fetchUser = id => dispatch => (
  APIUtil.fetchUser(id).then(user => (
    dispatch(receiveUser(user))
  ))
);

export const fetchUsers = searchCriteria => dispatch => (
  APIUtil.fetchUser(searchCriteria).then(users => (
    dispatch(receiveUser(users))
  ))
);
