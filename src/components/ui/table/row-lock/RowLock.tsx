import * as React from 'react';
import { ToggleButton } from "@mui/material";
import { useRowStateContext } from '../Table';


export default function RowLock() {

    const {rowState, setRowState} = useRowStateContext();


    
    const handleRowLockStateChange = () => {
        console.log(rowState);
        setRowState(!rowState);
    }


    return(
        <ToggleButton sx={{ backgroundColor: 'white'}}
                      {...rowState ? {value: "ButtonIsLocked"} : {value: "ButtonIsntLocked"}}
                      onClick={handleRowLockStateChange}>
            {rowState ? 'Unlock' : 'Lock' }
        </ToggleButton>
    );
}