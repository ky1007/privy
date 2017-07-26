import merge from 'lodash/merge';
import { RECEIVE_REFLECTIONS, RECEIVE_REFLECTION } from '../actions/reflection_actions';

const initialState = {
  allReflections: null,
  current: null,
};

const reflectionReducer = (state = initialState, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_REFLECTIONS:
      const reflections = { allReflections: action.allReflections };
      return merge({}, state, reflections);

    case RECEIVE_REFLECTION:
      console.log(action, 'action');
      return merge({}, state, { current: action.current });

    default:
      return state;
  }
};

export default reflectionReducer;
