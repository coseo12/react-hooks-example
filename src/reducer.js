import { v4 as uuid } from 'uuid';
import { ADD, DEL, COMPLATE, UNCOMPLATE } from './actions';

export const initialState = {
  toDos: [],
  complated: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        toDos: [...state.toDos, { text: action.payload, id: uuid() }],
      };
    case DEL:
      return {
        ...state,
        toDos: state.toDos.filter((todo) => todo.id !== action.payload),
        complated: state.complated.filter((todo) => todo.id !== action.payload),
      };
    case COMPLATE:
      const target = state.toDos.find((todo) => todo.id === action.payload);
      return {
        ...state,
        toDos: state.toDos.filter((todo) => todo.id !== action.payload),
        complated: [...state.complated, { ...target }],
      };
    case UNCOMPLATE:
      const unTarget = state.complated.find(
        (todo) => todo.id === action.payload
      );
      return {
        ...state,
        complated: state.complated.filter((todo) => todo.id !== action.payload),
        toDos: [...state.toDos, { ...unTarget }],
      };
    default:
      return;
  }
};

export default reducer;
