import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';

import HomeScreen from './Pages/HomeScreen';
import Score from './Pages/Score';
import Questions  from './Pages/Questions';
import { useState } from 'react';
import axios from 'axios';


function App() {

const [questions, setQuestions] = useState()
const [score, setScore] = useState(0)

const fetchQuestions  = async(category = '',difficulty = '') => {
  const { data } = await axios.get
  (`https://opentdb.com/api.php?amount=10${category 
  &&`&category=${category}`}${difficulty &&
   `&difficulty=${difficulty}`}&type=multiple`)

   setQuestions(data.results);
   setScore(0);
}



  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <Routes>
          <Route path="/" element={<HomeScreen 
          fetchQuestions={fetchQuestions}/>} />
          
          <Route path="/questions" element={
            <Questions 
              questions={questions}
              score={score}
              setScore={setScore}
              setQuestions={setQuestions}/>}
            />
          
          <Route path="/score" element={<Score score={score} />} />
      </Routes>
    </div>
    
    </BrowserRouter>
  );
}

export default App;
