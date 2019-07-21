import React from 'react';
import { render } from 'react-dom';
import ReactDOM from 'react-dom';
import App from './containers/App';
//import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'

import {initState} from './initialState.js'

const container = document.createElement('div');
document.body.appendChild(container)

var state = Object.assign({}, initState)

const store = createStore(rootReducer, state)






render(
  <Provider store={store}>
    <App />
  </Provider>,
  container
)

//serviceWorker.unregister(); note i deleted the serviceworker
