import React from 'react';
import { StTodo } from './todo-style';

function Todo({ text }) {
  return (
    <StTodo>
      <li>{text}</li>
      <button> Complete </button>
      <button> Delete </button>
    </StTodo>
  );
}

export default Todo;
