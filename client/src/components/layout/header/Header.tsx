import * as React from 'react';
import { AppBar, Box, Toolbar, styled } from '@mui/material';
import HeaderButtons from './header-buttons/HeaderButtons';
import HeaderTitle from './header-title/HeaderTitle';
import HeaderSettings from './header-settings/HeaderSettings';

export interface headerButtonsType {
  isShown: Boolean,
  name: string,
  isLanguage: Boolean
}

const headerButtons: headerButtonsType[] = [
  {isShown: true, name: 'tables', isLanguage: false},
  {isShown: true, name: 'korean', isLanguage: true},
  {isShown: true, name: 'japanese', isLanguage: true},
  {isShown: true, name: 'resources', isLanguage: false},
  {isShown: true, name: 'about', isLanguage: false},
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
      <AppBar position="static">
        <Toolbar sx={{['@media (min-width: 600px)']: {paddingRight: 0}}}> 
          <HeaderTitle></HeaderTitle>
          <RenderedButtonsContext.Provider value={{renderedButtons, setRenderedButtons}}>
            <HeaderButtonsContext.Provider value={currentHeaderButtons}>
              <HeaderButtons></HeaderButtons>
              <HeaderSettings></HeaderSettings>
            </HeaderButtonsContext.Provider>
         </RenderedButtonsContext.Provider>
        </Toolbar>
      </AppBar>
    );
}