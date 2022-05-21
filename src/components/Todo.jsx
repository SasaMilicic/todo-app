import React from 'react';
import { StTodo, StButton } from './style-components';

function Todo({ todos, setTodos, todo }) {
  const deleteHandler = () =>
    setTodos(todos.filter((item) => item.id !== todo.id));

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
    <StTodo style={{ opacity: todo.completed ? 0.4 : '' }}>
      <li>
        <p style={{ textDecoration: todo.completed ? 'line-through' : '' }}>
          {todo.text}
        </p>
        <div>
          <StButton onClick={completeHandler}> &#10004; </StButton>
          <StButton onClick={deleteHandler}> X </StButton>
        </div>
      </li>
    </StTodo>
  );
}

export default Todo;
