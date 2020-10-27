import React, { createContext } from 'react';
import useTodos from '../Hooks/useTodos';

const defaultTodos = [
  { id: 1, task: 'Mow the lawn', complete: false },
  { id: 2, task: 'Mow the lawn', complete: false },
];

export const TodosContext = createContext();

export const TodosProvider = (props) => {
  const todosStuff = useTodos(defaultTodos);
  return (
    <TodosContext.Provider value={todosStuff}>
      {props.children}
    </TodosContext.Provider>
  );
};
