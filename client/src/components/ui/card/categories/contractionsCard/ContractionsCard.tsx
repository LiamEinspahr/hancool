import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Grid, IconButton } from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ContractionsCardGrid from '../../card_grid/contractions/ContractionsCardGrid';


export default function ContractionsCard({currentState, setDrawerState}) {

  const [openExpansion, setOpenExpansion] = React.useState(false);

  const handler = (state: boolean) => {
    console.log("handler called");
    return setDrawerState(!currentState);
  }

  return (
      <Card 
        sx={{height: '100%', backgroundColor: '#222222', 
        color: 'white', positon: 'fixed', 
        width: '100%',

        }} 
        variant="outlined">
        <CardContent sx={{height: '90%'}}>
          <ContractionsCardGrid />
        </CardContent>
        <CardActions sx={{display: 'flex', justifyContent:'flex-end', width: '100%', height: '10%'}}>
          <IconButton onClick={() => handler(currentState)}>
            <ArrowRightIcon sx={{backgroundColor: '#222222', color: 'white', position: 'absolute', fontSize: '60px'}} />
          </IconButton>
        </CardActions>
      </Card>
  );
}