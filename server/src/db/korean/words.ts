import { RowDataPacket } from "mysql2";
import { ModifyQuery, SelectQuery } from "../queryUtils";

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
  export function getAllKoreanWords() {
    return SelectQuery<IWordRow>('Select * FROM words;');
  }

  export function getOneKoreanWord(id: string) {
    return SelectQuery<IWordRow>('SELECT * FROM words where id = ' + id + ';');
  }


  //INSERTION
  export function insertKoreanWord(newWord: IWordRow) {
    const queryString = `INSERT INTO \`korean\`.\`words\` (\`word\`, \`romanization\`, \`definition\`, \`comfortability\`, \`expirationDate\`, \`lock\`) VALUES ('${newWord.word}', '${newWord.romanization}', '${newWord.definition}', '${newWord.comfortability}', '${newWord.expirationDate}', '${newWord.lock}');`;
    return ModifyQuery(queryString);

  }

  //DELETION
  export function deleteKoreanWord(id: string) {
    return ModifyQuery<IWordRow>('DELETE FROM `korean`.`words` WHERE (`id` = ' + id + "');");
  }

  //UPDATE
  export function modifyKoreanWord(attr: string, val: string, id: string) {
    return ModifyQuery<IWordRow>('UPDATE `korean`.`words` SET `' + attr + "` = '" + val + "' WHERE (`" + attr +"` = '" + id + "');'");
  }