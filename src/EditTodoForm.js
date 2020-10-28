import React, { useContext } from 'react';
import useInputState from './Hooks/useInputState';
import { DispatchContext } from './contexts/todos.context';
import { TextField } from '@material-ui/core';

function EditTodoForm({ id, task, toggleEditForm }) {
  const [value, handleChange, reset] = useInputState(task);
  const dispatch = useContext(DispatchContext);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch({ type: 'EDIT', id, task: value });
        reset();
        toggleEditForm();
      }}
      style={{
        marginLeft: '1rem',
        width: '50%',
      }}
    >
      <TextField
        value={value}
        onChange={handleChange}
        margin="normal"
        fullWidth
        autoFocus
      />
    </form>
  );
}

export default EditTodoForm;
