import * as React from 'react';
import { ThemeProvider, createTheme, styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Divider } from '@mui/material';
import { StudyCardsPageDataContext } from '../../../../pages/StudyCards/StudyCardsPage';
import { PaginatorStepContext } from '../../../../pages/StudyCards/StudyCardsPage';
import CulturePictureStyling from './styling/CulturePictureStyling';
import CultureMeaningStyling from './styling/CultureMeaningStyling';
import CultureUsageStyling from './styling/CultureUsageStyling';

const dividerTheme = createTheme({
  components: {
    MuiDivider: {
      styleOverrides: {
        root: {
          backgroundColor: 'white'
        }
      }
    },
    MuiGrid: {
      styleOverrides: {
        root: {
          textAlign: 'center'
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
        <CulturePictureStyling url={renderedData[0]?.pictureurl} />
            <CultureMeaningStyling meaning={renderedData[0].meaning} />
            <CultureUsageStyling usage={renderedData[0]?.usage} />
        </Grid>
      </ThemeProvider>
    );
  } else {
      return (
        <ThemeProvider theme={dividerTheme}>
          <Grid container spacing={2} sx={{height: '100%'}}>
            <CulturePictureStyling url={renderedData[step]?.pictureurl} />
            <CultureMeaningStyling meaning={renderedData[step].meaning} />
            <CultureUsageStyling usage={renderedData[step]?.usage} />
          </Grid>
        </ThemeProvider>
    );
  }
}