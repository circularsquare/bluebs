import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';

import { Provider } from 'react-redux'
import { createStore } from 'redux'

import App from './containers/App';
import rootReducer from './reducers'
import {initState} from './initialState.js'

const container = document.createElement('div');
document.body.appendChild(container)


var state = Object.assign({}, initState)
const store = createStore(rootReducer, state)

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  container
)



//import * as serviceWorker from './serviceWorker';
//serviceWorker.unregister(); note i deleted the serviceworker
