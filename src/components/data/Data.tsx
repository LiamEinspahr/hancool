//Thhis array will be used as the rows component inside Table.tsx
import { GridColDef } from '@mui/x-data-grid';

export const columns: GridColDef[] = [
    {field: 'word', headerName: 'Word', flex: 1, headerClassName: 'header-cell', cellClassName: 'body-cell' },
    {field: 'id', headerName: 'Romanization', flex: 1, headerClassName: 'header-cell', cellClassName: 'body-cell'},
    {field: 'definition', headerName: 'Definition', flex: 1, headerClassName: 'header-cell', cellClassName: 'body-cell'},
    {field: 'comfortability', headerName: 'Comfortability', flex: 1, headerClassName: 'header-cell', cellClassName: 'body-cell'},
    {field: 'lastModified', headerName: 'Last Checked', flex: 1, headerClassName: 'header-cell', cellClassName: 'body-cell'},
    {field: 'lock', headerName: 'Lock', flex: 1, headerClassName: 'header-cell', cellClassName: 'body-cell'},
]

export interface TableRow {
    word: string;
    id: string,
    definition: string;
    comfortability: number;
    lastModified: Date | null;
    lock: boolean;
};


const template: TableRow = 
{
    word: '',
    id: '',
    definition: '',
    comfortability: 3,
    lastModified: null,
    lock: false,
}

export const data: TableRow[] = [
//A
    {
        word: '안녕하세요',
        id: 'annyeonghaseyo',
        definition: 'Hello (polite) / How are you?',
        comfortability: 3,
        lastModified: null,
        lock: false,
    },

    {
        word: '안녕히 계세요',
        id: 'annyeonghi gyeseyo',
        definition: 'Bye (polite) (You are leaving)',
        comfortability: 3,
        lastModified: null,
        lock: false,
    },

    {
        word: '안녕히 가세요',
        id: 'annyeonghi gaseyo',
        definition: 'Bye (polite) (Other is leaving)',
        comfortability: 3,
        lastModified: null,
        lock: false,
    },

//B


//C


//D


//E


//G


//H


//I


//J


//K


//L


//M


//N


//O


//P


//R


//S


//T


//U


//W


//Y









];