import * as React from "react";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Alert from "@mui/material/Alert";
import CheckIcon from "@mui/icons-material/Check";
import Stack from "@mui/material/Stack";
export default function UiSnackBar({open,onClose,masseage}) {
  

 


  const action = <React.Fragment></React.Fragment>;

  return (
    <div style={{ position: "absolute", bottom: "0%", left: "0%" }}>
      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={onClose}
        message="active "
        action={action}
      >
          <Alert severity="success">{masseage}</Alert>
      </Snackbar>
    </div>
  );
}
