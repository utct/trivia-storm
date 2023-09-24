import { Button } from '@mui/material'
import React from 'react'
import './Score.css'

const Score = ({score, difficulty, bonusPoints}) => {  
  return (
    <div className='score'>
      <img src='./Artboard1.png' className='cloud' alt='cloudpicture' />
      <h1 className='titleScore' >You scored {score}/10.</h1>
      <h1 className='titleScore2' >Well done!</h1>
      <div className="bonusPointsContainer">
        {bonusPoints > 0 && (
          <p className="bonusPointsText">
            You played on {difficulty} difficulty and earned {bonusPoints} difficulty bonus!<br />
            <br />  Your final score added up: {score+bonusPoints}
          </p>
        )}
      </div>
    <Button href='/' className='scorePageButton' variant='outlined' size='large'>
      Go Back To Homepage
    </Button>
    </div>
  )
}

export default Score