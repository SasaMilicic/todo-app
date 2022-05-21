import React from 'react';
import { StForm, StButton } from './style-components';

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

  const statusHandler = (e) => setStatus(e.target.value);

  return (
    <StForm>
      <section>
        <input onChange={inputTextHandle} type="text" value={inputText} />
        <StButton onClick={submitTodoHandler} type="submit">
          +
        </StButton>
      </section>

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
