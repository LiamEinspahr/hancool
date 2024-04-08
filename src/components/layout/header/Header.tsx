import * as React from 'react';
import { AppBar, Box, Button, IconButton, Toolbar, Typography,  } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HeaderButtons from './header-buttons/HeaderButtons';
import HeaderTitle from './header-title/HeaderTitle';

export default function Header() {
    return(
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar> 
          <HeaderTitle></HeaderTitle>
          <HeaderButtons></HeaderButtons>
        </Toolbar>
      </AppBar>
    </Box>
    );
}