import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { SnackbarProvider }from 'notistack';


// the three in maxSnack means that maximum number of snackbars notifications that are allowed to be displayed
//APP is the main App component that contains the enter application

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <SnackbarProvider maxSnack={3}>
      <App />
    </SnackbarProvider>
  </BrowserRouter>
);