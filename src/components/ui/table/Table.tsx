import * as React from 'react';
import { Box, alpha, styled } from '@mui/material';
import { DataGrid, GridToolbar, GridRowsProp, GridColDef, gridClasses, GridFilterModel, GridColumnVisibilityModel} from '@mui/x-data-grid';
import { columns} from '../../data/DataInterface';
import { data } from '../../data/Data';
import { DataTable } from './styled-data-grid/StyledDataGrid';

//Test

export type RowState = {
  rowState: boolean,
  setRowState: (bool: boolean) => void;
}

export const RowStateContext = React.createContext<RowState>({
  rowState: false,
  setRowState: () => {}
})

export const useRowStateContext = () => React.useContext(RowStateContext);

export default function Table() {

const [rowState, setRowState] = React.useState<boolean>(false);


  const [filterModel, setFilterModel] = React.useState<GridFilterModel>({
      items: [],
      quickFilterExcludeHiddenColumns: false,
      quickFilterValues: [],
    });

  const [columnVisibilityModel, setColumnVisibilityModel] = React.useState<GridColumnVisibilityModel>({});

  return(
    <RowStateContext.Provider value={{rowState, setRowState}}>
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
      </RowStateContext.Provider>
  );
}