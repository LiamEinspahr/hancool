import { Box, Divider, Grid, Typography } from '@mui/material';
import * as React from 'react';


export default function SyntaxCommentaryStyling({commentary}) {


    return(
        <Grid>
            <Box sx={{backgroundColor: '#c60b31', borderRadius: '4px', px: '16px'}}>
                <Typography sx={{fontWeight: 'bold'}}>
                    Commentary
                </Typography>
                <Typography sx={{fontSize: '2.5vh'}}>
                    {commentary}
                </Typography>
            </Box>
        </Grid>
    );
}