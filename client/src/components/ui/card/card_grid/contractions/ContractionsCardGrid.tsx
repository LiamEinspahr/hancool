import * as React from 'react';
import { ThemeProvider, createTheme, styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { StudyCardsPageDataContext } from '../../../../pages/StudyCards/StudyCardsPage';
import { PaginatorStepContext } from '../../../../pages/StudyCards/StudyCardsPage';
import { Divider, Typography } from '@mui/material';
import ContractionStyling from './styling/ContractionStyling';
import Contractor1Styling from './styling/Contractor1Styling';
import Contractor2Styling from './styling/Contractor2Styling';
import PlusStyling from './styling/PlusStyling';

const contractionsCardGrid_theme = createTheme({
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
        item: {
          alignItems: 'center',
          display: 'flex', 
          flexDirection: 'column',
          justifyContent:'center', 
          paddingBottom: '16px',
          paddingLeft: '16px',
          paddingRight: '16px',
          paddingTop: '16px'
        }
      }
    }
  }
})

export default function ContractionsCardGrid() {

  const {renderedData, setRenderedData} = React.useContext(StudyCardsPageDataContext);
  const {step, setStep} = React.useContext(PaginatorStepContext);

  if(step > renderedData.length) {
    setStep(0);
    return (
        <ThemeProvider theme={contractionsCardGrid_theme}>
          <Grid container spacing={2} sx={{height: '100%'}}>
            <ContractionStyling contraction={renderedData[0].contraction} />
            <Grid item xs={6}>
              <Contractor1Styling contractor_1={renderedData[0].contractor_1} />
              <PlusStyling />
              <Contractor2Styling contractor_2={renderedData[0].contractor_2} />
            </Grid>
          </Grid>
        </ThemeProvider>
    );
  } else {

    return (
      <ThemeProvider theme={contractionsCardGrid_theme}>
        <Grid container spacing={2} sx={{height: '100%'}}>
          <ContractionStyling contraction={renderedData[step].contraction} />
          <Grid item xs={6}>
            <Contractor1Styling contractor_1={renderedData[step].contractor_1} />
            <PlusStyling />
            <Contractor2Styling contractor_2={renderedData[step].contractor_2} />
          </Grid>
        </Grid>
      </ThemeProvider>
    );

  }

  
}