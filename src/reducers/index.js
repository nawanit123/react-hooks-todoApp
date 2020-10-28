import { v4 as uuidv4 } from 'uuid';

export default (state, action) => {
  switch (action.type) {
    case 'ADD':
      return [...state, { id: uuidv4(), task: action.task, complete: false }];
    case 'REMOVE':
      return state.filter((todo) => todo.id !== action.id);
    case 'TOGGLE':
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, complete: !todo.complete } : todo
      );
    case 'EDIT':
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, task: action.task } : todo
      );
    default:
      return state;
  }
};
