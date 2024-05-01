import * as React from 'react';
import { GridColDef, GridCellParams } from '@mui/x-data-grid';
import RowDate from '../ui/table/row-date/RowDate';
import RowLock from '../ui/table/row-lock/RowLock';
import RowSlider from '../ui/table/row-comfortability/RowComfortability';


export interface TableRow {
    id: number | null,
    word: string;
    romanization: string,  
    definition: string;
    comfortability: number;
    expirationDate: string;
    lock: boolean | number;
};



