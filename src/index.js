import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from './reducers';
 
ReactDOM.render(
  <React.StrictMode>
    <Provider store={createStore(reducers)}>
         <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
