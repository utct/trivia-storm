import React, { useEffect, useState } from 'react'
import './Questions.css'
import { CircularProgress } from '@mui/material'
import Question from '../components/Question/Question'

const Questions = ({score, questions, setQuestions, setScore}) => {

  const [choice, setChoice] = useState()
  const [currentQuestion, setCurrentQuestion] = useState(0)


  useEffect(() => {
    console.log(questions);

    

    setChoice(questions && incorrectCorrectMix(
      [questions[currentQuestion]?.correct_answer,
      ...questions[currentQuestion]?.incorrect_answers
    ])
  )
  }, [questions, currentQuestion])

  console.log(choice);

  const incorrectCorrectMix = (choices) => {
    return choices.sort(()=> Math.random() - 0.5)
  }

  return (
    <div className='questions'>
      

      <img src='./Artboard1.png' className='cloud' alt='cloudpicture' />

      {questions ? ( 
      <>
         <div className='quizOptions'>
          <span>{questions[currentQuestion].category}</span>
          <span className='score'>Score: {score}</span>
         </div>
         
         <Question 
         currentQuestion = {currentQuestion}
         choice = {choice}
         score = {score}
         correctAnswer = {questions[currentQuestion]?.correct_answer}
         setCurrentQuestion = {setCurrentQuestion}
         questions = {questions}
         setScore = {setScore}
         setQuestions = {setQuestions}
         />
         
         
         </>): (<CircularProgress 
         style = {{margin: 100}} size={30} thickness={4}/>)}
      </div>
  )
}

export default Questions