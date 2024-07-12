import { GridToolbarColumnsButton, GridToolbarContainer, GridToolbarExport, GridToolbarQuickFilter } from "@mui/x-data-grid";
import TableDialogAddWord from '../table-dialog/TableDialogAddWord';
import TableDialogDeleteWord from '../table-dialog/TableDialogDeleteWord';

export default function TableCustomToolbar(props: any) {

  const handleAddData = (data: any) => {
    props.onAddData(data);
  }

  const handleDestoryData = (id: any) => {
    props.onDestoryData(id);
  }

    return (
      <GridToolbarContainer sx={{display: 'flex', justifyContent: 'space-between'}}>
        <div id="toolbar-rhs">
            <GridToolbarColumnsButton />
            <GridToolbarExport />
            <TableDialogAddWord currentState={props.dialogState} onAdd={handleAddData} ></TableDialogAddWord>
            <TableDialogDeleteWord currentState={props.dialogState} onDestory={handleDestoryData}></TableDialogDeleteWord>
        </div>
        <div id="toolbar-lhs">

            <GridToolbarQuickFilter />
        </div>
      </GridToolbarContainer>
    );
  }