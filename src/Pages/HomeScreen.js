import React from 'react'
import './HomeScreen.css'
import { Button, MenuItem, TextField } from '@mui/material'
import Categories from '../API/Categories'
const HomeScreen = () => {

  
  return (
    <div className='homescreen'>
      <div className='options'>
        <span style={{fontSize: 20}}></span>

        <div className='options-selection'>

          <TextField 
            select
            label="Select Category"
            variant='outlined' style={{marginBottom: 30}}>

          {Categories.map((category) => (
              <MenuItem key={category.category} value={category.value}>
                {category.category}
              </MenuItem>
          ))}
          </TextField>

          <TextField
            select
            label="Select Difficulty"
            variant='outlined' style={{marginBottom: 30}}>

            
          
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

          <Button variant='contained' color='primary' size='large'>
            Start New Trivia!
          </Button>
          
        </div>
      
      
      
      
      
      </div>
      <img src='./Artboard1.png' className='clouds' alt='cloudpicture'/>

      

      

      
    </div>
  )
}

export default HomeScreen