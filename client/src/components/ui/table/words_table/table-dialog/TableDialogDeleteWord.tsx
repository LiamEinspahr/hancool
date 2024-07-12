import * as React from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slider, Switch, TextField, Typography } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';


export default function TableDialogDeleteWord(props: any) {
    const [open, setOpen] = React.useState(props.currentState);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };


    return(
        <>
        <Button onClick={handleClickOpen} >- Delete Word</Button>
            <Dialog
            open={open}
            onClose={handleClose}
            PaperProps={{
            component: 'form',
            onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
                event.preventDefault();
                const formData = new FormData(event.currentTarget);
                const formJson = Object.fromEntries((formData as any).entries());
                props.onDestory(formJson.id)
                handleClose();
            },
            }}
        >
            <DialogTitle>Create Word</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    To delete an existing word, enter the relevant ID. Please check ID before submission.
                </DialogContentText>
                <TextField
                    autoFocus
                    required
                    margin="dense"
                    id="tdID"
                    name="id"
                    label="ID"
                    fullWidth
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button type="submit">Submit</Button>
            </DialogActions>
        </Dialog>
      </>
    );
}