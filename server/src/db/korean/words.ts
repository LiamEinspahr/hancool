import { RowDataPacket } from "mysql2";
import { SelectQuery } from "../queryUtils";

export interface IWordRow extends RowDataPacket {
    id: number,
    korean: string,
    romanization: string,
    definition: string,
    comfortability: number,
    lastChecked: Date,
    lock: boolean
  }

  export function getAllKoreanWords() {
    return SelectQuery<IWordRow>('Select * FROM words;');
  }

  export function getOneKoreanWord(id: string) {
    return SelectQuery<IWordRow>('Select * FROM words where id = ' + id + ';');
  }