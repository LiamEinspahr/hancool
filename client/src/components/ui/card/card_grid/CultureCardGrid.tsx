import * as React from 'react';
import { ThemeProvider, createTheme, styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Divider } from '@mui/material';
import { StudyCardsPageDataContext } from '../../../pages/StudyCards/StudyCardsPage';
import { PaginatorStepContext } from '../../../pages/StudyCards/StudyCardsPage';

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

export default function CultureCardGrid() {

  const {renderedData, setRenderedData} = React.useContext(StudyCardsPageDataContext);
  const {step, setStep} = React.useContext(PaginatorStepContext);

  if(step > renderedData.length) {
    setStep(0);
    return (
      <ThemeProvider theme={dividerTheme}>
        <Grid container spacing={2} sx={{height: '100%'}}>
          <Grid item xs={4} sx={{textAlign: 'center'}}>
            Culture
            <Divider />
            {renderedData[0].culture}
          </Grid>
          <Grid item xs={4} sx={{textAlign: 'center'}}>
            Meaning
            <Divider />
            {renderedData[0].meaning}
          </Grid>
          <Grid item xs={4} sx={{textAlign: 'center'}}>
            Usage
            <Divider />
            {renderedData[0].usage}
          </Grid>
        </Grid>
      </ThemeProvider>
    );
  } else {
      return (
        <ThemeProvider theme={dividerTheme}>
          <Grid container spacing={2} sx={{height: '100%'}}>
            <Grid item xs={4} sx={{textAlign: 'center'}}>
              Culture
              <Divider />
              {renderedData[step].culture}
            </Grid>
            <Grid item xs={4} sx={{textAlign: 'center'}}>
              Meaning
              <Divider />
              {renderedData[step].meaning}
            </Grid>
            <Grid item xs={4} sx={{textAlign: 'center'}}>
              Usage
              <Divider />
              {renderedData[step].usage}
            </Grid>
          </Grid>
        </ThemeProvider>
    );
  }
}