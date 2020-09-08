import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Card from "./Card";

export default function FormDialog(props) {
  const [open, setOpen] = useState(false);
  const [companyName, setCompanyName] = useState("");
  const [position, setPosition] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function handleSubmit(e) {
    handleClose();
    console.log(companyName, position);
  }

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Add New Job
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add Job</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="companyName"
            label="Company"
            type="text"
            value={companyName}
            onChange={(e) => {
              setCompanyName(e.target.value);
            }}
            fullWidth
          />
          <TextField
            margin="dense"
            id="position"
            label="Position"
            type="text"
            value={position}
            onChange={(e) => {
              setPosition(e.target.value);
            }}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button
            onClick={handleSubmit.bind(position, companyName)}
            color="primary"
          >
            Save Job
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
