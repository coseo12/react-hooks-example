import React from 'react';
import { useState } from '../context';
import Add from './Add';
import List from './List';
import ToDo from './ToDo';

function App() {
  const { toDos } = useState();
  const { complated } = useState();
  return (
    <>
      <Add />
      <List name={'To Do'}>
        {toDos.length > 0 &&
          toDos.map((todo, i) => (
            <ToDo key={todo.id} id={todo.id} text={todo.text} />
          ))}
      </List>
      <List name={complated.length > 0 ? 'Complated' : ''}>
        {complated.length > 0 &&
          complated.map((todo, i) => (
            <ToDo
              key={todo.id}
              id={todo.id}
              text={todo.text}
              isComplated={true}
            />
          ))}
      </List>
    </>
  );
}

export default App;
