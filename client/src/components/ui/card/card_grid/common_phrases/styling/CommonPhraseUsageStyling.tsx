import { Box, Grid, Typography } from '@mui/material';
import * as React from 'react';



export default function CommonPhraseUsageStyling({usage}) {

    return(
        <Grid item xs={6} sx={{textAlign: 'center'}}>
            <Box sx={{height: '100%', width: '100%', borderRadius: '8px', backgroundColor: '#874BA0', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Typography sx={{color: 'white', fontSize: '2.5vh', textShadow: '1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue'}}>
                    {usage}
                </Typography>
            </Box>
        </Grid>
    );
}