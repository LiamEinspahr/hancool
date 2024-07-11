import { Box, Typography } from '@mui/material';
import * as React from 'react';



export default function Contractor1Styling({contractor_1}) {

    return(
        <Box sx={{height: '40%', width: 'auto', minWidth: '50%', maxWidth: '100%', backgroundColor: '#CECECE', borderRadius: '8px'}}>
            <Typography sx={{display: 'flex', height: '100%', justifyContent: 'center', alignItems: 'center', color: '#28AA25', fontSize: '7.2vw'}}>
                {contractor_1}
            </Typography>
        </Box>
    );
}