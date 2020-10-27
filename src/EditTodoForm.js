import React, { useContext } from 'react';
import useInputState from './Hooks/useInputState';
import { TodosContext } from './contexts/todos.context';
import { TextField } from '@material-ui/core';

function EditTodoForm({ id, task, toggleEditForm }) {
  const [value, handleChange, reset] = useInputState(task);
  const { editTodo } = useContext(TodosContext);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        editTodo(id, value);
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
