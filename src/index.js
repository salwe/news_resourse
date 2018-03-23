import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import './css/App.css';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from "react-redux";
import { store } from "./app/store";

ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  ), document.getElementById('root'));

registerServiceWorker();
