import * as React from 'react';
import { createContext, useContext } from 'react';
import { Box, alpha, styled } from '@mui/material';
import { DataGrid, GridToolbar, GridRowsProp, GridColDef, gridClasses, GridFilterModel, GridColumnVisibilityModel} from '@mui/x-data-grid';
import { data, getRowData } from '../../data/Data';
import { DataTable } from './styled-data-grid/StyledDataGrid';
import RowSlider from './row-slider/RowSlider';
import RowDate from './row-date/RowDate';
import RowLock from './row-lock/RowLock';



export default function Table() {


  //STATES
  //===========================================================================================================
  const [rows, setRows] = React.useState(getRowData());
  const [columnVisibilityModel, setColumnVisibilityModel] = React.useState<GridColumnVisibilityModel>({});
  const [filterModel, setFilterModel] = React.useState<GridFilterModel>({
    items: [],
    quickFilterExcludeHiddenColumns: false,
    quickFilterValues: [],
  });


  //===========================================================================================================

  //FUNCTIONS
  //===========================================================================================================
   const handleLock = (id, lockState) => {
    const dataRows = [...rows];
    dataRows.find((row) => row.id === id)!.lock = !lockState;
    setRows(dataRows);
  }
  //===========================================================================================================

  //COLUMN DEFINITIONS
  //===========================================================================================================
  const columns: GridColDef[] = [
    {field: 'id', headerName: 'ID', flex: 1, headerClassName: 'header-cell', cellClassName: 'body-cell'},
    {field: 'word', headerName: 'Word', flex: 1, headerClassName: 'header-cell', cellClassName: 'body-cell' },
    {field: 'romanization', headerName: 'Romanization', flex: 1, headerClassName: 'header-cell', cellClassName: 'body-cell'},
    {field: 'definition', headerName: 'Definition', flex: 1, headerClassName: 'header-cell', cellClassName: 'body-cell'},
    {field: 'comfortability', headerName: 'Comfortability', flex: 1, headerClassName: 'header-cell', cellClassName: 'body-cell',
      renderCell: (params) => {
          return(
              <RowSlider disabled={params.row.lock}></RowSlider>
          );
      }
    },
    {field: 'lastModified', headerName: 'Last Checked', flex: 1, headerClassName: 'header-cell', cellClassName: 'body-cell',
      renderCell: (params) => {
          return(
                  <RowDate disabled={params.row.lock}></RowDate>
          );
      }
    },
    {field: 'lock', headerName: 'Lock', flex: 1, headerClassName: 'header-cell', cellClassName: 'body-cell',
      renderCell: (params) => {
          return(
                  <RowLock id={params.row.id} lockState={params.row.lock} onClick={handleLock}></RowLock>            
              );
      } 
    },
];
//===========================================================================================================

  return(
        <DataTable
          checkboxSelection
          columns={columns}
          columnVisibilityModel={columnVisibilityModel}
          disableColumnFilter
          disableDensitySelector
          disableRowSelectionOnClick
          filterModel={filterModel}
          getRowClassName={(params) =>
            params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd'
          }
          onColumnVisibilityModelChange={(newModel) =>
              setColumnVisibilityModel(newModel)
          }
          onFilterModelChange={(newModel) => setFilterModel(newModel)}
          rows={data}
          slots={{ toolbar: GridToolbar }}
          slotProps={{ toolbar: { showQuickFilter: true } }}
        />
  );
}