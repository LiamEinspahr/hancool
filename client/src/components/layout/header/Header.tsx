import * as React from 'react';
import { AppBar, Box, Toolbar } from '@mui/material';
import HeaderButtons from './header-buttons/HeaderButtons';
import HeaderTitle from './header-title/HeaderTitle';

export default function Header() {
    return(
        <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static" >
        <Toolbar sx={{paddingX: "3%"}}> 
          <HeaderTitle></HeaderTitle>
          <HeaderButtons></HeaderButtons>
        </Toolbar>
      </AppBar>
    </Box>
    );
}