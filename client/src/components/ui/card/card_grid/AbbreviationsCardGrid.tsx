import * as React from 'react';
import { ThemeProvider, createTheme, styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { StudyCardsPageDataContext } from '../../../pages/StudyCards/StudyCardsPage';
import { PaginatorStepContext } from '../../../pages/StudyCards/StudyCardsPage';
import { Divider } from '@mui/material';

const dividerTheme = createTheme({
  components: {
    MuiDivider: {
      styleOverrides: {
        root: {
          backgroundColor: 'white'
        }
      }
    }
  }
})

export default function AbbreviationsCardGrid() {

  const {renderedData, setRenderedData} = React.useContext(StudyCardsPageDataContext);
  const {step, setStep} = React.useContext(PaginatorStepContext);

  return (
    <ThemeProvider theme={dividerTheme}>
        <Grid container spacing={2} sx={{height: '100%'}}>
          <Grid item xs={6} sx={{textAlign: 'center'}}>
            Abbreviation
            <Divider variant="middle"/>
            {renderedData[step].abbreviation}
          </Grid>
          <Grid item xs={6} sx={{textAlign: 'center'}}>
            Abbreviants
            <Divider variant="middle" />
            {renderedData[step].abbreviants}
          </Grid>
        </Grid>
      </ThemeProvider>
  );
}