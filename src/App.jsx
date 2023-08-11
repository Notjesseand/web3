import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import './App.css'
import ErrorModal from './Components/ErrorModal'
import Landing from './Components/Landing';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="error" element={<ErrorModal />} />
        {/* <Route path="contact" element={<Contact />} /> */}
      </Routes>
      {/* <ErrorModal /> */}
    </>
  );
}

export default App
