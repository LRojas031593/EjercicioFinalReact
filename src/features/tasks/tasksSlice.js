import { createSlice} from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "Task 1",
    completed: false,
    description: "Pendiente por fecha",
    dueDate: null,
  },
  {
    id: "2",
    title: "Task 2",
    completed: false,
    description: "Pendiente por fecha",
    dueDate: null,
  },
];

const userSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      console.log("Adding task:", action.payload);
      state.push(action.payload); 
    },
    editTask: (state, action) => {
      console.log("Editing task:", action.payload);
      const { id, title, description, dueDate } = action.payload;
      const foundTask = state.find((task) => task.id === id);
      if (foundTask) {
        foundTask.title = title;
        foundTask.description = description;
        foundTask.dueDate = dueDate;
      }
    },
    deleteTask: (state, action) => {
      const foundTask = state.find((task) => task.id === action.payload);
      if (foundTask) {
        state.splice(state.indexOf(foundTask), 1);
      }
    },
  },
});

export const { addTask, editTask, deleteTask } = userSlice.actions;
export default userSlice.reducer;
