import * as React from 'react';
import { ToggleButton } from "@mui/material";


export default function RowLock({expirationDate, id, lockState, onClick}) {

  const newDate = new Date();
  newDate.setDate(newDate.getDate() - 1);

  const handleChange = () => {
    return onClick(id, lockState);
  }

      return (
        <>
          { lockState 
            ? <ToggleButton
              sx={{ backgroundColor: '#383838', color: 'white', border: 'none', opacity: '80%'}}
              value={id}
              onClick={(e) => handleChange()}
            >
              Unlock
            </ToggleButton>

            : <ToggleButton
            sx={{ backgroundColor: 'white', border: 'none', opacity: '100%', fontWeight: '600'}}
            value={id}
            onClick={(e) => handleChange()}
          >
            Lock
          </ToggleButton>
          }
      </>
      );
}