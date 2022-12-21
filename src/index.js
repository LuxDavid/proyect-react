import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {router} from './router';
import { CartContextProvider } from './context/cartContext';

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBBQpCml3n8JuM8DaoRNbKQ4zpF4xz_Keg",
  authDomain: "flash-video-game.firebaseapp.com",
  projectId: "flash-video-game",
  storageBucket: "flash-video-game.appspot.com",
  messagingSenderId: "192536535626",
  appId: "1:192536535626:web:7b529da380a510b049fcb3"
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
