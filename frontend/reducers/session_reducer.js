import { RECEIVE_CURRENT_USER, RECEIVE_ERROR } from '../actions/session_actions';

const nullState = {
  currentUser: {
    user: null,
    errors: []
  }
};

const sessionReducer = (state = nullState, action) => {
  Object.freeze(state);
  let newState;

  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, nullState, action.user);
    case RECEIVE_ERROR:
      return merge({}, state, action.error);
    default:
      return state;
  }
};

export default sessionReducer;
