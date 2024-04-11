import * as React from 'react';
import { Box } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { columns, data } from '../../data/Data';

export default function Table() {

    return(
      <DataGrid
        rows={data}
        columns={columns}
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
          color: '#FFFF',
          '& .header-cell' : {
            backgroundColor: '#BBB6B4',
          },
          '& .body-cell': {
            backgroundColor: 'rg',
          },
        }}
      />
    );
}