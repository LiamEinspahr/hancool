import { Box, Grid, Typography } from '@mui/material';
import * as React from 'react';


export default function SyntaxExampleStyling({eng, kr}) {


    return(
        <>
        <Grid xs={12} sx={{background: 'linear-gradient(180deg, rgba(198,11,49,1) 0%, rgba(1,51,120,1) 50%)', borderRadius: '4px', px: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', border: '1px solid white'}}>
                <Typography sx={{pr: '16px', display: 'flex', alignItems: 'center', height: '100%', fontSize: '3vh', opacity: '.8', borderRight: '0.5px dotted white'}}>
                    한국어
                </Typography>
                <Typography sx={{fontSize: '2.25vh'}}>
                    "{kr}"
                </Typography>
        </Grid>
        <Grid xs={12} sx={{px: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', border: '1px solid white'}}>
            <Typography sx={{pr: '16px', display: 'flex', alignItems: 'center', height: '100%', fontSize: '3vh', opacity: '.8', borderRight: '0.5px dotted white'}}>
                    미국어
                </Typography>
                <Typography sx={{fontSize: '1.75vh'}}>
                    "{eng}"
                </Typography>
         </Grid>
        </>
    );
}