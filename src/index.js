import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {router} from './router';
import { CartContextProvider } from './context/cartContext';

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCmpaAOhJj7UQhBh6L0NB_drDWfWkGrLDQ",
  authDomain: "proyecto-final-react-28ad5.firebaseapp.com",
  projectId: "proyecto-final-react-28ad5",
  storageBucket: "proyecto-final-react-28ad5.appspot.com",
  messagingSenderId: "235434045786",
  appId: "1:235434045786:web:ae903ef0435693f86b0363"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartContextProvider>
    <RouterProvider router={router}/>
    </CartContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
