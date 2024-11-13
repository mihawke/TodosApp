import { createSlice } from "@reduxjs/toolkit";

// A slice is a modular way of organizing Redux state, actions, and reducers. 
// It’s essentially a container that holds a "slice" of your application’s state along with the logic to modify that part of the state.
// It generates reducer functions based on the object you provide in the reducers field.
// It automatically creates action creators for each reducer function defined in the slice.

// Define initial state and reducers in a single slice
const todoSlice = createSlice({
  name: 'todos',            // A name for the slice (used as a prefix for action types)
  initialState: {           // Initial state for this slice
    items: [
      {
        id: Date.now(),
        title: 'Todo One',
        text: 'Learn Redux',
        completed: true,
        author: 'John Doe',
        createdAt: new Date().toISOString()
      },
    ]
  },

  // A reducer is a function in Redux that determines how the application's state should change in response to an action.
  // Reducers take two arguments:
  // Current State: The current state of the part of the application managed by this reducer.
  // Action: An object with a type property (describing what happened) and an optional payload property (carrying data necessary for the update).
  // reducer does not mutate the current state but instead returns a new state object.
  reducers: {
    // addTodo reducer takes two arguments: (currentState , action)
    // Also, no return statement is required from these functions.
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        title: action.payload.title,
        text: action.payload.text,
        completed: false,
        author: action.payload.author,
        createdAt: new Date().toISOString()
      }
      state.items.push(newTodo);
    },
    removeTodo: (state, action) => {
      state.items = state.items.filter((todo) => todo.id !== action.payload);
    },
  },
});

// The todoSlice.actions object looks like this:
// {
//   addTodo: function (payload) { return { type: 'todos/addTodo', payload } },
//   removeTodo: function (payload) { return { type: 'todos/removeTodo', payload } }
// }

// Export actions
export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice;