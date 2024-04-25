import * as React from 'react';
import { createContext, useContext } from 'react';
import { Box, Button, alpha, styled } from '@mui/material';
import { DataGrid, GridToolbar, GridRowsProp, GridColDef, gridClasses, GridFilterModel, GridColumnVisibilityModel} from '@mui/x-data-grid';
import { DataTable } from './styled-data-grid/StyledDataGrid';
import RowSlider from './row-slider/RowSlider';
import RowDate from './row-date/RowDate';
import RowLock from './row-lock/RowLock';
import { TableRow } from '../../data/TableRowInterface';
import dayjs from 'dayjs';



export default function Table() {

  const today = new Date().toISOString().split('T')[0];

  //Server
  //===========================================================================================================
  const [backendKoreanWords, setBackendKoreanWords] = React.useState<TableRow[]>([]);

  React.useEffect(() => {
    fetch("/api/words").then(
      response => response.json()
    ).then(
      data => {
        setBackendKoreanWords(data) 
      }
    )
  }, [])
  //===========================================================================================================

  //STATES
  //===========================================================================================================
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
    const dataRows = [...backendKoreanWords];
    dataRows.find((row) => row.id === id)!.lock = !lockState;
    setBackendKoreanWords(dataRows);
  }

  const test: TableRow = {
    id: null,
    word: 'I',
    romanization: 'am',
    definition: 'testing',
    comfortability: 5,
    expirationDate: today,
    lock: false

  }
  const insertRow = (newRow: TableRow) => {
    console.log(newRow.expirationDate);
    if(newRow.lock === true)
        newRow.lock = 1;
    else
      newRow.lock = 0;

    fetch('/api/words', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",

      },
      body: JSON.stringify(newRow)
    }).then(response => {
      if (!response.ok) {
        throw new Error("Failed to send data to server");
      }
      // Handle successful response
      console.log("Data sent successfully!");
    })
    .catch(error => {
      // Handle errors
      console.error("Error sending data to server:", error);
    });
  }
  //===========================================================================================================

  //COLUMN DEFINITIONS
  //===========================================================================================================
  const columns: GridColDef[] = [
    {field: 'id', headerName: 'ID', editable: true, flex: 1, headerClassName: 'header-cell', cellClassName: 'body-cell'},
    {field: 'word', headerName: 'Word', editable: true, flex: 1, headerClassName: 'header-cell', cellClassName: 'body-cell' },
    {field: 'romanization', headerName: 'Romanization', editable: true, flex: 1, headerClassName: 'header-cell', cellClassName: 'body-cell'},
    {field: 'definition', headerName: 'Definition', editable: true, flex: 1, headerClassName: 'header-cell', cellClassName: 'body-cell'},
    {field: 'comfortability', headerName: 'Comfortability', flex: 1, headerClassName: 'header-cell', cellClassName: 'body-cell',
      renderCell: (params) => {
          return(
              <RowSlider disabled={params.row.lock}></RowSlider>
          );
      }
    },
    {field: 'expirtationDate', headerName: 'Expiration Date', flex: 1, headerClassName: 'header-cell', cellClassName: 'body-cell',
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
    <>
      <button onClick={ () => insertRow(test)}></button>
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
          initialState={{
            pagination: { paginationModel: {pageSize: 25}}
          }}
          onColumnVisibilityModelChange={(newModel) =>
              setColumnVisibilityModel(newModel)
          }
          onFilterModelChange={(newModel) => setFilterModel(newModel)}
          pageSizeOptions={[25, 50, 75]}
          rows={backendKoreanWords}
          slots={{ toolbar: GridToolbar }}
          slotProps={{ toolbar: { showQuickFilter: true } }}
        />
        </>
  );
}