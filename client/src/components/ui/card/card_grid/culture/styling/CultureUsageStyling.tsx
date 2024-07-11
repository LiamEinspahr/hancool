import { Box, Divider, Grid, Typography } from '@mui/material';
import * as React from 'react';


export default function CultureUsageStyling({usage}) {

    return(
        <Grid item xs={12} sx={{height: '33%', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'column'}}>
                <Box sx={{width: '100%', height: '100%', border: '1px solid white', borderRadius: '8px', display: 'flex'}}>
                <Typography sx={{fontSize: '2vw', borderLeft: '0.5px dotted white', writingMode: 'vertical-lr', transform: 'rotate(180deg)', display: 'flex', justifyContent: 'center', alignItems: 'center' , width: '12%'}}>Usage</Typography>
                <Typography sx={{fontSize: '1.5vw', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', paddingX: '5%'}}>{usage}</Typography>
                </Box>
        </Grid>
    );
}