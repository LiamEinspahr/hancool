import * as React from 'react';
import { AppBar, Box, Toolbar } from '@mui/material';
import HeaderButtons from './header-buttons/HeaderButtons';
import HeaderTitle from './header-title/HeaderTitle';
import HeaderSettings from './header-settings/HeaderSettings';

export interface headerButtonsType {
  isShown: Boolean,
  name: string,
}

const headerButtons: headerButtonsType[] = [
  {isShown: true, name: 'korean'},
  {isShown: true, name: 'japanese'},
  {isShown: true, name: 'resources'},
  {isShown: true, name: 'about'},
];

interface RenderedButtonsContextType {
  renderedButtons: headerButtonsType[],
  setRenderedButtons: React.Dispatch<React.SetStateAction<headerButtonsType[]>>;
}

const defaultState = {
  renderedButtons: headerButtons,
  setRenderedButtons: (btns: headerButtonsType[]) => {}
} as RenderedButtonsContextType

export const RenderedButtonsContext = React.createContext<RenderedButtonsContextType>(defaultState);
export const HeaderButtonsContext = React.createContext<typeof headerButtons>(headerButtons);



export default function Header() {
  

  const [currentHeaderButtons, setCurrenHeaderButtons] = React.useState<typeof headerButtons>(headerButtons);
  const [renderedButtons, setRenderedButtons] = React.useState(headerButtons);


    return(
        <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static" >
        <Toolbar sx={{paddingX: "3%"}}> 
          <HeaderTitle></HeaderTitle>
          <RenderedButtonsContext.Provider value={{renderedButtons, setRenderedButtons}}>
            <HeaderButtonsContext.Provider value={currentHeaderButtons}>
              <HeaderButtons></HeaderButtons>
              <HeaderSettings></HeaderSettings>
            </HeaderButtonsContext.Provider>
         </RenderedButtonsContext.Provider>
        </Toolbar>
        
      </AppBar>
    </Box>
    );
}