import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

// side-effect, not supposed to return anything
document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();

  // TEMPORARY
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
