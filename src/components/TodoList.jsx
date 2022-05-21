import React from 'react';
import { StTodoList } from './todo-list-style';
import Todo from './Todo';

function TodoList({ todos }) {
  return (
    <StTodoList>
      <ul>
        {todos.map(({ id, ...todo }) => (
          <Todo key={id} text={todo.text} />
        ))}
      </ul>
    </StTodoList>
  );
}

export default TodoList;
