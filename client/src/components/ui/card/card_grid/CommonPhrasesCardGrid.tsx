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


export default function CommonPhrasesCardGrid() {

  const {renderedData, setRenderedData} = React.useContext(StudyCardsPageDataContext);
  const {step, setStep} = React.useContext(PaginatorStepContext);

  return (
    <ThemeProvider theme={dividerTheme}>
        <Grid container spacing={2} sx={{height: '100%'}}>
          <Grid item xs={4} sx={{textAlign: 'center'}}>
            Common Phrase
            <Divider />
            {renderedData[step].commonPhrase}
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