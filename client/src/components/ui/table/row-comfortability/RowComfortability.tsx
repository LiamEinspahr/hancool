import * as React from 'react';
import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Slider } from '@mui/material';

export default function RowComfortability({id, disabled, passedInValue, onChange}) {
  
  const [comfortability, setComfortability] = React.useState(passedInValue);

  const handleChange = (event: SelectChangeEvent) => {
    const newValue = event.target.value;
    setComfortability(newValue);
    onChange(id, newValue);
  }

  return (
    <Box sx={{height: "100%", paddingTop: 1.33 }}>
      <FormControl sx={{width: "50%"}}>
        <InputLabel id="comfortability-select">Select</InputLabel>
        <Select
          disabled={disabled}
          label="select"
          onChange={handleChange}
          sx={{height: "75%"}}
          value={comfortability}
        >
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}