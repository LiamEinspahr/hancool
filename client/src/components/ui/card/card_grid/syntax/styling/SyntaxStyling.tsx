import { Box, Divider, Grid, Typography } from '@mui/material';
import * as React from 'react';


export default function SyntaxStyling({syntax}) {


    return(
        <Grid xs={6} sx={{}}>
            <Box sx={{backgroundColor: '#013378', borderRadius: '4px', px: '16px', height: '75%'}}>
                <Typography sx={{fontWeight: 'bold'}} >
                    Syntax
                </Typography>
                <Typography sx={{fontSize: '3vh'}}>
                    {syntax}
                </Typography>
            </Box>
        </Grid>
    );
}