import * as React from 'react';
import { Box, Slider } from '@mui/material';
import { useRowStateContext } from '../Table';







export default function RowSlider() {

  const {rowState, setRowState} = useRowStateContext();

  
  function valuetext(value: number) {
    return `${value}`;
  }

    return (
        <Box sx={{ width: "90%", position: 'relative', padding: "4% 10%"}}>
          <Slider defaultValue={3} step={1} marks min={1} max={5}/>
        </Box>
      );  
}