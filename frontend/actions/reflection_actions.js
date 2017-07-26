import * as APIUtil from '../util/reflection_api_util';

export const RECEIVE_REFLECTION = 'RECEIVE_REFLECTION';
export const RECEIVE_REFLECTIONS = 'RECEIVE_REFLECTIONS';

export const receiveReflection = current => ({
  type: RECEIVE_REFLECTION,
  current,
});

export const receiveReflections = allReflections => ({
  type: RECEIVE_REFLECTIONS,
  allReflections,
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
    dispatch(receiveReflection(reflection))
  ))
);

