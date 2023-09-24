import React, { useState } from 'react'
import './Question.css'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import he from 'he';


const Question = ({currentQuestion, choice, score,
    correctAnswer, setCurrentQuestion, questions, setScore}) => {
    const [selectedChoice, setSelectedChoice] = useState()
    const [error, setError] = useState(false)
    const navigate = useNavigate();
    const [lives, setLives] = useState(3); 

    // See if the choice is correct, incorrect or unselected
    const handleSelection = (i) => {
        if(selectedChoice === correctAnswer && selectedChoice ===i){
            return 'true'
        } else if(selectedChoice === i && selectedChoice !== correctAnswer){
            return 'false'
        } else if(i === correctAnswer){
            return 'true'
        }
    }
    // Update score and lives
    const handleCheck = (i) => {
        setSelectedChoice(i)
        if (i === correctAnswer){
            setScore(score + 1)
            setError(false)
        } else {
            setError(true)
            setLives((prevLives) => prevLives - 1);
        if (lives === 1) {
            setError(true) 
        }
        }
    }
    // End the quiz or go to the next question
    const goToNextQuestion = (i) => {
        if (currentQuestion > 8){
            navigate("/score")
        } else if (selectedChoice){
            setCurrentQuestion(currentQuestion+1)
            setSelectedChoice()
            setError(false)
        } else {
            setError(true)
        }
    }

    const returnToHome = () => {
        navigate('/'); 
    };

    // Display the remaining lives with hearts
    const generateHeartEmojis = () => {
        const hearts = [];
        for (let i = 0; i < lives; i++) {
            if (i < lives) {
            hearts.push('\u{1F499}')
        }    
    }
    return hearts;
    }


    return (
        <div className='qnumber'>
            <div className="lives">Lives: {generateHeartEmojis()}</div>
            <h1>Question {currentQuestion +1 }/10</h1>
        
            <div className='q'>
                <span>
                {he.decode(questions[currentQuestion].question)}
                </span> 

                <div className='choiceSelect'>
                    {choice &&choice.map((i) => (
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
                    disabled={(error && lives === 0) || !selectedChoice} 
                    >{currentQuestion === 9 ? 'Finish Quiz' : 'Next Question'}
                </Button>
            </div>
        </div>
    </div>
    
  )
}

export default Question