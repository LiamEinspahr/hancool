import { Box, Container, Divider, Grid, Typography } from '@mui/material';
import * as React from 'react';



export default function ConjugationStyling({conjugation}) {


    return(
        <Grid item xs={6} sx={{textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ height: '100%', backgroundColor: '#2B536B', borderRadius: '8px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', px: '8px'}}>
                <Typography sx={{color: 'black', fontSize: '1.75vw', fontWeight: 'bold'}}>
                    Conjugation
                    <Divider variant="middle" sx={{backgroundColor: 'black'}} />
                </Typography>
                <Typography sx={{ height: '100%', color: 'white', fontSize: '3vw', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    {conjugation}
                </Typography>
            </Box>
        </Grid>
    );
}