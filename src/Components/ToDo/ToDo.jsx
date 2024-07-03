import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import { Avatar, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CheckIcon from "@mui/icons-material/Check";
import ModeIcon from "@mui/icons-material/Mode";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { TaskContext, useDispatch, useTasks } from "./TaskProvider";
import { createTheme } from "@mui/material/styles";
import { useSnackBar } from "./SnackBarProvider";
export default function ToDo({ toDo, handelOpenModModal, showConModal }) {
  // ConModal
  const { dispatch } = useDispatch();
  const { tasks } = useTasks();
  const { showhideSnackBar } = useSnackBar();

  const toggleTaskCompletion = (massage) => {
    dispatch({ type: "done", payload: { taskeId: toDo.id } });

    showhideSnackBar(massage);
  };

  {
    if (!tasks || tasks.length === 0) {
      return null;
    }

    return (
      <div>
        <Box
          sx={{
            flexGrow: 1,
            p: 2,
            padding: " 0.5em ",
            width: "100%",
            backgroundColor: "#4C3BCF",
            margin: "1.5em 0",
            border: "none",
            alignItems: "center",
            borderRadius: "0.2em",
          }}
        >
          <Grid container spacing={2}>
            <Grid xs={7}>
              <Box>
                <Typography
                  variant="h3"
                  color="initial"
                  sx={{ textDecoration: toDo.done ? "line-through" : "none" }}
                >
                  {toDo.body}
                </Typography>
                <Typography variant="h5" color="initial">
                  {toDo.details}
                </Typography>
              </Box>
            </Grid>
            <Grid xs={5}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "end",
                  gap: 1,
                }}
              >
                <Avatar
                  sx={{
                    padding: 0,
                    border: "1px solid green",
                    backgroundColor: toDo.done ? "green" : "gray",
                  }}
                >
                  <Button
                    onClick={() =>
                      toggleTaskCompletion(
                        toDo.done
                          ? "نم الغاء الانجاز بنجاح "
                          : "نم الانجاز بنجاح "
                      )
                    }
                    style={{
                      margin: "0",
                    }}
                  >
                    <CheckIcon
                      sx={{
                        color: toDo.done ? "gray" : "green",
                        borderRadius: "100%",
                        padding: "1px",
                        fontSize: "xlarge",
                      }}
                    />
                  </Button>
                </Avatar>

                <Avatar sx={{ border: "1px solid royalblue" }}>
                  <Button
                    style={{
                      border: "none",
                      padding: "0",
                      margin: "0",
                      borderRadius: "100%",
                    }}
                    onClick={() => handelOpenModModal(toDo)}
                  >
                    <ModeIcon
                      sx={{
                        color: "royalblue",
                        borderRadius: "100%",
                        fontSize: "xlarge",
                      }}
                    />
                  </Button>
                </Avatar>

                <Avatar sx={{ padding: 0, border: "1px solid red" }}>
                  <Button
                    style={{ margin: 0 }}
                    onClick={() => showConModal(toDo)}
                  >
                    <DeleteIcon
                      sx={{
                        color: "#C40C0C",
                        borderRadius: "100%",
                        fontSize: "xlarge",
                      }}
                    />
                  </Button>
                </Avatar>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </div>
    );
  }
}
