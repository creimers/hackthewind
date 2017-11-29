import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk';

import Theme from './utils/theme';

import rootReducer from './ducks'

let store = createStore(
  rootReducer,
  applyMiddleware(logger, thunk)
);

const Root = () => (
  <Provider store={store}>
    <Theme>
      <App />
    </Theme>
  </Provider>
);

ReactDOM.render(<Root />, document.getElementById('root'));
