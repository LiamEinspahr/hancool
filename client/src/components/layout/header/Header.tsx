import * as React from 'react';
import { AppBar, Box, Toolbar, styled } from '@mui/material';
import HeaderButtons from './header-buttons/HeaderButtons';
import HeaderTitle from './header-title/HeaderTitle';
import HeaderSettings from './header-settings/HeaderSettings';

export interface headerButtonsType {
  isShown: Boolean,
  name: string,
  isLanguage: Boolean,
  displayNavigation: Boolean,
}

const headerButtons: headerButtonsType[] = [
  {isShown: true, name: 'tables', isLanguage: false, displayNavigation: true},
  {isShown: true, name: 'studycards', isLanguage: false, displayNavigation: true},
  {isShown: true, name: 'korean', isLanguage: true, displayNavigation: false},
  {isShown: true, name: 'japanese', isLanguage: true, displayNavigation: false},
  {isShown: true, name: 'resources', isLanguage: false, displayNavigation: true},
  {isShown: true, name: 'about', isLanguage: false, displayNavigation: true},
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
      <Box id="header_root" >
        <AppBar id="header_appbar" position="static" sx={{boxShadow: 10}}>
          <Toolbar id="header_toolbar" sx={{['@media (min-width: 600px)']: {paddingRight: 0}}}> 
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