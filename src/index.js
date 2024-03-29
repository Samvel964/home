import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import store from './app/store';
import { Provider } from 'react-redux';
import ScrollToTop from './scrollToTop';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
    <React.StrictMode>
      <Provider store={store}>
         <BrowserRouter>
            <ScrollToTop />
            <App />
         </BrowserRouter>
       </Provider>
    </React.StrictMode>
);

reportWebVitals();
