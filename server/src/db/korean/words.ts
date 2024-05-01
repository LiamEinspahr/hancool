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

  // =======================================================================================================================================================================
  //UPDATE WORD
  export function modifyKoreanWord(newWord: string, id: string) {
    const queryString = `UPDATE 'korean.'words' SET 'word' = ${newWord} WHERE ('id' = ${id})`;
    return ModifyQuery(queryString);
  }

  //UPDATE ID
  export function modifyKoreanWordID(oldID: number, newID: string) {
    const queryString = `UPDATE 'korean.'words' SET 'id' = ${newID} WHERE ('id' = ${oldID})`;    
    return ModifyQuery(queryString)
  }

  //UPDATE ROMANIZATION
  export function modifyKoreanWordRomanization(newRomanization: any, id: string) {
    const queryString = `UPDATE 'korean.'words' SET 'romanization' = ${newRomanization} WHERE ('id' = ${id})`;    
    return ModifyQuery(queryString);
  }

  //UPDATE DEFINITION
  export function modifyKoreanWordDefinition(newDefinition: any, id: string) {
    const queryString = `UPDATE 'korean.'words' SET 'definition' = ${newDefinition} WHERE ('id' = ${id})`;    
    return ModifyQuery(queryString);
  }

  //UPDATE COMFORTABILITY
  export function modifyKoreanWordComfortability(newComfortability: any, id: string) {
    const queryString = `UPDATE 'korean.'words' SET 'comfortability' = ${newComfortability} WHERE ('id' = ${id})`;    
    return ModifyQuery(queryString);
  }

  //UPDATE DATE
  export function modifyKoreanWordExpirationDate(newDate: any, id: string) {
    const queryString = `UPDATE 'korean.'words' SET 'expirationDate' = ${newDate} WHERE ('id' = ${id})`;    
    return ModifyQuery(queryString);
  }

  //UPDATE LOCK
  export function modifyKoreanWordLock(newLock: any, id: string) {
    console.log("after: " + newLock);
    const queryString = `UPDATE \`korean\`.\`words\` SET \`lock\` = '${newLock}' WHERE (\`id\` = '${id}');`;
    return ModifyQuery(queryString);
  }
    // =======================================================================================================================================================================