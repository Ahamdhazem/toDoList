import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Box, colors } from "@mui/material";
export default function AddNewTask({ handelAddtask }) {
  const [newTask, setNewTask] = useState("");
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "whitesmoke",
        width: "100%",
      }}
    >
      <input
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="عنوان المهمة"
        style={{
          color: "black",
          width: "69%",
          height: "auto",
          textAlign: "end",
          padding: "0.6em",
          border: "1px gray solid",
        }}
      />
      <Button
        onClick={() => {
          handelAddtask(newTask);
          setNewTask("");
        }}
        variant="contained"
        sx={{
          color: "black",
          backgroundColor: "#C80036",
          width: "29%",
          padding: "0.4em",
        }}
        disabled={newTask.length==0}
      >
        اضافة
      </Button>
    </Box>
  );
}
