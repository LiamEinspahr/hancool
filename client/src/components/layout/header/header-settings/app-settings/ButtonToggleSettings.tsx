import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import * as React from 'react';

export default function ButtonToggleSettings(props:any) {

    const [open, setOpen] = React.useState(props.isOpen);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    return (
        <h1>hi</h1>
    );
}