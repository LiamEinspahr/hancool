import * as React from 'react';
import { Box, Divider, Grid, styled, Typography } from '@mui/material';


const ParticleStyle_StyledBox = styled(Box)({
    backgroundColor: '#27003F', 
    borderRadius: '8px',
    color: '#D6D6D6', 
    display: 'flex', 
    flexDirection: 'column', 
    height: '100%',
    justifyContent: 'space-between', 
    paddingLeft: '8px',
    paddingRight: '8px'
})


export default function ParticleStyle({particle}) {

    return(
        <Grid item xs={6} sx={{textAlign: 'center', height: '100%'}}>
            <ParticleStyle_StyledBox>
                <Typography sx={{fontSize: '2vw', height: '25%'}}>
                    Particle
                    <Divider variant="middle" />
                </Typography>
                <Typography sx={{fontSize: '5vw', textShadow: '0px 0px 30px #F4FF00', height: '60%'}}>
                    {particle}
                </Typography>
            </ParticleStyle_StyledBox>
        </Grid>
    );
}