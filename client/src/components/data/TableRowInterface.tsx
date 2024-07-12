import * as React from 'react';
import { GridColDef, GridCellParams } from '@mui/x-data-grid';
import RowDate from '../ui/table/words_table/row-date/RowDate';
import RowLock from '../ui/table/words_table/row-lock/RowLock';
import RowSlider from '../ui/table/words_table/row-comfortability/RowComfortability';


export interface TableRow {
    id: number | null,
    word: string;
    romanization: string,  
    definition: string;
    comfortability: number;
    expirationDate: string;
    lock: boolean | number;
};



