import React, { useContext } from 'react';
import { Paper, TextField } from '@material-ui/core';
import useInputState from './Hooks/useInputState';
import { DispatchContext } from './contexts/todos.context';
function TodoForm(props) {
  const [value, handleChange, reset] = useInputState('');
  const dispatch = useContext(DispatchContext);
  console.log('TodoForm render');
  return (
    <Paper style={{ margin: '1rem 0', padding: '0 1rem' }}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({ type: 'ADD', task: value });
          reset();
        }}
      >
        <TextField
          value={value}
          onChange={handleChange}
          margin="normal"
          label="Add to do"
          fullWidth
        />
      </form>
    </Paper>
  );
}

export default TodoForm;
