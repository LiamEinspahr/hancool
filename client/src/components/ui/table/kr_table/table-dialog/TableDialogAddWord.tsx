import * as React from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slider, Switch, TextField, Typography } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TableRow } from '../../../../data/TableRowInterface';


export default function TableDialogAddWord(props: any) {
    const [open, setOpen] = React.useState(props.currentState);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const [comfortability, setComfortability] = React.useState<number>();
    const [expirationDate, setExpirationDate] = React.useState<string>();
    const [lock, setLock] = React.useState<boolean>();



    return(
        <>
        <Button onClick={handleClickOpen} >+ Add Word</Button>
            <Dialog
            open={open}
            onClose={handleClose}
            PaperProps={{
            component: 'form',
            onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
                event.preventDefault();
                const formData = new FormData(event.currentTarget);
                const formJson = Object.fromEntries((formData as any).entries());
                const newRow: TableRow = {id: formJson.id, word: formJson.word, romanization: formJson.romanization, definition: formJson.definition, comfortability: formJson.comfortability, expirationDate: formJson.expirationDate, lock: formJson.lock};
                props.onAdd(newRow);
                handleClose();
            },
            }}
        >
            <DialogTitle>Create Word</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    To create a new word, enter the relevant attributes. Please check ID
                    and spelling before submission
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
                <TextField
                    autoFocus
                    required
                    margin="dense"
                    id="tdWord"
                    name="word"
                    label="Word"
                    fullWidth
                />
                <TextField
                    autoFocus
                    required
                    margin="dense"
                    id="tdRomanization"
                    name="romanization"
                    label="Romanization"
                    fullWidth
                />
                <TextField
                    autoFocus
                    required
                    margin="dense"
                    id="tdDefinition"
                    name="definition"
                    label="Definition"
                    fullWidth
                />
                <TextField
                    autoFocus
                    required
                    margin="dense"
                    id="tdComfortability"
                    name="comfortability"
                    label="Comfortability"
                    fullWidth
                />
                <TextField
                    autoFocus
                    required
                    margin="dense"
                    id="tdExpirationDate"
                    name="expirationDate"
                    label="Expiration Date"
                    fullWidth
                />
                <TextField
                    autoFocus
                    required
                    margin="dense"
                    id="tdLock"
                    name="lock"
                    label="Lock"
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