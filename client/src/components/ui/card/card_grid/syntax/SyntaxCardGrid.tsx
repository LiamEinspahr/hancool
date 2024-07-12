import * as React from 'react';
import { ThemeProvider, createTheme, styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Divider } from '@mui/material';
import { StudyCardsPageDataContext } from '../../../../pages/StudyCards/StudyCardsPage';
import { PaginatorStepContext } from '../../../../pages/StudyCards/StudyCardsPage';
import SyntaxStyling from './styling/SyntaxStyling';
import SyntaxMeaningStyling from './styling/SyntaxMeaningStyling';
import SyntaxCommentaryStyling from './styling/SyntaxCommentaryStyling';
import SyntaxExampleStyling from './styling/SyntaxExampleStyling';

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

export default function SyntaxCardGrid() {

  const {renderedData, setRenderedData} = React.useContext(StudyCardsPageDataContext);
  const {step, setStep} = React.useContext(PaginatorStepContext);

  if(step > renderedData.length) {
    setStep(0);
    return (
      <ThemeProvider theme={dividerTheme}>
        <Grid container spacing={2} sx={{height: '100%', pl: '16px', py: '16px'}}>
          <SyntaxStyling syntax={renderedData[0]?.syntax} />
          <SyntaxMeaningStyling meaning={renderedData[0]?.meaning} />
          <SyntaxCommentaryStyling commentary={renderedData[0]?.commentary} />
          <SyntaxExampleStyling eng={renderedData[0]?.syntax_example_english} kr={renderedData[0]?.syntax_example_korean} />
        </Grid>
      </ThemeProvider>
    );
  } else {
  return (
    <ThemeProvider theme={dividerTheme}>
      <Grid container spacing={2} sx={{height: '100%', pl: '16px', py: '16px'}}>
        <SyntaxStyling syntax={renderedData[step]?.syntax} />
          <SyntaxMeaningStyling meaning={renderedData[step]?.meaning} />
          <SyntaxCommentaryStyling commentary={renderedData[step]?.commentary} />
          <SyntaxExampleStyling eng={renderedData[step]?.syntax_example_english} kr={renderedData[0]?.syntax_example_korean} />
      </Grid>
    </ThemeProvider>
  );
}
}