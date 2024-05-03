import * as React from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slider, Switch, TextField, Typography } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import TableDialogSwitch from './dialog-switch/TableDialogSwitch';

interface AddWordProps {
    currentState: boolean
}


export default function TableDialogAddWord(props: AddWordProps) {
    const [open, setOpen] = React.useState(props.currentState);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };


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
                const email = formJson.email;
                console.log(email);
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
                    type="email"
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
                <Box sx={{mt: 2}}>
                    <Typography>Comfortability</Typography>
                    <Slider defaultValue={3} step={1} marks min={1} max={5}> </Slider>
                </Box>
                <Box sx={{mt: 2}}>
                <Typography>Expiration Date</Typography>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                        sx={{
                            width: '100%',
                            paddingTop: '1px',
                            paddingBottom: '1px'
                        }}
                            />
                    </LocalizationProvider>
                </Box>
                <Box sx={{mt: 2}}>
                    <Typography>Lock</Typography>
                    <TableDialogSwitch></TableDialogSwitch>
                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button type="submit">Submit</Button>
            </DialogActions>
        </Dialog>
      </>
    );
}