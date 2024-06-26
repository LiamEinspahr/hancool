import React from 'react';
import Layout from './components/layout/Layout';

//theme
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

//pages
import AboutPage from './components/pages/AboutPage';

//router
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ResourcesPage from './components/pages/ResourcesPage';
import TablesPage from './components/pages/TablesPage';
import FlashCardsPage from './components/pages/FlashCardsPage';

interface SubHeaderContextType {
  renderedLanguage: string,
  setRenderedLanguage: React.Dispatch<React.SetStateAction<string>>;
}

const defaultState = {
  renderedLanguage: 'korean',
  setRenderedLanguage: (langauge: string) => {}
} as SubHeaderContextType

export const SubHeaderContext = React.createContext<SubHeaderContextType>(defaultState);


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {

const [renderedLanguage, setRenderedLanguage] = React.useState('korean');

  return (
    
      <Router>
        <SubHeaderContext.Provider value={{renderedLanguage, setRenderedLanguage}}>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <Layout></Layout>
        </ThemeProvider>
        <Routes>
        <Route
              path="/"
              element={<AboutPage />}
          ></Route>  
          <Route
              path="/tables"
              element={<TablesPage />}
          ></Route>
          <Route
              path="/flashcards"
              element={<FlashCardsPage />}
          ></Route>  
          <Route
              path="/about"
              element={<AboutPage />}
          ></Route>
          <Route
              path="/resources"
              element={<ResourcesPage />}
          ></Route>
      </Routes>
      </SubHeaderContext.Provider>
      </Router>
    
  );
}

export default App;
