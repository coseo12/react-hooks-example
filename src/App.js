import React, { useReducer } from 'react';

const INCREMENT = 'increment';
const DECREMENT = 'decrement';
const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 };
    case DECREMENT:
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <>
      <h1>state {state.count}</h1>
      <button onClick={() => dispatch({ type: INCREMENT })}>increment</button>
      <button onClick={() => dispatch({ type: DECREMENT })}>decrement</button>
    </>
  );
}

export default App;
