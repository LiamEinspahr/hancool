import * as React from 'react';
import { Box, Divider, Grid, Typography } from '@mui/material';



export default function ParticleUsageStyle({usage}) {

    return(
        <Grid item xs={12} sx={{textAlign: 'center', height: '50%', pt: '4px'}}>
            <Box sx={{color: 'black', width: '100%', backgroundColor: '#E0DFBA', height: '100%', borderRadius: '8px', px: '8px'}}>
                <Typography sx={{height: '25%', fontSize: '1.25vw'}}>
                    Usage
                    <Divider sx={{backgroundColor: 'black'}} />
                </Typography>
                <Typography sx={{ height: '60%', fontSize: '2vw', textShadow: '0px 0px 30px #F4FF00',  display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                    {usage}
                </Typography>
            </Box>
        </Grid>
    );
}