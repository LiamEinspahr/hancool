
export interface PromptVar {
    value: string,
}

export interface PromptVarCount {
    count: number,
    varType: string,
    promptVariables: PromptVar[]
}

export interface Prompt {
    promptVariableTable: PromptVarCount[],
    english_translation: string,
    korean_translation: string,
    

}