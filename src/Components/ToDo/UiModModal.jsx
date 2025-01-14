import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import { Padding } from "@mui/icons-material";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  justifyContent: "spaceBetween",
};

export default function UiModModal({
  open,
  handleClose,
  mode,
  setMode,
  handelTaskMod,
}) {
  const handelMode = () => {
    handleClose();
    if (mode !== "") {
      handelTaskMod();
    }
    setMode("");
  };
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            تعديل المهمة
          </Typography>
          <TextField
            value={mode}
            onChange={(e) => setMode(e.target.value)}
            style={{ marginBottom: "2em" }}
            id="standard-basic"
            label="تعديل"
            variant="standard"
          />
          <Box
            style={{
              display: "flex",
              justifyContent: "end",
              position: "absolute",
              bottom: "0%",
              left: "1em",
            }}
          >
            <Button variant="text" onClick={handelMode}>
              تعديل
            </Button>
            <Button variant="text" onClick={handleClose}>
              انهاء
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
