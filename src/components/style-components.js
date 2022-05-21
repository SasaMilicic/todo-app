import styled from 'styled-components';

export const StTodoList = styled.div`
  ul {
    padding: 0px;
  }
`;

export const StTodo = styled.div`
  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  div {
    display: flex;
    gap: 2px;
  }

  p {
    background-color: #ffffff;
    padding: 22px 0px 22px 10px;
    width: 80%;
    height: 40px; // ?
    display: flex;
    align-items: center;
    margin: 5px;
    font-size: 25px;
    border: 1px solid rgb(209, 213, 219);
    border-radius: 10px;
    box-sizing: border-box;
  }
`;

export const StForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;

  section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  input {
    width: 400px;
    font-size: 25px;
    padding: 6px 12px;
    border-radius: 10px;
  }

  select {
    font-size: 25px;
    padding: 7px 12px;
    border-radius: 10px;
  }
`;

export const StButton = styled.button`
  background-color: #ffffff;
  border: 1px solid rgb(209, 213, 219);
  border-radius: 10px;
  box-sizing: border-box;
  color: #111827;
  font-size: 30px;
  font-weight: 600;
  line-height: 20px;
  padding: 12px 16px;
  text-align: center;
  text-decoration: none #d1d5db solid;
  text-decoration-thickness: auto;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  :hover {
    background-color: rgb(249, 250, 251);
  }

  :focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
  }

  :focus-visible {
    box-shadow: none;
  }
`;
