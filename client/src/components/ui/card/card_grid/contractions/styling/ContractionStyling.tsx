import { Box, Grid, Typography } from '@mui/material';
import * as React from 'react';



export default function ContractionStyling({contraction}) {

    return(
        <Grid item xs={6} sx={{display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', px: '16px', py: '16px'}}>
            <Box sx={{height: '50%', width: 'auto', maxWidth: '74.5%', backgroundColor: '#CECECE', borderRadius: '8px'}}>
              <Typography sx={{
                  display:'flex', 
                  flexDirection:'column', 
                  justifyContent:'center', 
                  color: 'black', 
                  height: '100%', 
                  fontSize: '7.2vw'}}>
                {contraction}
              </Typography>
            </Box>
            <Box>
              <Typography sx={{
                  display:'flex', 
                  flexDirection:'column', 
                  justifyContent:'center', 
                  color: 'white', 
                  height: '100%', 
                  fontSize: '4vw'}}>
                =
              </Typography>
            </Box>
          </Grid>
    );
}