import { Grid } from '@mui/material';
import * as React from 'react';


export default function CulturePictureStyling({url}) {

    return(
        <Grid item xs={5} sx={{textAlign: 'center'}}>
              <img src={url} style={{maxWidth: '100%'}} />
        </Grid>
    );
}