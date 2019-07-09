import React from 'react';
import { render } from 'react-dom';
import ReactDOM from 'react-dom';
import App from './components/App';
//import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'

const store = createStore(rootReducer)

const container = document.createElement('div');
document.body.appendChild(container)
render(<App />, container);

//serviceWorker.unregister(); note i deleted the serviceworker
