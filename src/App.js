import React, { useReducer, useState } from 'react';
import reducer, {
  initalState,
  ADD,
  DEL,
  COMPLATE,
  UNCOMPLATE,
} from './reducer';

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
            <button
              onClick={() => dispatch({ type: COMPLATE, payload: todo.id })}
            >
              <span role="img" aria-labelledby="delete">
                ⭕
              </span>
            </button>
            <button onClick={() => dispatch({ type: DEL, payload: todo.id })}>
              <span role="img" aria-labelledby="delete">
                ❌
              </span>
            </button>
          </li>
        ))}
      </ul>
      <ul>
        {state.complated.length > 0 && (
          <>
            <h2>Complated</h2>
            {state.complated.map((todo) => (
              <li key={todo.id}>
                <span>{todo.text}</span>
                <button
                  onClick={() =>
                    dispatch({ type: UNCOMPLATE, payload: todo.id })
                  }
                >
                  <span role="img" aria-labelledby="delete">
                    ❗
                  </span>
                </button>
                <button
                  onClick={() => dispatch({ type: DEL, payload: todo.id })}
                >
                  <span role="img" aria-labelledby="delete">
                    ❌
                  </span>
                </button>
              </li>
            ))}
          </>
        )}
      </ul>
    </>
  );
}

export default App;
