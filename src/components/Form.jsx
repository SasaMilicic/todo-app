import React from 'react';
import { StForm } from './form-style.js';

function Form({ setInputText }) {
  const inputTextHandle = (e) => {
    setInputText(e.target.value);
    // console.log(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
  };

  return (
    <StForm>
      <input onChange={inputTextHandle} type="text" />
      <button onClick={submitTodoHandler} type="submit">
        Add
      </button>
      <div>
        <select name="todos">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </StForm>
  );
}

export default Form;
