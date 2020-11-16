import { types } from "../types/types";

const initialState = {
  tasks: [],
};

export const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.loadTasks:
      return { ...state, tasks: [...action.payload] };
    case types.addTask:
      return { ...state, tasks: [...state.tasks, action.payload] };
    case types.deleteTask:
      return { ...state, tasks: state.tasks.filter(task => task.id !== action.payload) }
    case types.updateTask:
      return state;
    case types.cleanTasks:
      return { initialState };
    default:
      return state;
  }
};
