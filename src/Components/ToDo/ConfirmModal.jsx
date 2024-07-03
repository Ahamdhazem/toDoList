import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function ConfirmModal({
  conModal,
  setConModal,
  handelDeleteTask,
}) {
  const handleClickOpen = () => {
    setConModal(true);
  };

  const handleDiAgrr = () => {
    setConModal(false);
  };

  return (
    <React.Fragment>
      <Dialog
        open={conModal}
        onClose={() => setConModal(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"هل انت متاكد من انك تريد حذف المهمة؟"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            اذا قمت بالحذف لن تتمكن من استعادة المهمة
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDiAgrr}>غير موافق</Button>
          <Button onClick={handelDeleteTask} autoFocus>
            موافق
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
