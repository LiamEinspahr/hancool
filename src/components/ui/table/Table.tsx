import * as React from 'react';
import { Box, alpha, styled } from '@mui/material';
import { DataGrid, GridColDef, gridClasses } from '@mui/x-data-grid';
import { columns, data } from '../../data/Data';

const ODD_OPACITY = 0.2;

const DataTable = styled(DataGrid)(({ theme }) => ({
  [`& .${gridClasses.row}.even`]: {
    backgroundColor: '#5E696E',
    '&:hover': {
      backgroundColor: '#3C4FE2'
    },
    '&.Mui-selected': {
      backgroundColor: '#57A527',
      '&:hover': {
        backgroundColor: '#8FBB99',
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: alpha(
            theme.palette.primary.main,
            ODD_OPACITY + theme.palette.action.selectedOpacity,
          ),
        },
      },
    },
  },
  [`& .${gridClasses.row}.odd`]: {
    backgroundColor: '#444C50',
    '&:hover': {
      backgroundColor: '#1828A0'
    },
    '&.Mui-selected': {
      backgroundColor: '#3D741B',
      '&:hover': {
        backgroundColor: '#8FBB99',
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: alpha(
            theme.palette.primary.main,
            ODD_OPACITY + theme.palette.action.selectedOpacity,
          ),
        },
      },
    },
  },
  '& .header-cell' : {
    backgroundColor: '#2A2A28',
    },
  '.MuiSvgIcon-root': {
    color: 'white'
    },
}));

export default function Table() {

    return(
      <DataTable
      {...data}
      getRowClassName={(params) =>
        params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd'
      }
        rows={data}
        columns={columns}
        columnVisibilityModel={{
          word: true,
          id: false,
          definition: true,
          comfortability: true,
          lastModified: false,
          lock: false
        }}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        sx={{
          margin: '2vw 2vh',
          color: '#FFFF',
          
          
        }}
      />
    );
}