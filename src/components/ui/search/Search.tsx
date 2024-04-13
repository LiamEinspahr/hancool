import { TextField } from '@mui/material';
import * as React from 'react';





export default function Search() {

    return(
        <TextField 
            id="outlined-basic" 
            label="Outlined" 
            variant="outlined" 
            sx={{
                backgroundColor: "#FFFF",
                borderRadius: "5%",
            }}/>
    );

}