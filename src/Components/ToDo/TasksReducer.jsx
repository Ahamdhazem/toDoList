import React from "react";
import { v4 as uuidv4 } from "uuid";
export const Reducer = (CurrentTasks, action) => {
  const info = action.payload;

  let updatedTasks = [];
  switch (action.type) {
    case "AddNewTask":
      updatedTasks = [
        ...CurrentTasks,
        { id: uuidv4(), body: info.taskBody, done: false },
      ];
      break;
    case "ReLoad":
      updatedTasks = JSON.parse(localStorage.getItem("tasks")) || currentTasks;
      break;
    case "done":
      console.log(info.taskeId);
      updatedTasks = CurrentTasks.map((t) => {
        if (t.id === info.taskeId) {
          console.log(t.done);
          return { ...t, done: !t.done };
        }
        return t;
      });
      break;
    case "modify":
      updatedTasks = CurrentTasks.map((t) => {
        if (t.id === info.id) {
          return { ...t, body: info.body };
        }
        return t;
      });
      break;
    case "delete":
      updatedTasks = CurrentTasks.filter((t) => t.id !== info.id);
    default:
      break;
  }
  console.log(updatedTasks);
  return updatedTasks;
};
