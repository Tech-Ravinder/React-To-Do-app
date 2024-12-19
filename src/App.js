import { Table, TableCell, TableHead, TableRow, TableBody, TextField, Button, MenuItem } from '@mui/material';
import React, { useState } from 'react';

const App = () => {
  // Array of weekdays to represent each day of the week
  const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  
  // State to hold todos for each day of the week, initialized as an array of empty arrays
  const [todos, setTodos] = useState(Array(weekdays.length).fill([]));
  // State to hold input values for each day's todo input field
  const [inputValues, setInputValues] = useState(Array(weekdays.length).fill(''));

  // Function to handle changes in the input field
  const handleInputChange = (event, index) => {
    // Create a new array of input values to avoid mutating state directly
    const newInputValues = [...inputValues];
    // Update the input value for the specific day using the index
    newInputValues[index] = event.target.value;
    // Set the new input values state
    setInputValues(newInputValues);
  }

  // Function to add a todo item for a specific day
  const handleAddTodo = (index) => {
    // Create a new array of todos to avoid mutating state directly
    const newTodos = [...todos];
    // Add the new todo item to the specific day's todo list
    newTodos[index] = [...newTodos[index], inputValues[index]];
    // Update the todos state
    setTodos(newTodos);
    // Clear the input field for that day after adding the todo
    setInputValues(prev => {
      const newInputValues = [...prev];
      newInputValues[index] = ''; // Clear the input after adding
      return newInputValues;
    });
  }

  // Function to delete a specific todo item from a specific day
  const handleDeleteTodo = (dayIndex, todoIndex) => {
    // Create a new array of todos to avoid mutating state directly
    const newTodos = [...todos];
    // Remove the todo item at the specified index for the specified day
    newTodos[dayIndex].splice(todoIndex, 1);
    // Update the todos state
    setTodos(newTodos);
  }

  return (
    <div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Weekday</TableCell>
            <TableCell>To-Do List</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {weekdays.map((day, dayIndex) => (
            // Each row represents a day of the week
            <TableRow key={dayIndex}>
              <TableCell>{day}</TableCell>
              <TableCell>
                <TextField
                  value={inputValues[dayIndex]} // Bind input value to the corresponding day's input state
                  onChange={(event) => handleInputChange(event, dayIndex)} // Handle input change
                  placeholder="Add a task"
                />
                <Button onClick={() => handleAddTodo(dayIndex)}>Add</Button> {/* Add todo for the specific day */}
                {todos[dayIndex].map((item, todoIndex) => (
                  // Each todo item for the specific day
                  <MenuItem key={todoIndex}>
                    {item} {/* Display the todo item */}
                    <Button onClick={() => handleDeleteTodo(dayIndex, todoIndex)}>Delete</Button> {/* Delete button for the todo item */}
                  </MenuItem>
                ))}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default App;