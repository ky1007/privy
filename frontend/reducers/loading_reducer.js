import { START_LOADING_ENTRIES, RECEIVE_ENTRIES } from '../actions/entry_actions';

export const initialState = {
  loadingEntries: false,
};

const loadingReducer = (state = initialState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ENTRIES:
      return Object.assign({}, state, { loadingEntries: false });
    
    case START_LOADING_ENTRIES:
      return Object.assign({}, state, { loadingEntries: true });

    default:
      return state;
  }
};

export default loadingReducer;
