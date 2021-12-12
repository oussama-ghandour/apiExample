import React from 'react';
import ReactDOM from 'react-dom';
import store from './Redux/store';
import App from './App';
import {Provider} from 'react-redux'
import { BrowserRouter  } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);


