import { Box, Typography } from '@mui/material';
import * as React from 'react';



export default function Contractor2Styling({contractor_2}) {

    return(
        <Box sx={{height: '40%', width: 'auto', minWidth: '50%', maxWidth: '100%', backgroundColor: '#CECECE', borderRadius: '8px'}}>
            <Typography sx={{display: 'flex', height: '100%', justifyContent: 'center', alignItems: 'center', color: '#2549AA', fontSize: '7.2vw'}}>
                {contractor_2}
            </Typography>
        </Box>
    );
}