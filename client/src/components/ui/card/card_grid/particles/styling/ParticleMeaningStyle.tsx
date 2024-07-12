import * as React from 'react';
import { Box, Divider, Grid, styled, Typography } from '@mui/material';

const ParticleMeaningStyle_StyledBox = styled(Box)({
    backgroundColor: '#04003F', 
    borderRadius: '8px', 
    height: '100%', 
    paddingLeft: '8px',    
    paddingRight: '8px', 
})

export default function ParticleMeaningStyle({meaning}) {

    return(
        <Grid item xs={12} sx={{textAlign: 'center', width: '100%', height: '50%', pb: '4px'}}>
            <ParticleMeaningStyle_StyledBox>
                <Typography sx={{height: '25%', fontSize: '1.25vw'}}>
                    Meaning
                    <Divider />
                </Typography>
                <Typography sx={{height: '60%', fontSize: '2vw', textShadow: '0px 0px 30px #F4FF00', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                    {meaning}
                </Typography>
            </ParticleMeaningStyle_StyledBox>
        </Grid>
    );
}