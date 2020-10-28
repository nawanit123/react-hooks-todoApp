import React, { createContext } from 'react';
import todoReducer from '../reducers';
import { useLocalStorageReducer } from '../Hooks/useLocalStorageReducer';

const defaultTodos = [
  { id: 1, task: 'Mow the lawn', complete: false },
  { id: 2, task: 'Mow the lawn', complete: false },
];

export const TodosContext = createContext();
export const DispatchContext = createContext();

export const TodosProvider = (props) => {
  // const todosStuff = useTodos(defaultTodos);
  const [todos, dispatch] = useLocalStorageReducer(
    'todos',
    defaultTodos,
    todoReducer
  );
  return (
    <TodosContext.Provider value={todos}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </TodosContext.Provider>
  );
};
