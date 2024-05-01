import * as React from 'react';
import { GridToolbar, GridColDef,  GridFilterModel, GridColumnVisibilityModel, GridValidRowModel, GridRowModel} from '@mui/x-data-grid';
import { DataTable } from './styled-data-grid/StyledDataGrid';
import RowSelect from './row-slider/RowSelect';
import RowDate from './row-date/RowDate';
import RowLock from './row-lock/RowLock';
import { TableRow } from '../../data/TableRowInterface';
import AddWord from './table-dialog/TableDialogAddWord';
import { Button } from '@mui/material';
import { Add } from '@mui/icons-material';
import TableCustomToolbar from './table-custom-toolbar/TableCustomToolbar';


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
  const [dialogState, setDialogState] = React.useState(false);
  const [filterModel, setFilterModel] = React.useState<GridFilterModel>({
    items: [],
    quickFilterExcludeHiddenColumns: false,
    quickFilterValues: [],
  });


  //===========================================================================================================

  //FUNCTIONS
  //===========================================================================================================
  const handleID = (id, newValue) => {
    const dataRows = [...backendKoreanWords];
    dataRows.find((row) => row.id === id)!.id = id;
    setBackendKoreanWords(dataRows);
  }
  
  const handleWord = (id, newValue) => {
    const dataRows = [...backendKoreanWords];
    dataRows.find((row) => row.id === id)!.word = newValue;
    setBackendKoreanWords(dataRows);
  }

  const handleRomanization = (id, newValue) => {
    const dataRows = [...backendKoreanWords];
    dataRows.find((row) => row.id === id)!.romanization = newValue;
    setBackendKoreanWords(dataRows);
  }

  const handleDefinition = (id, newValue) => {
    const dataRows = [...backendKoreanWords];
    dataRows.find((row) => row.id === id)!.definition = newValue;
    setBackendKoreanWords(dataRows);
  }

  const handleComfortability = (id, newValue) => {
    const dataRows = [...backendKoreanWords];
    dataRows.find((row) => row.id === id)!.comfortability = newValue;
    setBackendKoreanWords(dataRows);
  }

  const handleDate = (id, newValue) => {
    const dataRows = [...backendKoreanWords];
    dataRows.find((row) => row.id === id)!.expirationDate = newValue;
    setBackendKoreanWords(dataRows);
  }
  
  const handleLock = (id, lockState) => {

    //Need to get opposite of current lockstate to pass in
    //Also need to convert to an object for JSON.stringify
    const newLockState = (!lockState ? {lock: 1} : {lock: 0} );
    const dataRows = [...backendKoreanWords];


    dataRows.find((row) => row.id === id)!.lock = !lockState;
    setBackendKoreanWords(dataRows);
    fetch(`/api/words/updateLock/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      
      body: JSON.stringify(newLockState)
    }).then(response => {
      if (!response.ok) {
        throw new Error("err");
      }
    })
    .catch(error => {
      // Handle errors
      console.error("Error updating lock state:", error);
      return;
    });
  }


  const insertRow = (newRow: TableRow) => {
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

  const saveOnServer = (newRow: any, oldRow: any) => {
    setBackendKoreanWords((oldData) => oldData.map((row) => (row.id === newRow.id ? newRow : row)));
    console.log("new Word: " + newRow.word);
    console.log("old Word: " + oldRow.word);
    console.log("updated: " + backendKoreanWords[newRow.id-1].word);

    return newRow;
};
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
              <RowSelect id={params.row.id} disabled={params.row.lock} passedInValue={params.row.comfortability}  onChange={handleComfortability}></RowSelect>
          );
      }
    },
    {field: 'expirtationDate', headerName: 'Expiration Date', flex: 1, headerClassName: 'header-cell', cellClassName: 'body-cell',
      renderCell: (params) => {
          return(
                  <RowDate disabled={params.row.lock} onChange={handleDate}></RowDate>
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
          getRowId={(row) => row.id}
          initialState={{
            pagination: { paginationModel: {pageSize: 25}}
          }}
          onColumnVisibilityModelChange={(newModel) =>
              setColumnVisibilityModel(newModel)
          }
          onFilterModelChange={(newModel) => setFilterModel(newModel)}
          pageSizeOptions={[25, 50, 75]}
          processRowUpdate={saveOnServer}
          rows={backendKoreanWords}
          slots={{ toolbar: TableCustomToolbar}}
          slotProps={{ toolbar: { showQuickFilter: true, dialogState: dialogState } }}
        />
        </>
  );
}