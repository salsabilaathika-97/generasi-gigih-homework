import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
// import { Provider } from 'react-redux';
// import { Store } from 'redux';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import AppRouter from './router/AppRouter'

ReactDOM.render(
  <AppRouter />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();