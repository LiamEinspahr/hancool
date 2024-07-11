import { Box, Grid, Typography } from '@mui/material';
import * as React from 'react';



export default function CommonPhraseMeaningStyling({meaning}) {

    return(
        <Grid item xs={12} sx={{display: 'flex', justifyContent: 'flex-end'}}>
            <Box sx={{height: '100%', width: '60%', backgroundColor: '#2D3166', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px'}}>
                <Typography sx={{fontSize: '3.75vh', fontWeight: 'bold'}}>
                    {meaning}
                </Typography>
            </Box>
        </Grid>
    );
}