import { Box, Divider, Grid, Typography } from '@mui/material';
import * as React from 'react';



export default function ConjugationMeaningStyling({meaning}) {


    return(
        <Grid item sx={{textAlign: 'center', height: '75%', pb: '4px'}}>
            <Box sx={{ backgroundColor: '#C8B497', borderRadius: '8px', height: '100%', px: '8px'}}>
                <Typography sx={{color: 'black', fontSize: '1.25vw'}}>
                    Meaning
                    <Divider variant="middle" sx={{backgroundColor: 'black'}} />
                </Typography>
                <Typography sx={{color: 'black', fontSize: '2vw'}}>
                {meaning}
                </Typography>
            </Box>
        </Grid>
    );
}