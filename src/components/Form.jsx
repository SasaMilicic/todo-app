import React from 'react';
import { StForm } from './form-style.js';

const getRandomID = () => Math.random().toString(36).slice(2);
const newTodoItem = (someText) => {
  return { text: someText, completed: false, id: getRandomID() };
};

function Form({ inputText, setInputText, todos, setTodos, setStatus }) {
  const inputTextHandle = (e) => {
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([...todos, newTodoItem(inputText)]);
    setInputText('');
  };

  const statusHandler = (e) => {
    console.log(e.target.value);
    setStatus(e.target.value);
  };

  return (
    <StForm>
      <input onChange={inputTextHandle} type="text" value={inputText} />
      <button onClick={submitTodoHandler} type="submit">
        Add
      </button>
      <div>
        <select onChange={statusHandler} name="todos">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </StForm>
  );
}

export default Form;
