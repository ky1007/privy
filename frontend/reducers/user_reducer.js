import merge from 'lodash/merge';

import { RECEIVE_USERS, RECEIVE_USER } from '../actions/user_actions';
import { RECEIVE_FOLLOW } from '../actions/follow_actions';

const userReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_USERS:
      const users = { allUsers: action.allUsers };
      return users;

    case RECEIVE_USER:
      return merge({}, state, { current: action.current });

    case RECEIVE_FOLLOW:
      const newState = merge({}, state);
      newState.current.following = action.follow.following;
      return newState;

    default:
      return state;
  }
};

export default userReducer;
