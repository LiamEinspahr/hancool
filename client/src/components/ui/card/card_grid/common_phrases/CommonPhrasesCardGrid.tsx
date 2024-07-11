import * as React from 'react';
import { ThemeProvider, createTheme, styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Divider } from '@mui/material';
import { StudyCardsPageDataContext } from '../../../../pages/StudyCards/StudyCardsPage';
import { PaginatorStepContext } from '../../../../pages/StudyCards/StudyCardsPage';
import CommonPhraseStyling from './styling/CommonPhraseStyling';
import CommonPhraseMeaningStyling from './styling/CommonPhraseMeaningStyling';
import CommonPhraseUsageStyling from './styling/CommonPhraseUsageStyling';

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


export default function CommonPhrasesCardGrid() {

  const {renderedData, setRenderedData} = React.useContext(StudyCardsPageDataContext);
  const {step, setStep} = React.useContext(PaginatorStepContext);

  if(step > renderedData.length) {
    setStep(0);
    return (
      <ThemeProvider theme={dividerTheme}>
        <Grid container spacing={2} sx={{height: '100%'}}>
          <CommonPhraseStyling common_phrase={renderedData[0].common_phrase} />
          <CommonPhraseMeaningStyling meaning={renderedData[0].meaning} />
          <CommonPhraseUsageStyling usage={renderedData[0].usage} />
        </Grid>
      </ThemeProvider>
    );
  } else {
    return (
      <ThemeProvider theme={dividerTheme}>
        <Grid container spacing={2} sx={{height: '100%'}}>
          <CommonPhraseStyling common_phrase={renderedData[step]?.common_phrase} />
          <CommonPhraseMeaningStyling meaning={renderedData[step]?.meaning} />
          <CommonPhraseUsageStyling usage={renderedData[step]?.usage} />
        </Grid>
      </ThemeProvider>
    );

  }

  
}