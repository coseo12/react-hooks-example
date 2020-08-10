import React, { useState } from 'react';
import { ADD } from '../actions';
import { useDispatch } from '../context';

export default () => {
  const [newToDo, setNewToDo] = useState('');
  const dispatch = useDispatch();
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
    </>
  );
};
