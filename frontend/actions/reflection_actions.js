import * as APIUtil from '../util/reflection_api_util';

export const RECEIVE_REFLECTION = 'RECEIVE_REFLECTION';
export const RECEIVE_REFLECTIONS = 'RECEIVE_REFLECTIONS';
export const CLEAR_REFLECTIONS = 'CLEAR_REFLECTIONS';
export const DELETE_REFLECTION = 'DELETE_REFLECTION';

export const receiveReflection = current => ({
  type: RECEIVE_REFLECTION,
  current,
});

export const receiveReflections = allReflections => ({
  type: RECEIVE_REFLECTIONS,
  allReflections,
});

export const clearReflections = () => ({
  type: RECEIVE_REFLECTIONS,
  allReflections: null,
});

export const deleteReflection = id => ({
  type: DELETE_REFLECTION,
  reflection: id,
});

export const createReflection = reflection => dispatch => (
  APIUtil.createReflection(reflection).then(reflection => (
    dispatch(receiveReflection(reflection))
  ))
);

export const fetchReflections = reflection => dispatch => (
  APIUtil.fetchReflections(reflection).then(reflection => (
    dispatch(receiveReflections(reflection))
  ))
);

export const destroyReflection = id => dispatch => (
  APIUtil.destroyReflection(id).then(reflection => (
    dispatch(deleteReflection(reflection))
  ))
);

