import * as React from 'react';
import { ThemeProvider, createTheme, styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Divider } from '@mui/material';
import { StudyCardsPageDataContext } from '../../../../pages/StudyCards/StudyCardsPage';
import { PaginatorStepContext } from '../../../../pages/StudyCards/StudyCardsPage';
import ConjugationStyling from './styling/ConjugationStyling';
import ConjugationMeaningStyling from './styling/ConjugationMeaningStyling';
import ConjugationHonorLevelStyling from './styling/ConjugationHonorLevelStyling';

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

  if(step > renderedData.length) {
    setStep(0);
    return (
      <ThemeProvider theme={dividerTheme}>
          <Grid container spacing={2} sx={{height: '100%'}}>
              <ConjugationStyling conjugation={renderedData[0]?.conjugation} />
            <Grid item xs={6}>
              <ConjugationMeaningStyling meaning={renderedData[0]?.meaning} />
              <ConjugationHonorLevelStyling honorLevel={renderedData[0]?.honor_level} />
            </Grid>
          </Grid>
        </ThemeProvider>
    );
  } else {
    return (
      <ThemeProvider theme={dividerTheme}>
        <Grid container spacing={2} sx={{height: '100%'}}>
              <ConjugationStyling conjugation={renderedData[step]?.conjugation} />
            <Grid item xs={6} sx={{height: '100%'}}>
              <ConjugationMeaningStyling meaning={renderedData[step]?.meaning} />
              <ConjugationHonorLevelStyling honorLevel={renderedData[step]?.honor_level} />
            </Grid>
          </Grid>
      </ThemeProvider>
    );
  }
} 