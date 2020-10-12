import React from 'react';
import { Paper, TextField } from '@material-ui/core';
import useInputState from './Hooks/useInputState';
function TodoForm(props) {
  const [value, handleChange, reset] = useInputState('');
  const { addTodo } = props;
  return (
    <Paper style={{ margin: '1rem 0', padding: '0 1rem' }}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTodo(value);
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
