import merge from 'lodash/merge';

import { RECEIVE_USERS, RECEIVE_USER } from '../actions/user_actions';
import { RECEIVE_FOLLOW } from '../actions/follow_actions';
import { RECEIVE_ENTRIES } from '../actions/entry_actions';

const userReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ENTRIES:
      const writers = { allUsers: action.allEntries.writers };
      return writers;

    case RECEIVE_USERS:
      const users = { allUsers: action.allUsers };
      return users;

    case RECEIVE_USER:
      const userState = { allUsers: action.allUsers };
      return merge({}, state, userState);

    case RECEIVE_FOLLOW:
      const newState = merge({}, state);
      console.log(newState, 'ACTION');
      newState.allUsers[action.follow.user_id].following = action.follow.following;
      return newState;

    default:
      return state;
  }
};

export default userReducer;
