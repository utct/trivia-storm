import React, { useState } from 'react'
import ErrorHandle from '../ErrorHandle'
import './Question.css'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import he from 'he';


const Question = ({currentQuestion, choice, score,
    correctAnswer, setCurrentQuestion, questions, setScore}) => {
    
const [selectedChoice, setSelectedChoice] = useState()
const [error, setError] = useState(false)

const handleSelection = (i) => {
    if(selectedChoice === correctAnswer && selectedChoice ===i){
        return 'true'
        }
        else if(selectedChoice === i && selectedChoice !== correctAnswer){
            return 'false'
        }
        else if(i === correctAnswer){
            return 'true'
        }
        }

const navigate = useNavigate();

const handleCheck = (i) => {
    setSelectedChoice(i)
    if (i === correctAnswer){
        setScore(score+1)
        setError(false)
    } else {
        setError('Incorrect answer!')

    }
    }

const goToNextQuestion = (i) => {
    if (currentQuestion > 5){
        navigate("/score")
    } else if (selectedChoice){
        setCurrentQuestion(currentQuestion+1)
        setSelectedChoice()
    } else {
        setError("You should pick an option")
    }
}

const returnToHome = () => {
    navigate('/'); // Navigate to home screen
  };



  return (
    <div className='qnumber'>
        <h1>Question {currentQuestion +1 }/7</h1>
        <div className='q'>
            <span>
                {he.decode(questions[currentQuestion].question)}
            </span>

            {error && <ErrorHandle>{error}</ErrorHandle>}
            <div className='choiceSelect'>
                
                
                {choice &&
                choice.map((i) => (
                <button
                    className={`singleOption  ${selectedChoice && handleSelection(i)}`}
                    key={i}
                    onClick={() => handleCheck(i)}
                    disabled={selectedChoice}
                >
                {he.decode(i)}
                </button>
            ))}
            </div>

            
            <div className='nextQ'>
                
            {error && <div className="error"></div>}
            <div className="returnToHome">
          <Button variant="outlined" 
                    onClick={returnToHome}
                    color='primary'
                    size='large'
                    style={{width: 170}}>
                    Start Over
          </Button>
            </div>
            
                <Button 
                    color='primary'
                    variant='outlined'
                    size='large'
                    style={{width: 170}}
                    onClick={goToNextQuestion}
                    disabled={error} // Disable the button if an error occurs (incorrect answer)
                    >Next Question
                </Button>

            
            
            </div>
                    
                

            </div>
        </div>
    
  )
}

export default Question