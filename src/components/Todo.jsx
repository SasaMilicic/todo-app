import React from 'react';
import { StTodo } from './todo-style';

function Todo({ todos, setTodos, todo: { id, text } }) {
  const deleteHandler = () => setTodos(todos.filter((el) => el.id !== id));

  const completeHandler = () => {
    console.log('complete');
  };

  return (
    <StTodo>
      <li>{text}</li>
      <button onClick={completeHandler}> Complete </button>
      <button onClick={deleteHandler}> Delete </button>
    </StTodo>
  );
}

export default Todo;
