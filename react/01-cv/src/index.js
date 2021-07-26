import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import eventListeners from './functions/eventListeners'

// import {stickyNav, headerObserver} from './functions/observerMenu'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


// I have added some additional functionality to this CV, just to make it more dynamic :)  As we were not supposed to do this, I did not use React, only regular JavaScript code.

eventListeners();
  

 
