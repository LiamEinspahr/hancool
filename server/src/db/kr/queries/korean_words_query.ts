import { RowDataPacket } from "mysql2";
import { ModifyQuery, SelectQuery } from "../../queryUtils";

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
    return SelectQuery<IWordRow>('SELECT * FROM korean_words;');
  }

  export function getOneKoreanWord(id: string) {
    return SelectQuery<IWordRow>('SELECT * FROM korean_words where id = ' + id + ';');
  }


  //INSERTION
  export function insertKoreanWord(newWord: IWordRow) {
    const queryString = `INSERT INTO \`korean\`.\`korean_words\` (\`id\`, \`word\`, \`romanization\`, \`definition\`, \`comfortability\`, \`expirationDate\`, \`lock\`) VALUES ('${newWord.id}', '${newWord.word}', '${newWord.romanization}', '${newWord.definition}', '${newWord.comfortability}', '${newWord.expirationDate}', '${newWord.lock}');`;
    return ModifyQuery(queryString);

  }

  //DELETION
  export function deleteKoreanWord(id: string) {
    const queryString = `DELETE FROM \`korean\`.\`korean_words\` WHERE (\`id\` = '${id}');`;
    return ModifyQuery<IWordRow>(queryString);
  }

  // =======================================================================================================================================================================
  //UPDATE ID
  export function modifyKoreanWordID(newID: string, oldID: string ) {
    const queryString = `UPDATE \`korean\`.\`korean_words\` SET \`id\` = '${newID}' WHERE (\`id\` = '${oldID}');`;
    return ModifyQuery(queryString);
  }

  //UPDATE WORD
  export function modifyKoreanWord(newWord: string, id: string) {
    const queryString = `UPDATE \`korean\`.\`korean_words\` SET \`word\` = '${newWord}' WHERE (\`id\` = '${id}');`;
    return ModifyQuery(queryString);
  }



  //UPDATE ROMANIZATION
  export function modifyKoreanWordRomanization(newRomanization: any, id: string) {
    const queryString = `UPDATE \`korean\`.\`korean_words\` SET \`romanization\` = '${newRomanization}' WHERE (\`id\` = '${id}');`;
    return ModifyQuery(queryString);
  }

  //UPDATE DEFINITION
  export function modifyKoreanWordDefinition(newDefinition: any, id: string) {
    const queryString = `UPDATE \`korean\`.\`korean_words\` SET \`definition\` = '${newDefinition}' WHERE (\`id\` = '${id}');`;
    return ModifyQuery(queryString);
  }

  //UPDATE COMFORTABILITY
  export function modifyKoreanWordComfortability(newComfortability: any, id: string) {
    const queryString = `UPDATE \`korean\`.\`korean_words\` SET \`comfortability\` = '${newComfortability}' WHERE (\`id\` = '${id}');`;
    return ModifyQuery(queryString);
  }

  //UPDATE DATE
  export function modifyKoreanWordExpirationDate(newDate: any, id: string) {
    const queryString = `UPDATE \`korean\`.\`korean_words\` SET \`expirationDate\` = '${newDate}' WHERE (\`id\` = '${id}');`;
    return ModifyQuery(queryString);
  }

  //UPDATE LOCK
  export function modifyKoreanWordLock(newLock: any, id: string) {
    const queryString = `UPDATE \`korean\`.\`korean_words\` SET \`lock\` = '${newLock}' WHERE (\`id\` = '${id}');`;
    return ModifyQuery(queryString);
  }
    // =======================================================================================================================================================================