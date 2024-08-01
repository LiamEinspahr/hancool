import { RowDataPacket } from "mysql2";
import { ModifyQuery, SelectQuery } from "../../queryUtils";





export function getPrompts() {
    return SelectQuery<any>('SELECT * FROM hancool.korean_prompter_prompts;');
  }

  export function getVocab() {
    return SelectQuery<any>('SELECT * FROM hancool.korean_prompter_variables;');
  }