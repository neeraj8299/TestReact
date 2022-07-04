import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducer from './Reducers/ContactReducer';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
const store = createStore(reducer, applyMiddleware(reduxThunk));

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
