import React, { useReducer, useState } from 'react';

const initalState = {
  toDos: [],
};
const ADD = 'add';

const reducer = (state, action) => {
  switch (action.type) {
    case ADD:
      return { toDos: [...state.toDos, { text: action.payload }] };
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
        {state.toDos.map((todo, index) => (
          <li key={index}>{todo.text}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
