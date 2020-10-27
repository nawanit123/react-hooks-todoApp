import React from 'react';
import { Paper, AppBar, Toolbar, Typography, Grid } from '@material-ui/core';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import { TodosProvider } from './contexts/todos.context';
import 'fontsource-roboto';

function TodoApp(props) {
  // const initialTodos = [{ id: 1, task: 'Pet a monkey', complete: false }];

  return (
    <Paper
      style={{
        height: '100vh',
        margin: '0',
        padding: '0',
        backgroundColor: 'white',
      }}
      elevation={0}
    >
      <AppBar color="primary" position="static" style={{ height: '64px' }}>
        <Toolbar>
          <Typography color="inherit">REACT HOOKS TODO</Typography>
        </Toolbar>
      </AppBar>
      <Grid container justify="center" style={{ marginTop: '1rem' }}>
        <Grid item xs={11} md={8} lg={4}>
          <TodosProvider>
            <TodoForm />
            <TodoList />
          </TodosProvider>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default TodoApp;
