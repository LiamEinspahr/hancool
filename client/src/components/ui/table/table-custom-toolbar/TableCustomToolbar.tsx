import * as React from 'react';
import { GridToolbarColumnsButton, GridToolbarContainer, GridToolbarDensitySelector, GridToolbarExport, GridToolbarFilterButton, GridToolbarQuickFilter } from "@mui/x-data-grid";
import TableDialogAddWord from '../table-dialog/TableDialogAddWord';
import TableDialogDeleteWord from '../table-dialog/TableDialogDeleteWord';

export default function TableCustomToolbar(props: any) {
    return (
      <GridToolbarContainer sx={{display: 'flex', justifyContent: 'space-between'}}>
        <div id="toolbar-rhs">
            <GridToolbarColumnsButton />
            <GridToolbarExport />
            <TableDialogAddWord currentState={props.dialogState}></TableDialogAddWord>
            <TableDialogDeleteWord currentState={props.dialogState}></TableDialogDeleteWord>
        </div>
        <div id="toolbar-lhs">

            <GridToolbarQuickFilter />
        </div>
      </GridToolbarContainer>
    );
  }