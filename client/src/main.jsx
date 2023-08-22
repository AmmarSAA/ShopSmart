/************************
* File Name: main.jsx   *
* Author: Ammar S.A.A   *
* Output: Main Page     *
************************/

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom'
import ContextProvider from './Context/context.jsx';
import Login_Provider from './Context/Login-Context/login-context.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Login_Provider>
      <ContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ContextProvider>
    </Login_Provider>
  </React.StrictMode>,
)
