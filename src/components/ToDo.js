import React from 'react';
import { DEL, COMPLATE, UNCOMPLATE } from '../actions';
import { useDispatch } from '../context';

export default ({ text, id, isComplated }) => {
  const dispatch = useDispatch();
  return (
    <li key={id}>
      <span>{text}</span>
      <button
        onClick={() =>
          dispatch({ type: isComplated ? UNCOMPLATE : COMPLATE, payload: id })
        }
      >
        <span role="img" aria-labelledby="delete">
          {isComplated ? '🧡' : '💚'}
        </span>
      </button>
      <button onClick={() => dispatch({ type: DEL, payload: id })}>
        <span role="img" aria-labelledby="delete">
          ❌
        </span>
      </button>
    </li>
  );
};
