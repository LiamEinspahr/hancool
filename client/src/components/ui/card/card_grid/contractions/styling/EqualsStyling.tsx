import { Box, Typography } from '@mui/material';
import * as React from 'react';

export default function EqualsStyling() {

    return(
        <Box>
            <Typography sx={{
                display:'flex', 
                flexDirection:'column', 
                justifyContent:'center', 
                color: 'white', 
                height: '100%', 
                fontSize: '4vw'}}>
            =
            </Typography>
        </Box>
    );
}