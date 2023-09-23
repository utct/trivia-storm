import { Button } from '@mui/material'
import React from 'react'
import './Score.css'

const Score = ({score}) => {
  
  return (
    <div className='score'>
      <img src='./Artboard1.png' className='cloud' alt='cloudpicture' />
    
    <h1 className='titleScore' >You scored {score}/7!</h1>
    <h1 className='titleScore2' >Well done!</h1>
    <Button href='/' className='scorePageButton' variant='outlined' size='large'>
      Go Back To Homepage
    </Button>
    </div>
  )
}

export default Score