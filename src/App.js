import { Button, MenuItem, TextField, Typography, Box } from '@mui/material'
import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const App = () => {
  const [Todo, setTodo] = useState([]) //state for the list of todos  
  const [ToDoValue, setTodoValue] = useState('')  // state for current value of the input field



  // function to handle change in input field
  const handleInputChange = (event) => {
    // update the todovalue with current input value
    setTodoValue(event.target.value)
  }


  //function to add a new todo item
  const handleAddTodo = () => {
    //uodate the todo state by adding current todovalue to the existing list
      setTodo([...Todo, ToDoValue]);

      // clear the input by resetting todovalue to empty
      setTodoValue('');
    
  };


  // function to delete to do item
  const handleDeleteTodo = (key) => {
    // create a new list by copying the existing todo array
    let newList = [...Todo]
    //remove the item from specified index
    newList.splice(key, 1)
    // update the new todo state with the new list after deletation 
    setTodo([...newList])
  }

  return (
    <Box sx={{ maxWidth: 400, margin: 'auto', padding: 2, backgroundColor: '#f5f5f5', borderRadius: 2 }}>
      <Typography variant='h3' sx={{ textAlign: 'center', marginBottom: 2 }}>Remaining Works To Do</Typography>
      <TextField
        type="text"
        value={ToDoValue}
        onChange={handleInputChange}
        placeholder="Enter New Text"
        fullWidth
        sx={{ marginBottom: 2 }}
      />
      <Button 
        onClick={handleAddTodo} 
        variant="contained" 
        color="primary" 
        fullWidth
        sx={{ marginBottom: 2 }}
      >
        Add
      
      <AddIcon/>
      </Button>
      {Todo.map((item, index) => (
        <MenuItem key={index} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography>{item}</Typography>
          <Button onClick={() => handleDeleteTodo(index)} color="secondary">Delete <DeleteOutlineIcon/></Button>
        </MenuItem>
      ))}
    </Box>
    
  )
}

export default App