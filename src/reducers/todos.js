// export const ADD_TODO = "TODO/ADD_TODO";
// export const REMOVE_TODO = "TODO/REMOVE_TODO";
// export const TOGGLE_TODO = "TODO/TOGGLE_TODO";

// export const addTodo = (text) => ({ type: ADD_TODO, text });
// export const removeTodo = (id) => ({ type: REMOVE_TODO, id });
// export const toggleTodo = (id) => ({ type: TOGGLE_TODO, id });

// const initialState = {
//   todos: [],
// };

// const todos = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_TODO:
//       return {
//         ...state,
//         todos: [
//           ...state.todos,
//           { id: Date.now(), text: action.text, completed: false },
//         ],
//       };
//     case REMOVE_TODO:
//       return {
//         ...state,
//         todos: state.todos.filter((todo) => todo.id !== action.id),
//       };
//     case TOGGLE_TODO:
//       return {
//         ...state,
//         todos: state.todos.map((todo) =>
//           todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
//         ),
//       };
//     default:
//       return state;
//   }
// };

// export default todos;