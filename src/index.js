import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { BrowserRouter } from 'react-router-dom';
import { ScrollToTop } from './components';
import { Provider } from 'react-redux';
import { store } from './redux/store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store = {store}>
         <ScrollToTop/>
        
             <App />    
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
);


