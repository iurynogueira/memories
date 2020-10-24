import React from "react";
import './styles/globals.scss';
import 'reactjs-popup/dist/index.css';
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from "context/auth";
import Routes from "routes";
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <AuthProvider>
      <Routes />
      <ToastContainer />
    </AuthProvider>
  );
}

export default App;
