import * as React from 'react';
import { ToggleButton } from "@mui/material";


export default function RowLock({id, lockState, onClick}) {

      return (
        <ToggleButton
          sx={{ backgroundColor: 'white'}}
          value={id}
          onClick={(e) => onClick(id, lockState)}
        >
        </ToggleButton>
      );
}