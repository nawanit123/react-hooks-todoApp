import React from 'react';
import useToggleState from './Hooks/useToggle';
import EditTodoForm from './EditTodoForm';
import {
  ListItem,
  ListItemText,
  Checkbox,
  IconButton,
  ListItemSecondaryAction,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

function Todo({ task, id, complete, removeTodo, toggleTodo, editTodo }) {
  const [isEditing, toggle] = useToggleState(false);

  return (
    <ListItem style={{ height: '64px' }}>
      {isEditing ? (
        <EditTodoForm
          id={id}
          task={task}
          editTodo={editTodo}
          toggleEditForm={toggle}
        />
      ) : (
        <>
          <Checkbox
            tabIndex={-1}
            checked={complete}
            onClick={() => toggleTodo(id)}
          />
          <ListItemText
            style={{ textDecoration: complete ? 'line-through' : 'none' }}
          >
            {task}
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton aria-label="Delete" onClick={() => removeTodo(id)}>
              <DeleteIcon />
            </IconButton>
            <IconButton aria-label="Edit" onClick={() => toggle(id)}>
              <EditIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </>
      )}
    </ListItem>
  );
}

export default Todo;
