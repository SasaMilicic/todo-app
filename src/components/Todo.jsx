import React from 'react';
import { StTodo } from './todo-style';

function Todo() {
  return (
    <StTodo>
      <li>TODO ITEM</li>
      <button> Complete </button>
      <button> Delete </button>
    </StTodo>
  );
}

export default Todo;
