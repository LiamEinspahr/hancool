import * as React from 'react';
import SubHeader from '../../layout/subheader/SubHeader';
import { Button, Container, createTheme, Typography } from '@mui/material';
import { Padding } from '@mui/icons-material';
import * as VOCABCONTEXT from './PrompterData';

interface prompter_part {
    text: string,
    isVariable: boolean,
    vocab_type: string
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

    

   const {sentences, setSentences} = React.useContext(VOCABCONTEXT.prompter_prompts_context);
   const [currentSentence, setCurrentSentence] = React.useState<VOCABCONTEXT.prompter_sentence>();
   
   React.useEffect(() => {
    const initialPrompt = generatePrompt();
    setCurrentSentence(initialPrompt);
   },[])

   const {appearance,setAppearance} = React.useContext(VOCABCONTEXT.appearance_vocab_context);
   const {clothes,setClothes} = React.useContext(VOCABCONTEXT.clothes_vocab_context);
   const {conjugation,setConjugation} = React.useContext(VOCABCONTEXT.conjugation_vocab_context);
   const {direction,setDirection} = React.useContext(VOCABCONTEXT.direction_vocab_context);
   const {everytime,setEveryTime} = React.useContext(VOCABCONTEXT.everyTime_vocab_context);
   const {excuseme,setExcuseMe} = React.useContext(VOCABCONTEXT.excuseMe_vocab_context);
   const {familialrelationship,setFamilialRelationship} = React.useContext(VOCABCONTEXT.familialRelationship_vocab_context);
   const {feeling,setFeeling} = React.useContext(VOCABCONTEXT.feeling_vocab_context);
   const {food,setFood} = React.useContext(VOCABCONTEXT.food_vocab_context);
   const {generaltime,setGeneralTime} = React.useContext(VOCABCONTEXT.generalTime_vocab_context);
   const {hobby,setHobby} = React.useContext(VOCABCONTEXT.hobby_vocab_context);
   const {hour,setHour} = React.useContext(VOCABCONTEXT.hour_vocab_context);
   const {item,setItem} = React.useContext(VOCABCONTEXT.item_vocab_context);
   const {job,setJob} = React.useContext(VOCABCONTEXT.job_vocab_context);
   const {land,setLand} = React.useContext(VOCABCONTEXT.land_vocab_context);
   const {minute,setMinute} = React.useContext(VOCABCONTEXT.minute_vocab_context);
   const {month,setMonth} = React.useContext(VOCABCONTEXT.month_vocab_context);
   const {name,setName} = React.useContext(VOCABCONTEXT.name_vocab_context);
   const {native,setNative} = React.useContext(VOCABCONTEXT.native_vocab_context);
   const {place,setPlace} = React.useContext(VOCABCONTEXT.place_vocab_context);
   const {preposition,setPreposition} = React.useContext(VOCABCONTEXT.preposition_vocab_context);
   const {season,setSeason} = React.useContext(VOCABCONTEXT.season_vocab_context);
   const {sino,setSino} = React.useContext(VOCABCONTEXT.sino_vocab_context);
   const {taste,setTaste} = React.useContext(VOCABCONTEXT.taste_vocab_context);
   const {timemodifier,setTimeModifier} = React.useContext(VOCABCONTEXT.timeModifier_vocab_context);
   const {tod,setTod} = React.useContext(VOCABCONTEXT.tod_vocab_context);
   const {transportation,setTransportation} = React.useContext(VOCABCONTEXT.transportation_vocab_context);
   const {weather,setWeather} = React.useContext(VOCABCONTEXT.weather_vocab_context);

   const generatePractice = () => {
        const practicePrompt = generatePrompt();
        setCurrentSentence(practicePrompt);
        const english_parsed: prompter_part[] = parsePrompt(practicePrompt, 'english');
        const korean_parsed: prompter_part[] = parsePrompt(practicePrompt, 'korean');
        //console.log(english_parsed, '/n', korean_parsed);
        const setVars = setPromptVariables(english_parsed, korean_parsed);
   }

   // RNG ===============================================================================
    const generateInRange = (min: number, max: number) => {
        const minCeiled = Math.ceil(min);
        const maxFloored = Math.floor(max);
        return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
    }
  
    const generateVocab = (category: string) => {
    const minIndex = 0;

    switch(category) 
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
            const maxIndex = hour.length-1;
            const rand = generateInRange(minIndex, maxIndex);
            return(hour[rand]);
            }
        case 'item' : {
            const maxIndex = item.length-1;
            const rand = generateInRange(minIndex, maxIndex);
            return(item[rand]);
            }
        case 'job' : {
            const maxIndex = job.length-1;
            const rand = generateInRange(minIndex, maxIndex);
            return(job[rand]);
            }
        case 'land' : {
            const maxIndex = land.length-1;
            const rand = generateInRange(minIndex, maxIndex);
            return(land[rand]);
            }
        case 'minute' : {
            const maxIndex = minute.length-1;
            const rand = generateInRange(minIndex, maxIndex);
            return(minute[rand]);
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
        case 'season' : {
            const maxIndex = season.length-1;
            const rand = generateInRange(minIndex, maxIndex);
            return(season[rand]);
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
        }    

    }

    const generateMultipleVocab = (category: string, amount: number) => {

        let multipleVocab: VOCABCONTEXT.prompter_vocab[] = [];
        let counter = 0;

        while(counter !== amount) {
            const singleVocab = generateVocab(category);
            multipleVocab.push(singleVocab!);
            counter++;
        }

        return(multipleVocab);
    }

    const generatePrompt = () => {
        const minIndex = 0;
        const maxIndex = sentences.length-1;
        const rand = generateInRange(minIndex, maxIndex);
        return sentences[rand];
    }

    // PROMPT PARSING =====================================================================

    const parsePrompt = (toParse: VOCABCONTEXT.prompter_sentence, language: string) => {
        let input: string = '';
        // Regex to match text between % symbols
        if(language === 'english')
            input = toParse!.english
        else if(language === 'korean')
            input = toParse!.korean
        const regex = /%([^%]+)%/g;
        let result: prompter_part[] = [];
        let lastIndex = 0;

        // Find all matches of the pattern
        let match;
        while ((match = regex.exec(input)) !== null) {
            // Push the part before the match
            if (lastIndex !== match.index) {
                let tempPart: prompter_part = {text: input.substring(lastIndex, match.index), isVariable: false, vocab_type: ''};
                result.push(tempPart);
            }
            // Push the matched part
            let tempPart: prompter_part = {text: match[1], isVariable: true, vocab_type: match[1]}
            result.push(tempPart);
            // Update the last index to the end of the current match
            lastIndex = regex.lastIndex;
        }

        // Push the remaining part of the string after the last match
        if (lastIndex < input.length) {
            let tempPart: prompter_part = {text: input.substring(lastIndex), isVariable: false, vocab_type: ''};
            result.push(tempPart);
        }

        return result;
    }

    const setPromptVariables = async (englishTranslation: prompter_part[], koreanTranslation: prompter_part[]) => {

        for(let index = 0; index < englishTranslation.length; index++) {

            let englishPart = englishTranslation[index];

            if(englishPart.isVariable && englishPart.vocab_type !== '') {

                let replace_placeHolder = await generateVocab(englishPart.text);

                englishTranslation[index].text = replace_placeHolder!.english_vocab;

                for(let j = 0; j < koreanTranslation.length; j++) {

                    let koreanPart = koreanTranslation[j];

                    if(koreanPart.isVariable && koreanPart.vocab_type === englishPart.vocab_type) {
                        koreanTranslation[j].text = replace_placeHolder!.korean_vocab;
                        break;
                    }
                }
            }
        }

        const combinedTranslations:string[] = partsToString([englishTranslation, koreanTranslation]);

        console.log(combinedTranslations[0]);
        console.log(combinedTranslations[1]);
    }

    const partsToString = (arrays: prompter_part[][]) => {

        let returnCombined: string[] = [];

        for(let i = 0; i < arrays.length; i++) {

            let combinedString: string = '';

            for(let j = 0; j < arrays[i].length; j++) {
                combinedString = combinedString + arrays[i][j].text;
            }

            returnCombined.push(combinedString);
        }
        
        return(returnCombined);
    }
    
    return(
        <>
            <Button onClick={() => {generatePractice()}}>Test</Button>
            <Container>
                <Typography>
                    {currentSentence?.english}
                    <br />
                    {currentSentence?.korean}
                </Typography>
            </Container>

        </>
    );
}