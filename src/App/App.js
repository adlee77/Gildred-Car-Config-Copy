import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Exterior from '../Pages/Exterior/Exterior';
import Interior from '../Pages/Interior/Interior';
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Exterior />}></Route>
          <Route path="/interior" element={<Interior />} />
        </Routes>
      </BrowserRouter>
    <div className="bottom-page">
      <Footer />
    </div>
    </div>
  );
}

export default App;
