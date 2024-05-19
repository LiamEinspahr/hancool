import * as React from 'react';
import {GridColDef,  GridFilterModel, GridColumnVisibilityModel} from '@mui/x-data-grid';
import { DataTable } from './styled-data-grid/StyledDataGrid';
import RowComfortability from './row-comfortability/RowComfortability';
import RowDate from './row-date/RowDate';
import RowLock from './row-lock/RowLock';
import { TableRow } from '../../data/TableRowInterface';
import TableCustomToolbar from './table-custom-toolbar/TableCustomToolbar';


export default function Table() {

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
  const handleID = (oldID, newID) => {

    console.log("oldID: " + oldID);
    console.log("newID: " + newID);
    const newIDJSON = {id: newID};
    const dataRows = [...backendKoreanWords];
    dataRows.find((row) => row.id === oldID)!.id = newID;
    setBackendKoreanWords(dataRows);

    fetch(`/api/words/updateID/${oldID}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      
      body: JSON.stringify(newIDJSON)
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
  
  const handleWord = (id, newValue) => {
    console.log("called handleWored");

    const newWordJSON= {word: newValue};
    const dataRows = [...backendKoreanWords];
    dataRows.find((row) => row.id === id)!.word = newValue;
    setBackendKoreanWords(dataRows);

    fetch(`/api/words/updateWord/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      
      body: JSON.stringify(newWordJSON)
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

  const handleRomanization = (id, newValue) => {
    const newRomanizationJSON= {romanization: newValue};
    const dataRows = [...backendKoreanWords];
    dataRows.find((row) => row.id === id)!.romanization = newValue;
    setBackendKoreanWords(dataRows);

    fetch(`/api/words/updateRomanization/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      
      body: JSON.stringify(newRomanizationJSON)
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

  const handleDefinition = (id, newValue) => {

    const newDefinitionJSON = {definition: newValue};
    const dataRows = [...backendKoreanWords];
    dataRows.find((row) => row.id === id)!.definition = newValue;
    setBackendKoreanWords(dataRows);

    fetch(`/api/words/updateDefinition/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      
      body: JSON.stringify(newDefinitionJSON)
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

  const handleComfortability = (id, newValue) => {
    const newComfortabilityJSON = {comfortability: newValue};
    const dataRows = [...backendKoreanWords];
    dataRows.find((row) => row.id === id)!.comfortability = newValue;
    setBackendKoreanWords(dataRows);

    fetch(`/api/words/updateComfortability/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      
      body: JSON.stringify(newComfortabilityJSON)
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

  const handleDate = (id, newValue) => {
    const newExpirationDateJSON = {expirationDate: newValue};
    const dataRows = [...backendKoreanWords];
    dataRows.find((row) => row.id === id)!.expirationDate = newValue;
    setBackendKoreanWords(dataRows);

    fetch(`/api/words/updateExpirationDate/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      
      body: JSON.stringify(newExpirationDateJSON)
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
      if(newRow.lock === Number(1))
          newRow.lock = true;
      else
        newRow.lock = false;
      setBackendKoreanWords((oldArray) => [...oldArray, newRow]);
    })
    .catch(error => {
      // Handle errors
      console.error("Error sending data to server:", error);
    });
  }

  const deleteRow = (id: string) => {
    
    const idJSON = {id: id};
    fetch('/api/words', {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",

      },
      body: JSON.stringify(idJSON)
    }).then(response => {
      if (!response.ok) {
        throw new Error("Failed to send data to server");
      }
      // Handle successful response
      console.log("Data sent successfully!");
      setBackendKoreanWords((oldArray) => oldArray.filter(function(row) {
        return row.id !== Number(id);
      }));
    })
    .catch(error => {
      // Handle errors
      console.error("Error sending data to server:", error);
    });
  }


  const saveOnServer = (newRow: any, oldRow: any) => {

    let property = "";

    for (const key in oldRow) {
      if (oldRow.hasOwnProperty(key)) {
          if (oldRow[key] !== newRow[key]) {
              console.log(`${key} changed from ${oldRow[key]} to ${newRow[key]}`);
              property = key;
              break;
            }
        }
    } 
 
    switch(property) { 
      case 'word' :
        handleWord(oldRow.id, newRow.word);
        break;
      case 'romanization' : 
        handleRomanization(oldRow.id, newRow.romanization);
        break;
      case 'definition' :
        handleDefinition(oldRow.id, newRow.definition);
        break;
      case 'id' :
        handleID(oldRow.id, newRow.id);
        break;
    }

    setBackendKoreanWords((oldData) => oldData.map((row) => (row.id === newRow.id ? newRow : row)));

    return newRow;
};
  //===========================================================================================================

  //COLUMN DEFINITIONS
  //===========================================================================================================
  const columns: GridColDef[] = [
    {field: 'id', headerName: 'ID', editable: true, flex: 1, headerClassName: 'header-cell', cellClassName: 'body-cell', align: 'left', headerAlign: 'left'},
    {field: 'word', headerName: 'Word', editable: true, flex: 1, headerClassName: 'header-cell', cellClassName: 'body-cell' },
    {field: 'romanization', headerName: 'Romanization', editable: true, flex: 1, headerClassName: 'header-cell', cellClassName: 'body-cell', align: 'left', headerAlign: 'left'},
    {field: 'definition', headerName: 'Definition', editable: true, flex: 1, headerClassName: 'header-cell', cellClassName: 'body-cell', align: 'left', headerAlign: 'left'},
    {field: 'comfortability', headerName: 'Comfortability', flex: 0.5, headerClassName: 'header-cell', cellClassName: 'field-cell', align: 'left', headerAlign: 'left',
      renderCell: (params) => {
          return(
              <RowComfortability id={params.row.id} disabled={params.row.lock} passedInValue={params.row.comfortability}  onChange={handleComfortability}></RowComfortability>
          );
      },
    },
    {field: 'expirationDate', headerName: 'Expiration Date', flex: 1, headerClassName: 'header-cell', cellClassName: 'field-cell', align: 'left', headerAlign: 'left',
      renderCell: (params) => {
          return(
                  <RowDate disabled={params.row.lock} id={params.row.id} onChange={handleDate} passedInDate={params.row.expirationDate}></RowDate>
          );
      }
    },
    {field: 'lock', headerName: 'Lock', flex: 0.5, headerClassName: 'header-cell', cellClassName: 'body-cell', align: 'left', headerAlign: 'left',
      renderCell: (params) => {
          return(
                  <RowLock expirationDate={params.row.expirationDate} id={params.row.id} lockState={params.row.lock} onClick={handleLock}></RowLock>            
              );
      } 
    },
];
//===========================================================================================================

  return(
    <>
        <DataTable
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
          rowHeight={75}
          slots={{ toolbar: TableCustomToolbar}}
          slotProps={{ toolbar: { showQuickFilter: true, dialogState: dialogState, onAddData: insertRow, onDestoryData: deleteRow } }}
        />
        </>
  );
}