import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './index.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Admin from './Home';

function App() {

  return (
    <div >
      <Routes>
        <Route path="/" element={<Admin />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
