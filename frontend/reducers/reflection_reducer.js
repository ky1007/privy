import merge from 'lodash/merge';
import { RECEIVE_REFLECTIONS, RECEIVE_REFLECTION, DELETE_REFLECTION } from '../actions/reflection_actions';

const initialState = {
  allReflections: null,
  current: null,
};

const reflectionReducer = (state = initialState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_REFLECTIONS:
      const reflections = { allReflections: action.allReflections };
      return merge({}, state, reflections);

    case RECEIVE_REFLECTION:
      const allReflections = merge({}, state.allReflections);
      allReflections[action.current.id] = action.current;
      return merge({}, state, {
        current: action.current,
        allReflections,
      });

    case DELETE_REFLECTION:
      const newState = Object.assign({}, state);
      delete newState.allReflections[action.reflection.id];
      return newState;

    default:
      return state;
  }
};

export default reflectionReducer;
