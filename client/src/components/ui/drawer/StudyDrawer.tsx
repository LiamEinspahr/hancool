import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { cardTestData } from '../../data/CardTestData';
import ListIcon from '@mui/icons-material/List';
import { IconButton } from '@mui/material';



export default function StudyDrawer()  {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
      <Box sx={{}} role="presentation" onClick={toggleDrawer(false)}>
        <List>
          {cardTestData.map((card, index) => (
            <ListItem key={card.title} disablePadding>
              <ListItemButton>
                <ListItemText primary={card.title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Box>
  );

  return (
    <>
      <IconButton sx={{color: '#9BCDFF'}} onClick={toggleDrawer(!open)}>
        <ListIcon />
      </IconButton>
      <Drawer
        hideBackdrop
        sx={{['&.MuiDrawer-root']:{position: 'relative', paddingLeft: '20%'}, ['&.MuiDrawer-paper']:{position: 'relative'}, ['&.MuiBackdrop-root']:{paddingLeft: '5%'}}} 
        open={open} 
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            position: 'fixed',
            top: '11.55%',
            left: '0.1%',
            width: '11%',
            height: '100%',
            borderRadius: '2px',
            backgroundColor: '#422356',
            color: 'white'
          }
        }}
        

      >
        {DrawerList}
      </Drawer>
    </>
  );
}