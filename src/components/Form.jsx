import React from 'react';
import { StForm } from './form-style.js';

function Form() {
  return (
    <StForm>
      <input type="text" />
      <button type="submit"> Add</button>
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
