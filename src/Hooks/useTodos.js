import useLocalStorage from './useLocalStorage';
import { v4 as uuidv4 } from 'uuid';

export default (initialTodos) => {
  const [todos, setTodos] = useLocalStorage('todos', initialTodos);
  return {
    todos,
    addTodo: (newTodoText) =>
      setTodos([
        ...todos,
        { id: uuidv4(), task: newTodoText, complete: false },
      ]),
    removeTodo: (removeId) =>
      setTodos(todos.filter((todo) => todo.id !== removeId)),
    toggleTodo: (todoId) =>
      setTodos(
        todos.map((todo) =>
          todo.id === todoId ? { ...todo, complete: !todo.complete } : todo
        )
      ),
    editTodo: (todoId, newTask) =>
      setTodos(
        todos.map((todo) =>
          todo.id === todoId ? { ...todo, task: newTask } : todo
        )
      ),
  };
};
