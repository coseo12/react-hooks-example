import React, { useReducer, useState } from 'react';
import { v4 as uuid } from 'uuid';

const initalState = {
  toDos: [],
};
const ADD = 'add';
const DEL = 'del';

const reducer = (state, action) => {
  switch (action.type) {
    case ADD:
      return { toDos: [...state.toDos, { text: action.payload, id: uuid() }] };
    case DEL:
      return {
        toDos: state.toDos.filter((todo) => todo.id !== action.payload),
      };
    default:
      return;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initalState);
  const [newToDo, setNewToDo] = useState('');
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ADD, payload: newToDo });
    setNewToDo('');
  };
  const onChange = (e) => {
    const {
      target: { value },
    } = e;
    setNewToDo(value);
  };
  return (
    <>
      <h1>Add to do</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Add to do"
          value={newToDo}
          onChange={onChange}
        />
      </form>
      <ul>
        <h2>To Dos</h2>
        {state.toDos.map((todo) => (
          <li key={todo.id}>
            <span>{todo.text}</span>
            <button onClick={() => dispatch({ type: DEL, payload: todo.id })}>
              <span role="img" aria-labelledby="delete">
                ❌
              </span>
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
