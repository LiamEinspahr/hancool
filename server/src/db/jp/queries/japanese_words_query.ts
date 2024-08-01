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


  //INSERTION
  export function insertJapaneseWord(newWord: IWordRow) {
    const queryString = `INSERT INTO \`korean\`.\`japanese_words\` (\`id\`, \`word\`, \`romanization\`, \`definition\`, \`comfortability\`, \`expirationDate\`, \`lock\`) VALUES ('${newWord.id}', '${newWord.word}', '${newWord.romanization}', '${newWord.definition}', '${newWord.comfortability}', '${newWord.expirationDate}', '${newWord.lock}');`;
    return ModifyQuery(queryString);

  }

  //DELETION
  export function deleteJapaneseWord(id: string) {
    const queryString = `DELETE FROM \`korean\`.\`japanese_words\` WHERE (\`id\` = '${id}');`;
    return ModifyQuery<IWordRow>(queryString);
  }

  // =======================================================================================================================================================================
  //UPDATE ID
  export function modifyJapaneseWordID(newID: string, oldID: string ) {
    const queryString = `UPDATE \`korean\`.\`japanese_words\` SET \`id\` = '${newID}' WHERE (\`id\` = '${oldID}');`;
    return ModifyQuery(queryString);
  }

  //UPDATE WORD
  export function modifyJapaneseWord(newWord: string, id: string) {
    const queryString = `UPDATE \`korean\`.\`japanese_words\` SET \`word\` = '${newWord}' WHERE (\`id\` = '${id}');`;
    return ModifyQuery(queryString);
  }



  //UPDATE ROMANIZATION
  export function modifyJapaneseWordRomanization(newRomanization: any, id: string) {
    const queryString = `UPDATE \`korean\`.\`japanese_words\` SET \`romanization\` = '${newRomanization}' WHERE (\`id\` = '${id}');`;
    return ModifyQuery(queryString);
  }

  //UPDATE DEFINITION
  export function modifyJapaneseWordDefinition(newDefinition: any, id: string) {
    const queryString = `UPDATE \`korean\`.\`japanese_words\` SET \`definition\` = '${newDefinition}' WHERE (\`id\` = '${id}');`;
    return ModifyQuery(queryString);
  }

  //UPDATE COMFORTABILITY
  export function modifyJapaneseWordComfortability(newComfortability: any, id: string) {
    const queryString = `UPDATE \`korean\`.\`japanese_words\` SET \`comfortability\` = '${newComfortability}' WHERE (\`id\` = '${id}');`;
    return ModifyQuery(queryString);
  }

  //UPDATE DATE
  export function modifyJapaneseWordExpirationDate(newDate: any, id: string) {
    const queryString = `UPDATE \`korean\`.\`japanese_words\` SET \`expirationDate\` = '${newDate}' WHERE (\`id\` = '${id}');`;
    return ModifyQuery(queryString);
  }

  //UPDATE LOCK
  export function modifyJapaneseWordLock(newLock: any, id: string) {
    const queryString = `UPDATE \`korean\`.\`japanese_words\` SET \`lock\` = '${newLock}' WHERE (\`id\` = '${id}');`;
    return ModifyQuery(queryString);
  }

export function getOneWord(): [any] | PromiseLike<[any]> {
  throw new Error("Function not implemented.");
}

export function getAllWords() {
  throw new Error("Function not implemented.");
}
    // =======================================================================================================================================================================