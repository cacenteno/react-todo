import React from 'react';
import ReactDOM from 'react-dom';
import "./scss/bootstrap.scss"
import {BrowserRouter as Router} from "react-router-dom"
import { combineReducers, createStore } from "redux"
import { ToDoReducer, tokenReducer} from "./redux/reducers"
import {Provider } from "react-redux"
import App from "./components/App";
const reducers = combineReducers({
  token: tokenReducer,
  todos: ToDoReducer
})
const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() );
ReactDOM.render(
  <Provider store={store}>
  <Router>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Router>
  </Provider>,
  document.getElementById('root')
);

