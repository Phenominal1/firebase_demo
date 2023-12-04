import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { FirebaseProvider } from './context/Firebase';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   
        <FirebaseProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </FirebaseProvider>
    
  </React.StrictMode>
);

