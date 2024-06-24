import * as React from 'react';
import { Box, Button, Container, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, ToggleButton, ToggleButtonGroup } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import {headerButtonsType, RenderedButtonsContext, HeaderButtonsContext } from '../Header';
import ButtonToggleSettings from './app-settings/ButtonToggleSettings';


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
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
          <List>
            <ListItem key="buttonToggle" sx={{display: "list-item"}} disablePadding>
              <ListItemButton disabled={true}>
                  <ListItemText sx={{display: 'grid'}} primary="Toggle Header Buttons" />
              </ListItemButton>
              <ToggleButtonGroup
                value={renderedButtons}
                onChange={HandleRender}>
                <Stack sx={{display: "grid", justifyItems: 'start', marginBottom: "4vh", paddingLeft: "18%"}}>
                {headerButtons.map((btn, index) => (
                  <Box marginTop={"20px"}>
                    <ToggleButton key={index} aria-label={`${btn}`} aria-pressed={setRenderedButtons[index]} sx={{backgroundColor: btn.isShown ? toggleColors.isOff : toggleColors.isOn }} tabIndex={index} value={btn.name}>{btn.name}</ToggleButton>
                  </Box>
                ))}
                </Stack>
              </ToggleButtonGroup>
            </ListItem>
            <ListItem key="offlineMode" disablePadding>
              <ListItemButton>
                <ListItemText primary="Offline Mode" />
              </ListItemButton>
            </ListItem>
            <ListItem key="exit" disablePadding>
              <ListItemButton>
                <ListItemText primary="Exit" />
              </ListItemButton>
            </ListItem>
          </List>
          <Divider />
        </Box>
      );
    
      return (
        <Container sx={{position: 'relative', float:'right', marginLeft: 0 , marginRight: 0, ['@media (min-width: 600px)']: {paddingLeft: 0, paddingRight: 0}, ['@media (min-width: 1200px)']: {width: 'auto'} }}>
          <IconButton onClick={toggleDrawer(true)} sx={{float: 'right'}}>
            <SettingsIcon />
          </IconButton>
          <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
            {DrawerList}
          </Drawer>
        </Container>
      );
    }