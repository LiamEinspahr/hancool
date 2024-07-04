import * as React from 'react';
import { ThemeProvider, createTheme, styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Divider } from '@mui/material';
import { StudyCardsPageDataContext } from '../../../pages/StudyCards/StudyCardsPage';
import { PaginatorStepContext } from '../../paginator/Paginator';

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

export default function ConjugationsCardGrid() {

  const {renderedData, setRenderedData} = React.useContext(StudyCardsPageDataContext);
  const {step, setStep} = React.useContext(PaginatorStepContext);

  return (
    <ThemeProvider theme={dividerTheme}>
        <Grid container spacing={2} sx={{height: '100%'}}>
          <Grid item xs={4} sx={{textAlign: 'center'}}>
            Conjugation
            <Divider />
            {renderedData[step].conjugation}
          </Grid>
          <Grid item xs={4} sx={{textAlign: 'center'}}>
            Meaning
            <Divider />
            {renderedData[step].meaning}
          </Grid>
          <Grid item xs={4} sx={{textAlign: 'center'}}>
            Honor Level
            <Divider />
            {renderedData[step].honorLevel}
          </Grid>
        </Grid>
      </ThemeProvider>
  );
}