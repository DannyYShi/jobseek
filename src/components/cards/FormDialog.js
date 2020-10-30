import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import config from "../../config";

export default function FormDialog(props) {
  const [open, setOpen] = useState(false);
  const [companyName, setCompanyName] = useState("");
  const [position, setPosition] = useState("");

  const postData = async (url = config.CARD_ENDPOINT, data = {}) => {
    console.log(data);
    const response = await fetch(url, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    });
    return response.json();
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setCompanyName("");
    setPosition("");
    setOpen(false);
  };

  function handleSubmit() {
    handleClose();
    console.log(props.list);

    postData(config.CARD_ENDPOINT, {
      'list_id': props.list.list_id,
      'company_name': companyName,
      'position_applied': position,
    }).then((data) => {
      console.log(data);
    });
    // const newCards = [...props.list.cards, { companyName, position }];
    props.updateList();
    //{ ...props.list, cards: newCards }, props.list.id
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
            required
            margin="dense"
            id="companyName"
            label="Company"
            type="text"
            value={props.companyName}
            onChange={(e) => {
              setCompanyName(e.target.value);
            }}
            fullWidth
          />
          <TextField
            required
            margin="dense"
            id="position"
            label="Position"
            type="text"
            value={props.position}
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
          <Button onClick={handleSubmit} color="primary">
            Save Job
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
