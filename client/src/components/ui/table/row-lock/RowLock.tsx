import * as React from 'react';
import { ToggleButton } from "@mui/material";


export default function RowLock({expirationDate, id, lockState, onClick}) {

  const newDate = new Date();
  newDate.setDate(newDate.getDate() - 1);
  const today = newDate.toISOString().split('T')[0];
  const expirationDateString = expirationDate.split('T')[0];


  const handleChange = () => {
    console.log(today);
    console.log(expirationDateString);
    if(today === expirationDateString)
        lockState = true;

    return onClick(id, lockState);
  }

      return (
        <ToggleButton
          sx={{ backgroundColor: 'white'}}
          value={id}
          onClick={(e) => handleChange()}
        >
        </ToggleButton>
      );
}