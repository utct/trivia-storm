import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomeScreen from './Pages/HomeScreen';
import Score from './Pages/Score';
import Questions  from './Pages/Questions';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  






  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <Routes>
          <Route path="/" element={<HomeScreen/>} />
          <Route path="/questions" element={<Questions />} />
          <Route path="/score" element={<Score />} />
      </Routes>
    </div>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
