import React, { useState } from 'react'
import './HomeScreen.css'
import { Button, MenuItem, TextField } from '@mui/material'
import Categories from '../API/Categories'
import { useNavigate } from 'react-router-dom'
import ErrorHandle from '../components/ErrorHandle'

const HomeScreen = ({fetchQuestions}) => {

  const [category, setCategory] = useState("")
  const [difficulty, setDiff] = useState("")
  const [error, setError] = useState(false)

  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!category || !difficulty) {
      setError(true)
      return
    }
    else{
      fetchQuestions(category,difficulty)
      navigate('/questions')
    }

  };


  
  return (
    <div className='homescreen'>
      <div className='options'>
        <span style={{fontSize: 20}}></span>

        <div className='options-selection'>
          

          <TextField 
            select
            label="Select Category"
            variant='outlined' style={{marginBottom: 30}}
            onChange = {(e) => setCategory(e.target.value)}
            value = {category}>

          {Categories.map((category) => (
              <MenuItem key={category.category} value={category.value}>
                {category.category}
              </MenuItem>
          ))}
          </TextField>

          <TextField
            select
            label="Select Difficulty"
            variant='outlined' style={{marginBottom: 30}}
            onChange = {(e) => setDiff(e.target.value)}
            value = {difficulty}>

            
          
            <MenuItem key="Easy" value="easy">
              Easy
            </MenuItem>
            <MenuItem key="Medium" value="medium">
              Medium
            </MenuItem>
            <MenuItem key="Hard" value="hard">
              Hard
            </MenuItem>
          </TextField>
          

          <Button variant='outlined' color='primary' size='large'
          onClick={handleSubmit}>
            Start New Trivia!
          </Button>
          {error && <ErrorHandle>You should pick both category and the level of difficulty.</ErrorHandle>}
        </div>
      
      
      </div>
      <img src='./Artboard1.png' className='clouds' alt='cloudpicture'/>

      

      

      
    </div>
  )
}

export default HomeScreen