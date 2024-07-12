import { Box, Grid, styled, Typography } from '@mui/material';
import * as React from 'react';

const CommonPhrasesStyling_StyledBox = styled(Box)({
    alignItems: 'center',
    backgroundColor: '#0E0E0E',
    borderRadius: '8px', 
    display: 'flex',
    height: '100%',  
    justifyContent: 'center',
    width: '100%',
    
})

export default function CommonPhraseStyling({common_phrase}) {

    return(
        <Grid item xs={12} sx={{textAlign: 'center'}}>
            <CommonPhrasesStyling_StyledBox>
                <Typography sx={{color: 'white', fontSize: '7vh'}}>
                    "{common_phrase}"
                </Typography>
            </CommonPhrasesStyling_StyledBox>
        </Grid>
    );
}