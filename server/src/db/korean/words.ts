import { RowDataPacket } from "mysql2";
import { SelectQuery } from "../queryUtils";

export interface IWordRow extends RowDataPacket {
    word_id: number,
    word_korean: string,
    wored_romanization: string,
    word_definition: string,
    word_comfortability: number,
    word_lastChecked: Date,
    word_lock: boolean
  }

  export function getAllKoreanWords() {
    return SelectQuery<IWordRow>('Select * FROM words;');
  }

  export function getOneKoreanWord() {
    return SelectQuery<IWordRow>('Select * FROM words where word_id = 1;');
  }