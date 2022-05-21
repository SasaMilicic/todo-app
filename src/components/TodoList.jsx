import React from 'react';
import { StTodoList } from './style-components';
import Todo from './Todo';

function TodoList({ todos, setTodos, filteredTodos }) {
  return (
    <StTodoList>
      <ul>
        {filteredTodos.map((todo) => (
          <Todo todos={todos} setTodos={setTodos} key={todo.id} todo={todo} />
        ))}
      </ul>
    </StTodoList>
  );
}

export default TodoList;
