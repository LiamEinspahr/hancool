import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListIcon from '@mui/icons-material/List';
import { Container, IconButton, TextField, ThemeProvider, createTheme } from '@mui/material';
import { PaginatorStepContext, StudyCardsPageDataContext } from '../../pages/StudyCards/StudyCardsPage';


const studyDrawer_theme = createTheme({
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingTop: '2vh'
        }
      }
    },
    MuiDrawer: {
      styleOverrides: {
        root: {
          paddingLeft: '20%',
          position: 'relative'
        },
        paper: {
          position: 'relative'
        },
        paperAnchorLeft: {
          backgroundColor: '#422356',
          borderRadius: '2px',
          color: 'white',
          height: '100%',
          left: '0.1%',
          position: 'fixed',
          top: '11.55%',
          width: '11%',
        }
      }
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: '#9BCDFF'
        }
      }
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          color: 'white'
        }
      }
    }
  },
})


export default function StudyDrawer()  {
  const [open, setOpen] = React.useState(false);
  const {renderedData, setRenderedData} = React.useContext(StudyCardsPageDataContext);
  const {step, setStep} = React.useContext(PaginatorStepContext);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
      <Box role="presentation" onClick={toggleDrawer(false)}>
        <List>
          {renderedData.map((card, index) => (
            <ListItem key={card.title} disablePadding>
              <ListItemButton onClick={() => setStep(index)}>
                <ListItemText primary={card.title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Box>
  );

  return (
    <ThemeProvider theme={studyDrawer_theme}>
      <IconButton onClick={toggleDrawer(!open)}>
        <ListIcon />
      </IconButton>
      <Drawer
        anchor='left'
        hideBackdrop
        open={open} 
        onClose={toggleDrawer(false)}
      >
        <Container>
            <TextField label="Search" variant="outlined"/>
        </Container>
        {DrawerList}
      </Drawer>
      </ThemeProvider>
  );
}