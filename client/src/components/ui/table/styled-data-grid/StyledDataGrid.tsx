import * as React from 'react';
import { Box, alpha, styled } from '@mui/material';
import { DataGrid, GridToolbar, GridRowsProp, GridColDef, gridClasses, GridFilterModel, GridColumnVisibilityModel} from '@mui/x-data-grid';


export const DataTable = styled(DataGrid)(({ theme }) => ({
    [`& .${gridClasses.row}.even`]: {
      backgroundColor: '#5E696E',
      '&:hover': {
        backgroundColor: '#3C4FE2'
      },
      '&.Mui-selected': {
        backgroundColor: '#57A527',
        '&:hover': {
          backgroundColor: '#8FBB99',
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
        },
      },
    },
    '& .header-cell' : {
      backgroundColor: '#2A2A28'
      },
    '.MuiSvgIcon-root': {
      color: 'white'
      },
    '.MuiDataGrid-columnHeaderTitleContainer' : {
      backgroundColor: '#2A2A28'
    },
    '.MuiTablePagination-displayedRows': {
      color: 'white'
    },
    '.MuiTablePagination-selectLabel': {
      color: 'white'
    },
    '.MuiInputBase-input': {
      color: 'white'
    },
      margin: '2vw 2vh',
      color: '#FFFF',
  }));