import { Typography, typographyClasses } from "@mui/material";
import React, { useContext } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { TaskContext } from "./TaskProvider";
export default function ToDoHeader({ setStatus }) {
  return (
    <Box sx={{ textAlign: "center" }}>
      <Typography style={{ fontSize: 50, fontFamily: "ciro" }} variant="h2">
        مهامي
      </Typography>
      <hr style={{ margin: "0.5em", opacity: "0.8" }} />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button
          onClick={() => setStatus("all")}
          variant="outlined"
          sx={{
            size: "small",
            color: "gray",
            borderColor: "gray",
            padding: "0",
          }}
        >
          الكل
        </Button>
        <Button
          onClick={() => setStatus("done")}
          variant="outlined"
          sx={{
            size: "small",
            color: "gray",
            borderColor: "gray",
            padding: "0",
          }}
        >
          منجز
        </Button>
        <Button
          onClick={() => setStatus("ununfinished")}
          variant="outlined"
          sx={{
            size: "small",
            color: "gray",
            borderColor: "gray",
            padding: "0",
          }}
        >
          غير منجز
        </Button>
      </Box>
    </Box>
  );
}
