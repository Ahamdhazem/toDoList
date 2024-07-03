import "./App.css";
import ToDoLest from "./Components/ToDo/ToDoLest";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import SnackBarProvider from "./Components/ToDo/SnackBarProvider";
import { TaskProvider } from "./Components/ToDo/TaskProvider";

function App() {
  return (
    <div>
      <TaskProvider>
        <SnackBarProvider>
          <div className="toDoContainer">
            <ToDoLest />
          </div>
        </SnackBarProvider>
      </TaskProvider>
    </div>
  );
}

export default App;
