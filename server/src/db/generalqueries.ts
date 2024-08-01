import { RowDataPacket } from "mysql2";
import { ModifyQuery, SelectQuery } from "./queryUtils";
import { currentLanguage } from "./connection";

export interface IWordRow extends RowDataPacket {
    id: number,
    word: string,
    romanization: string,
    definition: string,
    comfortability: number,
    expirationDate: string,
    lock: boolean
  }



  //GETTERS
  export function getAllWords() {
    console.log("jp called\n");
    return SelectQuery<IWordRow>(`SELECT * FROM ${currentLanguage.language}_words;`);
  }

  export function getOneWord(id: string) {
    return SelectQuery<IWordRow>(`SELECT * FROM ${currentLanguage.language}_words where id = ' + id + ';`);
  }