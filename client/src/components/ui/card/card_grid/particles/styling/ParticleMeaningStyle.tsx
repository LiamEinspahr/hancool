import * as React from 'react';
import { Box, Divider, Grid, Typography } from '@mui/material';



export default function ParticleMeaningStyle({meaning}) {

    return(
        <Grid item xs={12} sx={{textAlign: 'center', width: '100%', height: '50%', pb: '4px'}}>
            <Box sx={{backgroundColor: '#04003F', width: '100%', height: '100%', borderRadius: '8px', px: '8px'}}>
                <Typography sx={{height: '25%', fontSize: '1.25vw'}}>
                    Meaning
                    <Divider />
                </Typography>
                <Typography sx={{height: '60%', fontSize: '2vw', textShadow: '0px 0px 30px #F4FF00', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                    {meaning}
                </Typography>
            </Box>
        </Grid>
    );
}