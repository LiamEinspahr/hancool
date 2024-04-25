import React from 'react';
import Layout from './components/layout/Layout';

//theme
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

//pages
import TablePage from './components/pages/TablePage';
import AboutPage from './components/pages/AboutPage';

//router
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';




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
            element={<TablePage />}
        ></Route>  
        <Route
            path="/home"
            element={<TablePage />}
        ></Route>
        <Route
            path="/about"
            element={<AboutPage />}
        ></Route>
    </Routes>
    </Router>
  );
}

export default App;
