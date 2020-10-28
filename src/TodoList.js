import React, { useContext } from 'react';
import { Paper, List, Divider } from '@material-ui/core';
import Todo from './Todo';
import { TodosContext } from './contexts/todos.context';

function TodoList(props) {
  const todos = useContext(TodosContext);
  if (todos.length)
    return (
      <Paper>
        <List>
          {todos.map((todo, i) => (
            <React.Fragment key={todo.id}>
              <Todo {...todo} key={todo.id} complete={todo.complete} />
              {i < todos.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </List>
      </Paper>
    );
  return null;
}

export default TodoList;
