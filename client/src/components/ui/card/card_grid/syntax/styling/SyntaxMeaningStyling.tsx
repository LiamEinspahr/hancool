import { Box, Divider, Grid, Typography } from '@mui/material';
import * as React from 'react';


export default function SyntaxMeaningStyling({meaning}) {


    return(
        <Grid xs={6} sx={{width: '100%'}}>
            <Box sx={{backgroundColor: '#B4B4B4', borderRadius: '4px', px: '16px', height: '75%'}}>
                <Typography sx={{fontWeight: 'bold', }}>
                    Meaning
                </Typography>
                <Typography sx={{fontSize: '3vh'}}>
                    {meaning}
                </Typography>
            </Box>
        </Grid>
    );
}