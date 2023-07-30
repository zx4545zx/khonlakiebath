import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import { useDialogStore, useCalStore } from "../store";

export default function CustomDialog() {
  const open = useDialogStore((state) => state.open);
  const handleClickOpen = useDialogStore((state) => state.handleClickOpen);
  const handleClose = useDialogStore((state) => state.handleClose);
  const setPromptpay = useCalStore((state) => state.setPromptpay);

  const [ p, setP ] = useState(null);

  const AddPromptpay = () => {
    setPromptpay(p);
    handleClose();
  }

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          เพิ่มพร้อมเพย์
        </DialogTitle>
        <DialogContent>
          <TextField
            sx={{my: "1rem"}}
            id="outlined-basic"
            label="พร้อมเพย์"
            variant="outlined"
            onChange={(e) => setP(e.target.value.trim())}
            />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>ปิด</Button>
          <Button onClick={() => AddPromptpay()} autoFocus>
            เพิ่ม
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
