import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from  "redux";
import './index.css';
import App from "./containers/App";
import reportWebVitals from './reportWebVitals';
import "tachyons";
import { searchRobots, requestRobots } from "./reducers";
import  { createLogger } from "redux-logger";
import  ThunkMiddleware  from "redux-thunk";

const logger = createLogger();
const rootReducer = combineReducers({ searchRobots, requestRobots });
const store = createStore(rootReducer, applyMiddleware(ThunkMiddleware, logger));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
