import * as React from 'react';
import SubHeader from '../../layout/subheader/SubHeader';
import {createTheme, Stack} from '@mui/material';
import { Padding } from '@mui/icons-material';
import * as PROMPTVAR from './PrompterData';
import PrompterPageHeader from './header/PrompterPageHeader';
import PrompterPageBody from './body/PrompterPageBody';

interface prompter_sentence_part {
    text: string,
    isVariable: boolean,
    isOptional: boolean,
    variable_type: string,
    prefixText: string | null,
    postfixTest: string | null,
}

const prompterPage_theme = createTheme({
    components: {
        MuiContainer: {
            styleOverrides: {
                fixed: {
                    height: '100%',
                    paddingLeft: 0,
                    paddingRight: 0,
                    marginLeft: 0,
                    marginRight: 0,
                    width: '100vw'
                },
                root: {
                    height: '100%',
                    paddingLeft: 0,
                    paddingRight: 0,
                    marginLeft: 0,
                    marginRight: 0,
                    width: '100vw'
                }
            }
        }
    }
})




export default function PrompterPage() {

    const isOptionalRegex = new RegExp('(io)+(\\s)+[a-z]+');
    const testOptionalRegex = new RegExp('[a-z]*(\\s)*(io)+(\\s)+[a-z]+');

   const {sentences, setSentences} = React.useContext(PROMPTVAR.prompter_prompts_context);
   const [displaySentence, setDisplaySentence] = React.useState('');
   const [displaySentenceLanguage, setDisplaySentenceLangauge] = React.useState('Generate a sentence to start');
   const [hiddenSentence, setHiddenSentence] = React.useState('');
   const [isHidden, setIsHidden] = React.useState(false);
   
   const handleHidden = () => {
    setIsHidden(!isHidden);
    return;
   }


   const {appearance,setAppearance} = React.useContext(PROMPTVAR.appearance_context);
   const {clothes,setClothes} = React.useContext(PROMPTVAR.clothes_context);
   const {color,setColor} = React.useContext(PROMPTVAR.color_context);
   const {conjugation,setConjugation} = React.useContext(PROMPTVAR.conjugation_context);
   const {direction,setDirection} = React.useContext(PROMPTVAR.direction_context);
   const {dow,setDow} = React.useContext(PROMPTVAR.dow_context);
   const {everytime,setEveryTime} = React.useContext(PROMPTVAR.everyTime_context);
   const {excuseme,setExcuseMe} = React.useContext(PROMPTVAR.excuseMe_context);
   const {familialrelationship,setFamilialRelationship} = React.useContext(PROMPTVAR.familialRelationship_context);
   const {feeling,setFeeling} = React.useContext(PROMPTVAR.feeling_context);
   const {food,setFood} = React.useContext(PROMPTVAR.food_context);
   const {generaltime,setGeneralTime} = React.useContext(PROMPTVAR.generalTime_context);
   const {hobby,setHobby} = React.useContext(PROMPTVAR.hobby_context);
   const {hour,setHour} = React.useContext(PROMPTVAR.hour_context);
   const {hourtime,setHourTime} = React.useContext(PROMPTVAR.hourTime_context);
   const {ing,setIng} = React.useContext(PROMPTVAR.ing_context);
   const {item,setItem} = React.useContext(PROMPTVAR.item_context);
   const {itemtwo,setItemTwo} = React.useContext(PROMPTVAR.itemTwo_context);
   const {job,setJob} = React.useContext(PROMPTVAR.job_context);
   const {land,setLand} = React.useContext(PROMPTVAR.land_context);
   const {locativeadverb,setLocativeAdverb} = React.useContext(PROMPTVAR.locativeAdverb_context);
   const {minute,setMinute} = React.useContext(PROMPTVAR.minute_context);
   const {minutetime,setMinuteTime} = React.useContext(PROMPTVAR.minuteTime_context);
   const {month,setMonth} = React.useContext(PROMPTVAR.month_context);
   const {name,setName} = React.useContext(PROMPTVAR.name_context);
   const {native,setNative} = React.useContext(PROMPTVAR.native_context);
   const {personadjective,setPersonAdjective} = React.useContext(PROMPTVAR.personAdjective_context);
   const {place,setPlace} = React.useContext(PROMPTVAR.place_context);
   const {preposition,setPreposition} = React.useContext(PROMPTVAR.preposition_context);
   const {pronoun,setPronoun} = React.useContext(PROMPTVAR.pronoun_context);
   const {quality,setQuality} = React.useContext(PROMPTVAR.quality_context);
   const {season,setSeason} = React.useContext(PROMPTVAR.season_context);
   const {sightseeing,setSightSeeing} = React.useContext(PROMPTVAR.sightSeeing_context);
   const {sino,setSino} = React.useContext(PROMPTVAR.sino_context);
   const {taste,setTaste} = React.useContext(PROMPTVAR.taste_context);
   const {timemodifier,setTimeModifier} = React.useContext(PROMPTVAR.timeModifier_context);
   const {tod,setTod} = React.useContext(PROMPTVAR.tod_context);
   const {transportation,setTransportation} = React.useContext(PROMPTVAR.transportation_context);
   const {weather,setWeather} = React.useContext(PROMPTVAR.weather_context);

   const generatePracticeSentence = () => {
        //First, pick a random sentence structure from the database
        const practicePrompt = generateSentence();

        if(practicePrompt.uniqueVariables === 0) {
            let tempArray = [practicePrompt.english_sentence, practicePrompt.korean_sentence];
            determineDisplaySentence(tempArray);
        }
        else {
            //Then, parse the sentences for unique variables
            const parsedSentences: prompter_sentence_part[][] = parseSentence(practicePrompt.english_sentence, practicePrompt.korean_sentence, practicePrompt.includesOptional);
            //After parsing, we need to generate a random value from the database to replace each variable
            const generatedValuesToReplaceSentenceVariables: PROMPTVAR.prompter_sentence_variable[] = generateSentenceVariables(parsedSentences);

            //Then, we need to replace the variables with the generated values
            const sentencesWithValues: prompter_sentence_part[][] = setSentenceVariables(parsedSentences, generatedValuesToReplaceSentenceVariables, practicePrompt.includesOptional);


            //Then, we need to convert from parts to a string
            const sentencePartsToString = sentencePartsMerge(sentencesWithValues);
            
            //Finally, we need to randomly pick whether to show the English or Korean Sentence on the screen (UI)
            determineDisplaySentence(sentencePartsToString);
        }

   }

   // RNG ===============================================================================
    const generateInRange = (min: number, max: number) => {
        const minCeiled = Math.ceil(min);
        const maxFloored = Math.floor(max);
        return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
    }
  
    const generateVariable = (variable_category: string) => {

        const minIndex = 0;

        switch(variable_category) 
        {
            
            case 'appearance' : {
                const maxIndex = appearance.length-1;
                const rand = generateInRange(minIndex, maxIndex);
                return(appearance[rand]);
                }
            case 'clothes' : {
                const maxIndex = clothes.length-1;
                const rand = generateInRange(minIndex, maxIndex);
                return(clothes[rand]);
                }
            case 'color' : {
                const maxIndex = color.length-1;
                const rand = generateInRange(minIndex, maxIndex);
                return(color[rand]);
                }
            case 'conjugation' : {
                const maxIndex = conjugation.length-1;
                const rand = generateInRange(minIndex, maxIndex);
                return(conjugation[rand]);
                }
            case 'direction' : {
                const maxIndex = direction.length-1;
                const rand = generateInRange(minIndex, maxIndex);
                return(direction[rand]);
                }
            case 'dow' : {
                const maxIndex = dow.length-1;
                const rand = generateInRange(minIndex, maxIndex);
                return(dow[rand]);
                }
            case 'everytime' : {
                const maxIndex = everytime.length-1;
                const rand = generateInRange(minIndex, maxIndex);
                return(everytime[rand]);
                }
            case 'excuseme' : {
                const maxIndex = excuseme.length-1;
                const rand = generateInRange(minIndex, maxIndex);
                return(excuseme[rand]);
                }
            case 'familialrelationship' : {
                const maxIndex = familialrelationship.length-1;
                const rand = generateInRange(minIndex, maxIndex);
                return(familialrelationship[rand]);
                }
            case 'feeling' : {
                const maxIndex = feeling.length-1;
                const rand = generateInRange(minIndex, maxIndex);
                return(feeling[rand]);
                }
            case 'food' : {
                const maxIndex = food.length-1;
                const rand = generateInRange(minIndex, maxIndex);
                return(food[rand]);
                }
            case 'generaltime' : {
                const maxIndex = generaltime.length-1;
                const rand = generateInRange(minIndex, maxIndex);
                return(generaltime[rand]);
                }
            case 'hobby' : {
                const maxIndex = hobby.length-1;
                const rand = generateInRange(minIndex, maxIndex);
                return(hobby[rand]);
                }
            case 'hour' : {
                return(hour[0]);
                }
            case 'hourtime' : {
                const maxIndex = hourtime.length-1;
                const rand = generateInRange(minIndex, maxIndex);
                return(hourtime[rand]);
                }
            case 'ing' : {
                return(ing[0]);
                }
            case 'item' : {
                const maxIndex = item.length-1;
                const rand = generateInRange(minIndex, maxIndex);
                return(item[rand]);
                }
            case 'itemtwo' : {
                const maxIndex = itemtwo.length-1;
                const rand = generateInRange(minIndex, maxIndex);
                return(itemtwo[rand]);
                }
            case 'job' : {
                const maxIndex = job.length-1;
                const rand = generateInRange(minIndex, maxIndex);
                return(job[rand]);
                }
            case 'locativeadverb' : {
                const maxIndex = locativeadverb.length-1;
                const rand = generateInRange(minIndex, maxIndex);
                return(locativeadverb[rand]);
                }
            case 'land' : {
                const maxIndex = land.length-1;
                const rand = generateInRange(minIndex, maxIndex);
                return(land[rand]);
                }
            case 'minute' : {
                return(minute[0]);
                }
            case 'minutetime' : {
                const maxIndex = minutetime.length-1;
                const rand = generateInRange(minIndex, maxIndex);
                return(minutetime[rand]);
                }
            case 'month' : {
                const maxIndex = month.length-1;
                const rand = generateInRange(minIndex, maxIndex);
                return(month[rand]);
                }
            case 'name' : {
                const maxIndex = name.length-1;
                const rand = generateInRange(minIndex, maxIndex);
                return(name[rand]);
                }
            case 'native' : {
                const maxIndex = native.length-1;
                const rand = generateInRange(minIndex, maxIndex);
                return(native[rand]);
                }
            case 'personadjective' : {
                const maxIndex = personadjective.length-1;
                const rand = generateInRange(minIndex, maxIndex);
                return(personadjective[rand]);
                }
            case 'place' : {
                const maxIndex = place.length-1;
                const rand = generateInRange(minIndex, maxIndex);
                return(place[rand]);
                }
            case 'preposition' : {
                const maxIndex = preposition.length-1;
                const rand = generateInRange(minIndex, maxIndex);
                return(preposition[rand]);
                }
            case 'pronoun' : {
                const maxIndex = pronoun.length-1;
                const rand = generateInRange(minIndex, maxIndex);
                return(pronoun[rand]);
                }
            case 'quality' : {
                const maxIndex = quality.length-1;
                const rand = generateInRange(minIndex, maxIndex);
                return(quality[rand]);
                }
            case 'season' : {
                const maxIndex = season.length-1;
                const rand = generateInRange(minIndex, maxIndex);
                return(season[rand]);
                }
            case 'sightseeing' : {
                const maxIndex = sightseeing.length-1;
                const rand = generateInRange(minIndex, maxIndex);
                return(sightseeing[rand]);
                }
            case 'sino' : {
                const maxIndex = sino.length-1;
                const rand = generateInRange(minIndex, maxIndex);
                return(sino[rand]);
                }
            case 'taste' : {
                const maxIndex = taste.length-1;
                const rand = generateInRange(minIndex, maxIndex);
                return(taste[rand]);
                }
            case 'timemodifier' : {
                const maxIndex = timemodifier.length-1;
                const rand = generateInRange(minIndex, maxIndex);
                return(timemodifier[rand]);
                }
            case 'tod' : {
                const maxIndex = tod.length-1;
                const rand = generateInRange(minIndex, maxIndex);
                return(tod[rand]);
                }
            case 'transportation' : {
                const maxIndex = transportation.length-1;
                const rand = generateInRange(minIndex, maxIndex);
                return(transportation[rand]);
                }
            case 'weather' : {
                const maxIndex = weather.length-1;
                const rand = generateInRange(minIndex, maxIndex);
                return(weather[rand]);
                }
            default: { //This allows for optional non-variables
                const tempPrompterSentenceVariable: PROMPTVAR.prompter_sentence_variable = {
                    id: -1,
                    english_variable: variable_category,
                    korean_variable: variable_category,
                    variable_type: variable_category
                }

                    return(tempPrompterSentenceVariable);
                }
        }    

    }

    const generateMultipleVariables = (variable_category: string, amount: number) => {

        let multipleVocab: PROMPTVAR.prompter_sentence_variable[] = [];
        let counter = 0;

        while(counter !== amount) {
            const singleVocab = generateVariable(variable_category);
            multipleVocab.push(singleVocab!);
            counter++;
        }

        return(multipleVocab);
    }

    const generateSentence = () => {
        const minIndex = 0;
        const maxIndex = sentences.length-1;
        const rand = generateInRange(minIndex, maxIndex);
        return sentences[rand];
    }

    const generateIncludeOptionalVariable = () => {
        const randomIndex = Math.random() < 0.5 ? 0 : 1;
        return(randomIndex);
    }

    // PROMPT PARSING =====================================================================

    const parseSentence = (englishToParse: string, koreanToParse: string, includesOptional: number) => {

        const toParseArray: string[] =[englishToParse, koreanToParse];
        // Regex to match text between % symbols
        const regex = /%([^%]+)%/g;
        let result: prompter_sentence_part[][] = [];

        for(let arrayIndex = 0; arrayIndex < toParseArray.length; arrayIndex++) {

            let pushToResult: prompter_sentence_part[] = [];
            let input = toParseArray[arrayIndex];
            let lastIndex = 0;

            // Find all matches of the pattern
            let match;
            while ((match = regex.exec(input)) !== null) {
                // Push the part before the match
                if (lastIndex !== match.index) {
                    let prefixSentencePart: prompter_sentence_part = {text: input.substring(lastIndex, match.index), isVariable: false, isOptional: false, prefixText: null, postfixTest: null, variable_type: ''}
                    pushToResult.push(prefixSentencePart);
                }
                // Push the matched part
                const isOptionalVariable = match[1].match(testOptionalRegex);
                //If this variable is optional
                if(isOptionalVariable !== null) {

                    let restoreVariableText: string[] = match[1].split(' ');
                    const variableStartIndex = restoreVariableText.indexOf('io');
                    const variableIndex = variableStartIndex+1;
        
                    //If this optional variable includes a prefix and or postfix
                    if(restoreVariableText.length > 2) {
                        console.log("Optional includes pre or post");
                        //If there is ONLY a prefix, then vsi will not be at index 0 and rsv at index max will be equal to the variable
                        if(variableStartIndex > 0 && restoreVariableText[restoreVariableText.length-1] == restoreVariableText[variableIndex]) {


                            let preVariableText = '';
                            const preLowerBound = 0;
                            const preUpperBound = variableStartIndex;

                            if(preLowerBound == preUpperBound) {
                                preVariableText = restoreVariableText[preLowerBound];
                            } 
                            else {
                                for(let preIndex = preLowerBound; preIndex < preUpperBound; preIndex++) {
                                    if(preIndex === 0 || preIndex === preUpperBound) {
                                        preVariableText = preVariableText + restoreVariableText[preIndex] + " ";
                                    }
                                    else {
                                        preVariableText = preVariableText + restoreVariableText[preIndex] + " ";
                                    }
                                }
                            }

                            let matchSentencePart: prompter_sentence_part = {text: restoreVariableText[variableIndex], isVariable: true, isOptional: true, prefixText: preVariableText, postfixTest: null, variable_type: restoreVariableText[variableIndex]};
                            pushToResult.push(matchSentencePart);

                            
                        }
                        //If there is ONLY a postfix, then vsi will be at index 0 and vi not will be at index max
                        else if(variableStartIndex === 0 && restoreVariableText[restoreVariableText.length-1] !== restoreVariableText[variableIndex]) {

                            let postVariableText = '';
                            const postLowerBound = variableIndex+1;
                            const postUpperBound = restoreVariableText.length;

                            if(postLowerBound == postUpperBound) {
                                postVariableText = restoreVariableText[postLowerBound];
                            } 
                            else {
                                for(let postIndex = postLowerBound; postIndex < postUpperBound; postIndex++) {
                                    if(postIndex === 0 || postIndex === postUpperBound) {
                                        postVariableText = " " + postVariableText + restoreVariableText[postIndex];
                                    }
                                    else {
                                        postVariableText = postVariableText + " " + restoreVariableText[postIndex];
                                    }
                                }

                            }

                        
                            let matchSentencePart: prompter_sentence_part = {text: restoreVariableText[variableIndex], isVariable: true, isOptional: true, prefixText: null, postfixTest: postVariableText, variable_type: restoreVariableText[variableIndex]};
                            pushToResult.push(matchSentencePart);

                        }
                        //If there is both a prefix and postfix
                        else {

                            let preVariableText = '';
                            const preLowerBound = 0;
                            const preUpperBound = variableStartIndex;

                            let postVariableText = '';
                            const postLowerBound = variableIndex+1;
                            const postUpperBound = restoreVariableText.length;

                            if(preLowerBound == preUpperBound) {
                                preVariableText = restoreVariableText[preLowerBound];
                            } 
                            else {
                                for(let preIndex = preLowerBound; preIndex < preUpperBound; preIndex++) {
                                    if(preIndex === 0 || preIndex === preUpperBound) {
                                        preVariableText = preVariableText + restoreVariableText[preIndex] + " ";
                                    }
                                    else {
                                        preVariableText = preVariableText + restoreVariableText[preIndex] + " ";
                                    }
                                }
                            }

                            if(postLowerBound == postUpperBound) {
                                postVariableText = restoreVariableText[postLowerBound];
                            } 
                            else {
                                for(let postIndex = postLowerBound; postIndex < postUpperBound; postIndex++) {
                                    if(postIndex === 0 || postIndex === postUpperBound) {
                                        postVariableText = " " + postVariableText + restoreVariableText[postIndex];
                                    }
                                    else {
                                        postVariableText = postVariableText + " " + restoreVariableText[postIndex];
                                    }
                                }

                            }

                            
                            let matchSentencePart: prompter_sentence_part = {text: restoreVariableText[variableIndex], isVariable: true, isOptional: true, prefixText: preVariableText, postfixTest: postVariableText, variable_type: restoreVariableText[variableIndex]};
                            pushToResult.push(matchSentencePart);
                        }

                    }
                    //This optional variable does not include prefix or postfix
                    else {
                        let restoreVariableText = match[1].split(' ');
                        let matchSentencePart: prompter_sentence_part = {text: restoreVariableText[1], isVariable: true, isOptional: true, prefixText: null, postfixTest: null, variable_type: restoreVariableText[1]};
                        pushToResult.push(matchSentencePart);
                    }

                }
                //If this is not an optional variable
                else {
                    let restoreVariableText: string[] = match[1].split(' ');

                    //If this is variable with pre and or post fix text
                    if(restoreVariableText.length > 1) {
                        let variableIndex: number = -9999;

                        for(let arrayIndex = 0; arrayIndex < restoreVariableText.length; arrayIndex++) {

                            let tempGeneration = generateVariable(restoreVariableText[arrayIndex]);

                            if(tempGeneration.id !== -1) {
                                variableIndex = arrayIndex;
                                break;
                            }

                        }

                        //If there is ONLY a prefix, then vsi will not be at index 0 and rsv at index max will be equal to the variable
                        if(variableIndex > 0 && restoreVariableText[restoreVariableText.length-1] == restoreVariableText[variableIndex]) {
                            
                            let preVariableText = '';
                            const preLowerBound = 0;
                            const preUpperBound = variableIndex

                            if(preLowerBound == preUpperBound) {
                                preVariableText = restoreVariableText[preLowerBound];
                            } 
                            else {
                                for(let preIndex = preLowerBound; preIndex < preUpperBound; preIndex++) {
                                    if(preIndex === 0 || preIndex === preUpperBound) {
                                        preVariableText = preVariableText + restoreVariableText[preIndex] + " ";
                                    }
                                    else {
                                        preVariableText = preVariableText + restoreVariableText[preIndex] + " ";
                                    }
                                }
                            }

                            
                            let matchSentencePart: prompter_sentence_part = {text: restoreVariableText[variableIndex], isVariable: true, isOptional: true, prefixText: preVariableText, postfixTest: null, variable_type: restoreVariableText[variableIndex]};
                            pushToResult.push(matchSentencePart);

                            
                        }
                        //If there is ONLY a postfix, then vsi will be at index 0 and vi not will be at index max
                        else if(variableIndex === 0 && restoreVariableText[restoreVariableText.length-1] !== restoreVariableText[variableIndex]) {

                            let postVariableText = '';
                            const postLowerBound = variableIndex+1;
                            const postUpperBound = restoreVariableText.length;

                            if(postLowerBound == postUpperBound) {
                                postVariableText = restoreVariableText[postLowerBound];
                            } 
                            else {
                                for(let postIndex = postLowerBound; postIndex < postUpperBound; postIndex++) {
                                    if(postIndex === 0 || postIndex === postUpperBound) {
                                        postVariableText = " " + postVariableText + restoreVariableText[postIndex];
                                    }
                                    else {
                                        postVariableText = postVariableText + " " + restoreVariableText[postIndex];
                                    }
                                }

                            }

                        
                            let matchSentencePart: prompter_sentence_part = {text: restoreVariableText[variableIndex], isVariable: true, isOptional: true, prefixText: null, postfixTest: postVariableText, variable_type: restoreVariableText[variableIndex]};
                            pushToResult.push(matchSentencePart);

                        }
                        //If there is both a prefix and postfix
                        else {

                            let preVariableText = '';
                            const preLowerBound = 0;
                            const preUpperBound = variableIndex;

                            let postVariableText = '';
                            const postLowerBound = variableIndex+1;
                            const postUpperBound = restoreVariableText.length;

                            if(preLowerBound == preUpperBound) {
                                preVariableText = restoreVariableText[preLowerBound];
                            } 
                            else {
                                for(let preIndex = preLowerBound; preIndex < preUpperBound; preIndex++) {
                                    if(preIndex === 0 || preIndex === preUpperBound) {
                                        preVariableText = preVariableText + restoreVariableText[preIndex] + " ";
                                    }
                                    else {
                                        preVariableText = preVariableText + restoreVariableText[preIndex] + " ";
                                    }
                                }
                            }

                            if(postLowerBound == postUpperBound) {
                                postVariableText = restoreVariableText[postLowerBound];
                            } 
                            else {
                                for(let postIndex = postLowerBound; postIndex < postUpperBound; postIndex++) {
                                    if(postIndex === 0 || postIndex === postUpperBound) {
                                        postVariableText = " " + postVariableText + restoreVariableText[postIndex];
                                    }
                                    else {
                                        postVariableText = postVariableText + " " + restoreVariableText[postIndex];
                                    }
                                }

                            }

                            
                            let matchSentencePart: prompter_sentence_part = {text: restoreVariableText[variableIndex], isVariable: true, isOptional: true, prefixText: preVariableText, postfixTest: postVariableText, variable_type: restoreVariableText[variableIndex]};
                            pushToResult.push(matchSentencePart);
                        }

                    }
                    //If this is a variable without pre or postfix text
                    else {
                        let matchSentencePart: prompter_sentence_part = {text: match[1], isVariable: true, isOptional: false, prefixText: null, postfixTest: null, variable_type: match[1]};
                        pushToResult.push(matchSentencePart);
                    }

                    

                }
                // Update the last index to the end of the current match
                lastIndex = regex.lastIndex;
            }

            

            // Push the remaining part of the string after the last match
            if (lastIndex < input.length) {
                let suffixSentencePart: prompter_sentence_part = {text: input.substring(lastIndex), isVariable: false, isOptional: false, prefixText: null, postfixTest: null, variable_type: ''};
                pushToResult.push(suffixSentencePart);
            }

            result.push(pushToResult);

        }

        return result;

    }

    const generateSentenceVariables = (parsedPartsArray: prompter_sentence_part[][]) => {

        let alreadyGeneratedVariables: string[] = [];
        let returnVariables: PROMPTVAR.prompter_sentence_variable[] = [];

        for(let arrayIndex = 0; arrayIndex < parsedPartsArray.length; arrayIndex++) {

            for(let partIndex = 0; partIndex < parsedPartsArray[arrayIndex].length; partIndex++) {

                let currentPart = parsedPartsArray[arrayIndex][partIndex];

                if(currentPart.isVariable === true) {

                    if(alreadyGeneratedVariables.includes(currentPart.variable_type) === false) {

                        alreadyGeneratedVariables.push(currentPart.variable_type);
                        let generateNewValue: PROMPTVAR.prompter_sentence_variable = generateVariable(currentPart.variable_type);
                        returnVariables.push(generateNewValue);

                    }
                }

            }
        }

        return(returnVariables);
    }

    const setSentenceVariables = (sentencesArray: prompter_sentence_part[][], valuesToUse: PROMPTVAR.prompter_sentence_variable[], includesOptional: number) => {

        //Index 0 is always the English Sentence
        //Index 1 is always the Korean Sentence
        let setEnglishSentence = sentencesArray[0];
        let setKoreanSentence = sentencesArray[1];

        if(includesOptional == 1) {
            let optionalVariablesSet = setOptionalSentenceVariables(sentencesArray,valuesToUse);
        }

            for(let englishPartIndex = 0; englishPartIndex < setEnglishSentence.length; englishPartIndex++) {

                let currentPart = setEnglishSentence[englishPartIndex];

                if(currentPart.isVariable === true && currentPart.text !== '') {
                        
                    let useToReplace = valuesToUse.find((element) => currentPart.variable_type === element.variable_type);
                    
                   let prefixToVariable: string = '';
                    let postfixToVariable: string = '';

                    if(currentPart.prefixText !== null)
                        prefixToVariable = currentPart.prefixText;
                    if(currentPart.postfixTest !== null)
                        postfixToVariable = currentPart.postfixTest;

                    const completedEnglishVariable = prefixToVariable + useToReplace!.english_variable + postfixToVariable;

                    setEnglishSentence[englishPartIndex].text = completedEnglishVariable
                }
            }

            for(let koreanPartIndex = 0; koreanPartIndex < setKoreanSentence.length; koreanPartIndex++) {

                let currentPart = setKoreanSentence[koreanPartIndex];
                if(currentPart.isVariable === true && currentPart.text !== '') {
                                           
                    let useToReplace = valuesToUse.find((element) => currentPart.variable_type === element.variable_type);

                    let prefixToVariable: string = '';
                    let postfixToVariable: string = '';

                    if(currentPart.prefixText !== null)
                        prefixToVariable = currentPart.prefixText;
                    if(currentPart.postfixTest !== null)
                        postfixToVariable = currentPart.postfixTest;

                    const completedKoreanVariable = prefixToVariable + useToReplace!.korean_variable + postfixToVariable;
                    setKoreanSentence[koreanPartIndex].text = completedKoreanVariable;
                }

            }
        return([setEnglishSentence, setKoreanSentence]);

    }

    const setOptionalSentenceVariables = (sentencesArray: prompter_sentence_part[][], valuesToUse: PROMPTVAR.prompter_sentence_variable[]) => {


        interface optionalVariable {
            variable_type: string,
            isIncluded: boolean
        }

        let generatedOptionalVariables: optionalVariable[] = [];

        let setOptionalEnglishSentence = sentencesArray[0];
        let setOptionalKoreanSentence = sentencesArray[1];
        
        //First, scan just the english sentence for all optional variables,
        //since both translations will include the same number of and equivalent variables
        for(let intialScanIndex = 0; intialScanIndex < setOptionalEnglishSentence.length; intialScanIndex++) {

            let currentPart = setOptionalEnglishSentence[intialScanIndex];

            if(currentPart.isVariable && currentPart.isOptional) {
                if(generateIncludeOptionalVariable() === 1) {
                    generatedOptionalVariables.push({variable_type: currentPart.variable_type, isIncluded: true})
                } else {
                    generatedOptionalVariables.push({variable_type: currentPart.variable_type, isIncluded: false})
                }
            }
        }

        //Next, scan both arrays, and replace optional values with correct rng
        for(let englishPartIndex = 0; englishPartIndex < setOptionalEnglishSentence.length; englishPartIndex++) {

            let currentPart = setOptionalEnglishSentence[englishPartIndex];

            if(currentPart.isVariable && currentPart.isOptional) {
                    //Now, scan generatedOptionalVariables to see if this var will be generated
                    const shouldGenerate = generatedOptionalVariables.find((element) => currentPart.variable_type === element.variable_type);
    
                    if(shouldGenerate!.isIncluded) {
                        let useToReplace = valuesToUse.find((element) => currentPart.variable_type === element.variable_type);
                        setOptionalEnglishSentence[englishPartIndex].text = useToReplace!.english_variable
                    } else {
                        setOptionalEnglishSentence[englishPartIndex].text = '';
                    }
            }
        }

        for(let koreanPartIndex = 0; koreanPartIndex < setOptionalKoreanSentence.length; koreanPartIndex++) {

            let currentPart = setOptionalKoreanSentence[koreanPartIndex];

            if(currentPart.isVariable && currentPart.isOptional) {
                //Do the same for the Korean sentence
                const shouldGenerate = generatedOptionalVariables.find((element) => currentPart.variable_type === element.variable_type);
                    
                    if(shouldGenerate!.isIncluded) {
                        let useToReplace = valuesToUse.find((element) => currentPart.variable_type === element.variable_type);
                        setOptionalEnglishSentence[koreanPartIndex].text = useToReplace!.english_variable
                    } else {
                        setOptionalKoreanSentence[koreanPartIndex].text = '';
                    }
            }

        }

        //Finally, return arrays with the optional variables consistently set
        return({setOptionalEnglishSentence, setOptionalKoreanSentence});
    }

    const sentencePartsMerge = (setSentenceArray: prompter_sentence_part[][]) => {

        let finalizedStrings: string[] = [];

        for(let arrayIndex = 0; arrayIndex < setSentenceArray.length; arrayIndex++) {

            let currentMerging: string = '';

            for(let partIndex = 0; partIndex < setSentenceArray[arrayIndex].length; partIndex++) {

                let currentPart = setSentenceArray[arrayIndex][partIndex];
                currentMerging = currentMerging + setSentenceArray[arrayIndex][partIndex].text;
            }

            finalizedStrings.push(currentMerging);
        }
        
        return(finalizedStrings);
    }

    const determineDisplaySentence = async (sentences: string[]) => {
        //Index 0 is always the English Sentence
        //Index 1 is always the Korean Sentence
        const randomIndex = Math.random() < 0.5 ? 0 : 1;
        const sentenceToDisplay = sentences[randomIndex];
        const sentenceToHide = sentences.find((element) => element !== sentenceToDisplay);

        await setDisplaySentence(sentenceToDisplay);
        await setHiddenSentence(sentenceToHide!);

        //If english sentence was picked
        if(sentenceToDisplay === sentences[0]) {
            await setDisplaySentenceLangauge('english');
        }
        else {
            await setDisplaySentenceLangauge('korean');
        }

        return;
    } 
    
    return(
        <Stack direction="column" spacing={2} sx={{height:'92vh'}}>
            <PrompterPageHeader generate={generatePracticeSentence} hide={handleHidden} hidden={isHidden} />
            <PrompterPageBody displaySentence={displaySentence} displayLangauge={displaySentenceLanguage} hidden={isHidden} hiddenSentence={hiddenSentence}/>
        </Stack>
    );
}