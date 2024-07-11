import * as React from 'react';
import { Box, Divider, Grid, Typography } from '@mui/material';



export default function ParticleStyle({particle}) {

    return(
        <Grid item xs={6} sx={{textAlign: 'center', height: '100%'}}>
            <Box sx={{color: '#D6D6D6', height: '100%', backgroundColor: '#27003F', borderRadius: '8px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', px: '8px'}}>
                <Typography sx={{fontSize: '2vw', height: '25%'}}>
                    Particle
                    <Divider variant="middle" />
                </Typography>
                <Typography sx={{fontSize: '5vw', textShadow: '0px 0px 30px #F4FF00', height: '60%'}}>
                    {particle}
                </Typography>
            </Box>
        </Grid>
    );
}