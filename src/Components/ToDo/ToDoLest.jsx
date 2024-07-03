import * as React from "react";
import ToDo from "./ToDo";
import ToDoHeader from "./ToDoHeader";
import AddNewTask from "./AddNewTask";
import UiModModal from "./UiModModal";
import { useState, useEffect, useMemo } from "react";
import ConfirmModal from "./ConfirmModal";
import { useSnackBar } from "./SnackBarProvider";
import { useDispatch, useTasks } from "./TaskProvider";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import { createTheme } from "@mui/material/styles";
export default function ToDoLest() {
  const { tasks } = useTasks();
  const { dispatch } = useDispatch();
  const { showhideSnackBar } = useSnackBar();
  const [status, setStatus] = React.useState("all");
  const [openModModal, setoOpenModModal] = React.useState(false);
  const [modalTask, setModalTask] = useState("");
  const [mode, setMode] = React.useState("");
  const [openConModal, setOpneConModal] = React.useState(false);

  const Addtask = (taskBody) => {
    dispatch({ type: "AddNewTask", payload: { taskBody: taskBody } });
    showhideSnackBar("تمت الاضافة بنجاح ");
    // console.log(tasks);
  };
  useEffect(() => {
    dispatch({ type: "ReLoad", payload: {} });
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  const Donetask = useMemo(() => {
    return tasks.filter((t) => t.done);
  }, [tasks]);

  const ununfinished = useMemo(() => {
    return tasks.filter((t) => !t.done);
  }, [tasks]);

  const currenttask = () => {
    switch (status) {
      case "all":
        return tasks;
        break;
      case "done":
        return Donetask;
        break;

      case "ununfinished":
        return ununfinished;
        break;

      default:
        return tasks;
    }
  };

  const handelOpenModModal = (modTask) => {
    setoOpenModModal(true);
    setModalTask(modTask);
  };
  const closeModModal = () => {
    setoOpenModModal(false);
  };
  const handelTaskMod = () => {
    dispatch({ type: "modify", payload: { id: modalTask.id, body: mode } });
    console.log(mode, modalTask);
    showhideSnackBar("نم التعديل بنجاح");
  };
  const showConModal = (modTake) => {
    setOpneConModal(true);
    setModalTask(modTake);
  };
  const closeConModal = () => {
    setOpneConModal(false);
  };
  const showToDos = currenttask().map((t) => (
    <ToDo
      key={t.id}
      toDo={t}
      handelOpenModModal={handelOpenModModal}
      showConModal={showConModal}
    />
  ));
  const handelDeleteTask = () => {
    dispatch({ type: "delete", payload: { id: modalTask.id } });
    // setTask(task.filter((t) => t.id !== modalTask.id));
    setOpneConModal(false);
    showhideSnackBar("تم الحذف بنجاح");
  };
  return (
    <>
      <ToDoHeader setStatus={setStatus} />
      <div
        style={{
          maxHeight: "45vh",
          overflowX: "scroll",
          scrollbarWidth: "none",
        }}
      >
        <UiModModal
          open={openModModal}
          handleClose={closeModModal}
          mode={mode}
          setMode={setMode}
          handelTaskMod={handelTaskMod}
        />
        <ConfirmModal
          conModal={openConModal}
          setConModal={setOpneConModal}
          handelDeleteTask={handelDeleteTask}
        />

        {showToDos}
      </div>

      <AddNewTask handelAddtask={Addtask} />
    </>
  );
}
