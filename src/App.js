import { Button, MenuItem, TextField, Typography, Box } from '@mui/material'
import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const App = () => {
  const [Todo, setTodo] = useState([])
  const [ToDoValue, setTodoValue] = useState('')

  const handleInputChange = (event) => {
    setTodoValue(event.target.value)
  }

  const handleAddTodo = () => {
    if (ToDoValue.trim() !== '') {
      setTodo([...Todo, ToDoValue]);
      setTodoValue('');
    }
  };

  const handleDeleteTodo = (key) => {
    let newList = [...Todo]
    newList.splice(key, 1)
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