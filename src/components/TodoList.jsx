import React from 'react';
import { StTodoList } from './todo-list-style';
import Todo from './Todo';

function TodoList() {
  return (
    <StTodoList>
      <ul>
        <Todo />
        <Todo />
        <Todo />
        <Todo />
        <Todo />
        <Todo />
      </ul>
    </StTodoList>
  );
}

export default TodoList;
