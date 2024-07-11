import { Box, Grid, Typography } from '@mui/material';
import * as React from 'react';



export default function CommonPhraseStyling({common_phrase}) {

    return(
        <Grid item xs={12} sx={{textAlign: 'center'}}>
            <Box sx={{height: '100%', width: '100%', borderRadius: '8px', backgroundColor: '#0E0E0E', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Typography sx={{color: 'white', fontSize: '7vh'}}>
                    "{common_phrase}"
                </Typography>
            </Box>
        </Grid>
    );
}