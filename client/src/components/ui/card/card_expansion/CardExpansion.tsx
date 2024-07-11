import { Box, FormControlLabel, Grow, Paper, Switch } from "@mui/material";
import * as React from 'react';

const icon = (
    <Paper sx={{ m: 1, width: 100, height: 100 }} elevation={4}>
      <svg>
        <Box
          component="polygon"
          points="0,100 50,00, 100,100"
          sx={{
            fill: (theme) => theme.palette.common.white,
            stroke: (theme) => theme.palette.divider,
            strokeWidth: 1,
            position: 'absolute',
            backgroundColor: 'white',
            top: 0
          }}
        />
      </svg>
    </Paper>
  );
  
  export default function SimpleGrow() {
    const [checked, setChecked] = React.useState(false);
  
    const handleChange = () => {
      setChecked((prev) => !prev);
    };
  
    return (
      <></>
    );
  }