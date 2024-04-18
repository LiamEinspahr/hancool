import * as React from 'react';
import { GridColDef, GridCellParams } from '@mui/x-data-grid';
import RowDate from '../ui/table/row-date/RowDate';
import RowLock from '../ui/table/row-lock/RowLock';
import RowSlider from '../ui/table/row-slider/RowSlider';


export const columns: GridColDef[] = [
    {field: 'id', headerName: 'ID', flex: 1, headerClassName: 'header-cell', cellClassName: 'body-cell'},
    {field: 'word', headerName: 'Word', flex: 1, headerClassName: 'header-cell', cellClassName: 'body-cell' },
    {field: 'romanization', headerName: 'Romanization', flex: 1, headerClassName: 'header-cell', cellClassName: 'body-cell'},
    {field: 'definition', headerName: 'Definition', flex: 1, headerClassName: 'header-cell', cellClassName: 'body-cell'},
    {field: 'comfortability', headerName: 'Comfortability', flex: 1, headerClassName: 'header-cell', cellClassName: 'body-cell',
        renderCell: () => {
            return(
                <RowSlider></RowSlider>
            );
        }
    },
    {field: 'lastModified', headerName: 'Last Checked', flex: 1, headerClassName: 'header-cell', cellClassName: 'body-cell',
        renderCell: () => {
            return(
                    <RowDate></RowDate>
            );
        }
    },
    {field: 'lock', headerName: 'Lock', flex: 1, headerClassName: 'header-cell', cellClassName: 'body-cell',
        renderCell: (index) => {
            return(
                    <RowLock ></RowLock>            
                );
        }
    },
]

export interface TableRow {
    id: number,
    word: string;
    romanization: string,
    definition: string;
    comfortability: number;
    lastModified: Date | null;
    lock: boolean;
};

