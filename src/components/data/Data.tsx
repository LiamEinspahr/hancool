//Thhis array will be used as the rows component inside Table.tsx
import * as  React from 'react';
import { TableRow } from './DataInterface';


const template: TableRow = 
{
    id: -1,
    word: '',
    romanization: '',
    definition: '',
    comfortability: 3,
    lastModified: null,
    lock: false,
}

export const data: TableRow[] = [
//A
    {
        id: 0,
        word: '안녕하세요',
        romanization: 'annyeonghaseyo',
        definition: 'Hello (polite) / How are you?',
        comfortability: 3,
        lastModified: null,
        lock: false,
    },

    {
        id: 1,
        word: '안녕히 계세요',
        romanization: 'annyeonghi gyeseyo',
        definition: 'Bye (polite) (You are leaving)',
        comfortability: 3,
        lastModified: null,
        lock: false,
    },

    {
        id: 2,
        word: '안녕히 가세요',
        romanization: 'annyeonghi gaseyo',
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

let index = 0;
data.map(n => {
    n.id = index;
    index++;
})