import { Box, Divider, Grid, Typography } from '@mui/material';
import * as React from 'react';



export default function ConjugationHonorLevelStyling({honorLevel}) {


    return(
        <Grid item xs={12} sx={{textAlign: 'center', height: '100%', pt: '4px'}}>
            <Box sx={{backgroundColor: '#CECECE', borderRadius: '8px', height: '100%'}}>
                <Typography sx={{color: 'black', fontSize: '1.25vw', px: '8px'}}>
                    Honor Level
                    <Divider variant="middle" sx={{backgroundColor: 'black'}} />
                </Typography>
                <Typography sx={{color: 'black', fontSize: '2vw', px: '8px'}}>
                    {honorLevel}
                </Typography>
            </Box>
        </Grid>
    );
}