import * as React from 'react';
import { Box, Container, createTheme, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Stack, ThemeProvider, ToggleButton, ToggleButtonGroup } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import {RenderedButtonsContext, HeaderButtonsContext } from '../Header';

const headerSettings_theme = createTheme({
  components: {
    MuiIconButton: {
      styleOverrides: {
        root: {
          float: 'right'
        }
      }
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          float:'right',
          marginLeft: 0 , 
          marginRight: 0, 
          position: 'relative', 
          '@media (min-width: 600px)': {paddingLeft: 0, paddingRight: 0}, 
          '@media (min-width: 1200px)': {width: 'auto'}
        }
      }
    },
    MuiStack: {
      styleOverrides: {
        root: {
          display: "grid", 
          justifyItems: 'start', 
          marginBottom: "4vh", 
          paddingLeft: "18%"
        }
      }
    }
  },
  palette: {
    mode: 'dark'
  }
})


interface nonButtonDisplay_SettingsInterface {
  id: string,
  displayName: string
}

const nonButtonDisplay_Settings: nonButtonDisplay_SettingsInterface[] = [
  {id: 'offlineMode', displayName: 'Offline Mode'},
  {id: 'exit', displayName: 'Exit'}
]

const toggleColors = {
  isOn: "#850000",
  isOff: "#32A72C"
}

export default function HeaderSettings() {

  const headerButtons = React.useContext(HeaderButtonsContext);
  const {renderedButtons, setRenderedButtons} = React.useContext(RenderedButtonsContext);
  const [headerButtonSettingsDialog, setHeaderButtonSettingsDialog] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
      setOpen(newOpen);
  };

  const HandleRender = (
    event: React.MouseEvent<HTMLElement>,
  ) => {
    const changedRender = event.currentTarget.innerHTML.toLowerCase().split('<')[0];
    const newRenders = [...renderedButtons];
    newRenders.find((btn) => btn.name === changedRender)!.isShown = !(newRenders.find((btn) => btn.name === changedRender)!.isShown);
    setRenderedButtons(newRenders);
  };

    const DrawerList = (
        <Box id="header_settings_button" sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
          <List>
            <ListItem key="buttonToggle" sx={{display: "list-item"}} disablePadding>
              <ListItemButton disabled={true}>
                  <ListItemText sx={{display: 'grid'}} primary="Toggle Header Buttons" />
              </ListItemButton>
              <ToggleButtonGroup
                value={renderedButtons}
                onChange={HandleRender}>
                <Stack>
                {headerButtons.map((btn, index) => (
                  (headerButtons[index].displayNavigation !== false)
                    ? <Box marginTop={"20px"}>
                        <ToggleButton key={index} aria-label={`${btn}`} aria-pressed={setRenderedButtons[index]} sx={{backgroundColor: btn.isShown ? toggleColors.isOff : toggleColors.isOn }} tabIndex={index} value={btn.name}>{btn.name}</ToggleButton>
                      </Box>
                    : <></>

                ))}
                </Stack>
              </ToggleButtonGroup>
            </ListItem>
            {nonButtonDisplay_Settings.map((btn, index) => (
              <ListItem key={`${btn.id}`} disablePadding>
                <ListItemButton>
                  <ListItemText primary={`${btn.displayName}`} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      );
    
      return (
        <ThemeProvider theme={headerSettings_theme}>
          <Container id="header_settings_icon">
            <IconButton onClick={toggleDrawer(true)}>
              <SettingsIcon />
            </IconButton>
            <Drawer id="header_settings_drawer" anchor="right" open={open} onClose={toggleDrawer(false)}>
              {DrawerList}
            </Drawer>
          </Container>
        </ThemeProvider>
      );
    }