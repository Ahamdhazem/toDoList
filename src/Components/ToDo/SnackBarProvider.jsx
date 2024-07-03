import React, { createContext, useContext,useState } from "react";
import UiSnackBar from "./UiSnackBar";
const SnackBarContext = createContext("");
export default function SnackBarProvider({ children }) {
  const [open, setOpen] = useState(false);
  const [snackMassage, setSnackMassage] = useState("");
  const onClose = () => {
    setOpen(false);
  };
  const showhideSnackBar = (message = "no message") => {
    setOpen(true);
    setSnackMassage(message);
    setTimeout(() => {
      setOpen(false);
    }, 2000);
  };
  return (
    <SnackBarContext.Provider value={{showhideSnackBar}}>
      {" "}
      <UiSnackBar open={open} onClose={onClose} masseage={snackMassage} />
      {children}
    </SnackBarContext.Provider>
  );
}
export const useSnackBar = () => {
  return useContext(SnackBarContext);
};
