import { createContext, useContext, useReducer } from "react";
import { Reducer } from "./TasksReducer";
export const TaskContext = createContext();
export const DispatchContext = createContext();
export const TaskProvider = ({ children }) => {
  const [tasks, dispatch] = useReducer(
    Reducer,
    JSON.parse(localStorage.getItem("tasks")) || []
  );
  return (
    <TaskContext.Provider value={{tasks}}>
      <DispatchContext.Provider value={{dispatch}}>
        {children}
      </DispatchContext.Provider>
    </TaskContext.Provider>
  );
};
export const useTasks = () => {
  return useContext(TaskContext);
};
export const useDispatch = () => {
  return useContext(DispatchContext);
};
