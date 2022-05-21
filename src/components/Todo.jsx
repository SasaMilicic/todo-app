import React from 'react';
import { StTodo } from './todo-style';

function Todo({ todos, setTodos, todo }) {
  const deleteHandler = () =>
    setTodos(todos.filter((item) => item.id !== todo.id));

  console.log(todo.id);

  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  return (
    <StTodo>
      <li>{todo.text}</li>
      <button onClick={completeHandler}> Complete </button>
      <button onClick={deleteHandler}> Delete </button>
    </StTodo>
  );
}

export default Todo;
