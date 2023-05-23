import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: 1,
      title: "Assignment",
      description: "Complete the assignment",
      done: false,
    },
    {
      id: 2,
      title: "Buy Some Food",
      description: "Burger, Pizza and Rice",
      done: false,
    },
    { id: 3, title: "Demo", description: "Some demo text exist", done: true },
  ],
};

const todoSlice = createSlice({
  name: "todos",
  initialState: initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        title: action.payload.title,
        description: action.payload.description,
        done: false,
      };
      state.todos = [newTodo, ...state.todos];
    },
    toggleTodo: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.done = !todo.done;
        state.todos.sort((a, b) => (a.done === b.done ? 0 : a.done ? 1 : -1));
      }
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, toggleTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
