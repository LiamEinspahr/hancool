import React from 'react';
import Layout from './components/layout/Layout';

//theme
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

//pages
import KRTablePage from './components/pages/KRTablePage';
import JPTablePage from './components/pages/JPTablePage';
import AboutPage from './components/pages/AboutPage';

//router
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ResourcesPage from './components/pages/ResourcesPage';
import TablesPage from './components/pages/TablesPage';




const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {



  return (
    <Router>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Layout></Layout>
      </ThemeProvider>
      <Routes>
      <Route
            path="/"
            element={<KRTablePage />}
        ></Route> 
        <Route
            path="/tables"
            element={<TablesPage />}
        ></Route>  
        <Route
            path="/korean"
            element={<KRTablePage />}
        ></Route>
        <Route
            path="/japanese"
            element={<JPTablePage />}
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
    </Router>
  );
}

export default App;
