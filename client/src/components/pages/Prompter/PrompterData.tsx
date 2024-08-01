import * as React from 'react';
import PrompterPage from './PrompterPage';

// INTERFACES ===================================

export interface prompter_sentence_variable {
    id: number,
    korean_variable: string,
    english_variable: string,
    variable_type: string,

}

export interface prompter_sentence {
    english_sentence: string,
    korean_sentence: string,
    uniqueVariables: number,
    includesOptional: number,
}

interface Prompter_Prompts_Interface {
    sentences: prompter_sentence[],
    setSentences: React.Dispatch<React.SetStateAction<prompter_sentence[]>>
}


interface Prompter_Appearance_Interface {
    appearance: prompter_sentence_variable[],
    setAppearance: React.Dispatch<React.SetStateAction<prompter_sentence_variable[]>>
}

interface Prompter_Blank_Interface {
    blank: prompter_sentence_variable[],
    setBlank: React.Dispatch<React.SetStateAction<prompter_sentence_variable[]>> 
}

interface Prompter_Clothes_Interface {
    clothes: prompter_sentence_variable[],
    setClothes: React.Dispatch<React.SetStateAction<prompter_sentence_variable[]>>
}

interface Prompter_Color_Interface {
    color: prompter_sentence_variable[],
    setColor: React.Dispatch<React.SetStateAction<prompter_sentence_variable[]>>
}

interface Prompter_Conjugation_Interface {
    conjugation: prompter_sentence_variable[],
    setConjugation: React.Dispatch<React.SetStateAction<prompter_sentence_variable[]>>
}

interface Prompter_Direction_Interface {
    direction: prompter_sentence_variable[],
    setDirection: React.Dispatch<React.SetStateAction<prompter_sentence_variable[]>>
}

interface Prompter_Dow_Interface {
    dow: prompter_sentence_variable[],
    setDow: React.Dispatch<React.SetStateAction<prompter_sentence_variable[]>>
}

interface Prompter_EveryTime_Interface {
    everytime: prompter_sentence_variable[],
    setEveryTime: React.Dispatch<React.SetStateAction<prompter_sentence_variable[]>>
}

interface Prompter_ExcuseMe_Interface {
    excuseme: prompter_sentence_variable[],
    setExcuseMe: React.Dispatch<React.SetStateAction<prompter_sentence_variable[]>>
}

interface Prompter_FamilialRelationship_Interface {
    familialrelationship: prompter_sentence_variable[],
    setFamilialRelationship: React.Dispatch<React.SetStateAction<prompter_sentence_variable[]>>
}

interface Prompter_Feeling_Interface {
    feeling: prompter_sentence_variable[],
    setFeeling: React.Dispatch<React.SetStateAction<prompter_sentence_variable[]>>
}

interface Prompter_Food_Interface {
    food: prompter_sentence_variable[],
    setFood: React.Dispatch<React.SetStateAction<prompter_sentence_variable[]>>
}

interface Prompter_GeneralTime_Interface {
    generaltime: prompter_sentence_variable[],
    setGeneralTime: React.Dispatch<React.SetStateAction<prompter_sentence_variable[]>>
}

interface Prompter_Hobby_Interface {
    hobby: prompter_sentence_variable[],
    setHobby: React.Dispatch<React.SetStateAction<prompter_sentence_variable[]>>
}

interface Prompter_Hour_Interface {
    hour: prompter_sentence_variable[],
    setHour: React.Dispatch<React.SetStateAction<prompter_sentence_variable[]>>
}

interface Prompter_HourTime_Interface {
    hourtime: prompter_sentence_variable[],
    setHourTime: React.Dispatch<React.SetStateAction<prompter_sentence_variable[]>>
}

interface Prompter_Ing_Interface {
    ing: prompter_sentence_variable[],
    setIng: React.Dispatch<React.SetStateAction<prompter_sentence_variable[]>>
}

interface Prompter_Item_Interface {
    item: prompter_sentence_variable[],
    setItem: React.Dispatch<React.SetStateAction<prompter_sentence_variable[]>>
}

interface Prompter_ItemTwo_Interface {
    itemtwo: prompter_sentence_variable[],
    setItemTwo: React.Dispatch<React.SetStateAction<prompter_sentence_variable[]>>
}

interface Prompter_Job_Interface {
    job: prompter_sentence_variable[],
    setJob: React.Dispatch<React.SetStateAction<prompter_sentence_variable[]>>
}

interface Prompter_Land_Interface {
    land: prompter_sentence_variable[],
    setLand: React.Dispatch<React.SetStateAction<prompter_sentence_variable[]>>
}

interface Prompter_LocativeAdverb_Interface {
    locativeadverb: prompter_sentence_variable[],
    setLocativeAdverb: React.Dispatch<React.SetStateAction<prompter_sentence_variable[]>>
}

interface Prompter_Minute_Interface {
    minute: prompter_sentence_variable[],
    setMinute: React.Dispatch<React.SetStateAction<prompter_sentence_variable[]>>
}

interface Prompter_MinuteTime_Interface {
    minutetime: prompter_sentence_variable[],
    setMinuteTime: React.Dispatch<React.SetStateAction<prompter_sentence_variable[]>>
}

interface Prompter_Month_Interface {
    month: prompter_sentence_variable[],
    setMonth: React.Dispatch<React.SetStateAction<prompter_sentence_variable[]>>
}

interface Prompter_Name_Interface {
    name: prompter_sentence_variable[],
    setName: React.Dispatch<React.SetStateAction<prompter_sentence_variable[]>>
}

interface Prompter_Native_Interface {
    native: prompter_sentence_variable[],
    setNative: React.Dispatch<React.SetStateAction<prompter_sentence_variable[]>>
}

interface Prompter_PersonAdjective_Inteface {
    personadjective: prompter_sentence_variable[],
    setPersonAdjective: React.Dispatch<React.SetStateAction<prompter_sentence_variable[]>>
}

interface Prompter_Place_Interface {
    place: prompter_sentence_variable[],
    setPlace: React.Dispatch<React.SetStateAction<prompter_sentence_variable[]>>
}

interface Prompter_Preposition_Interface {
    preposition: prompter_sentence_variable[],
    setPreposition: React.Dispatch<React.SetStateAction<prompter_sentence_variable[]>>
}

interface Prompter_Pronoun_Interface {
    pronoun: prompter_sentence_variable[],
    setPronoun: React.Dispatch<React.SetStateAction<prompter_sentence_variable[]>>
}

interface Prompter_Quality_Interface {
    quality: prompter_sentence_variable[],
    setQuality: React.Dispatch<React.SetStateAction<prompter_sentence_variable[]>>
}

interface Prompter_Season_Interface {
    season: prompter_sentence_variable[],
    setSeason: React.Dispatch<React.SetStateAction<prompter_sentence_variable[]>>
}

interface Prompter_SightSeeing_Interface {
    sightseeing: prompter_sentence_variable[],
    setSightSeeing: React.Dispatch<React.SetStateAction<prompter_sentence_variable[]>>
}


interface Prompter_Sino_Interface {
    sino: prompter_sentence_variable[],
    setSino: React.Dispatch<React.SetStateAction<prompter_sentence_variable[]>>
}

interface Prompter_Taste_Interface {
    taste: prompter_sentence_variable[],
    setTaste: React.Dispatch<React.SetStateAction<prompter_sentence_variable[]>>
}

interface Prompter_TimeModifier_Interface {
    timemodifier: prompter_sentence_variable[],
    setTimeModifier: React.Dispatch<React.SetStateAction<prompter_sentence_variable[]>>
}

interface Prompter_TOD_Interface {
    tod: prompter_sentence_variable[],
    setTod: React.Dispatch<React.SetStateAction<prompter_sentence_variable[]>>
}

interface Prompter_Transportation_Interface {
    transportation: prompter_sentence_variable[],
    setTransportation: React.Dispatch<React.SetStateAction<prompter_sentence_variable[]>>
}

interface Prompter_Weather_Interface {
    weather: prompter_sentence_variable[],
    setWeather: React.Dispatch<React.SetStateAction<prompter_sentence_variable[]>>
}

// DEFAULT STATES ===================================

const prompterPromptsDefaultState = {
    sentences: [],
    setSentences: (arr: prompter_sentence[]) => {}
} as Prompter_Prompts_Interface

const appearanceDefaultState = {
    appearance: [],
    setAppearance: (arr: prompter_sentence_variable[]) => {}
} as Prompter_Appearance_Interface

const blankDefaultState = {
    blank: [],
    setBlank: (arr: prompter_sentence_variable[]) => {}
} as Prompter_Blank_Interface

const clothesDefaultState = {
    clothes: [],
    setClothes: (arr: prompter_sentence_variable[]) => {}
} as Prompter_Clothes_Interface

const colorDefaultState = {
    color: [],
    setColor: (arr: prompter_sentence_variable[]) => {}
} as Prompter_Color_Interface

const conjugationDefaultState = {
    conjugation: [],
    setConjugation: (arr: prompter_sentence_variable[]) => {}
} as Prompter_Conjugation_Interface

const directionDefaultState = {
    direction: [],
    setDirection: (arr: prompter_sentence_variable[]) => {}
} as Prompter_Direction_Interface

const dowDefaultState = {
    dow: [],
    setDow: (arr: prompter_sentence_variable[]) => {}
} as Prompter_Dow_Interface

const everyTimeDefaultState = {
    everytime: [],
    setEveryTime: (arr: prompter_sentence_variable[]) => {}
} as Prompter_EveryTime_Interface

const excuseMeDefaultState = {
    excuseme: [],
    setExcuseMe: (arr: prompter_sentence_variable[]) => {}
} as Prompter_ExcuseMe_Interface

const familialRelationshipDefaultState = {
    familialrelationship: [],
    setFamilialRelationship: (arr: prompter_sentence_variable[]) => {}
} as Prompter_FamilialRelationship_Interface

const feelingDefaultState = {
    feeling: [],
    setFeeling: (arr: prompter_sentence_variable[]) => {}
} as Prompter_Feeling_Interface

const foodDefaultState = {
    food: [],
    setFood: (arr: prompter_sentence_variable[]) => {}
} as Prompter_Food_Interface

const generalTimeDefaultState = {
    generaltime: [],
    setGeneralTime: (arr: prompter_sentence_variable[]) => {}
} as Prompter_GeneralTime_Interface

const hobbyDefaultState = {
    hobby: [],
    setHobby: (arr: prompter_sentence_variable[]) => {}
} as Prompter_Hobby_Interface

const hourDefaultState = {
    hour: [],
    setHour: (arr: prompter_sentence_variable[]) => {}
} as Prompter_Hour_Interface

const hourTimeDefaultState = {
    hourtime: [],
    setHourTime: (arr: prompter_sentence_variable[]) => {}
} as Prompter_HourTime_Interface

const ingDefaultState = {
    ing: [],
    setIng: (arr: prompter_sentence_variable[]) => {}
} as Prompter_Ing_Interface

const itemDefaultState = {
    item: [],
    setItem: (arr: prompter_sentence_variable[]) => {}
} as Prompter_Item_Interface

const itemTwoDefaultState = {
    itemtwo: [],
    setItemTwo: (arr: prompter_sentence_variable[]) => {}
} as Prompter_ItemTwo_Interface

const jobDefaultState = {
    job: [],
    setJob: (arr: prompter_sentence_variable[]) => {}
} as Prompter_Job_Interface

const landDefaultState = {
    land: [],
    setLand: (arr: prompter_sentence_variable[]) => {}
} as Prompter_Land_Interface

const locativeAdverbDefaultState = {
    locativeadverb: [],
    setLocativeAdverb: (arr: prompter_sentence_variable[]) => {}
} as Prompter_LocativeAdverb_Interface

const minuteDefaultState = {
    minute: [],
    setMinute: (arr: prompter_sentence_variable[]) => {}
} as Prompter_Minute_Interface

const minuteTimeDefaultState = {
    minutetime: [],
    setMinuteTime: (arr: prompter_sentence_variable[]) => {}
} as Prompter_MinuteTime_Interface

const monthDefaultState = {
    month: [],
    setMonth: (arr: prompter_sentence_variable[]) => {}
} as Prompter_Month_Interface

const nameDefaultState = {
    name: [],
    setName: (arr: prompter_sentence_variable[]) => {}
} as Prompter_Name_Interface

const nativeDefaultState = {
    native: [],
    setNative: (arr: prompter_sentence_variable[]) => {}
} as Prompter_Native_Interface

const personadjectiveDefaultState = {
    personadjective: [],
    setPersonAdjective: (arr: prompter_sentence_variable[]) => {}
} as Prompter_PersonAdjective_Inteface

const placeDefaultState = {
    place: [],
    setPlace: (arr: prompter_sentence_variable[]) => {}
} as Prompter_Place_Interface

const prepositionDefaultState = {
    preposition: [],
    setPreposition: (arr: prompter_sentence_variable[]) => {}
} as Prompter_Preposition_Interface

const pronounDefaultState = {
    pronoun: [],
    setPronoun: (arr: prompter_sentence_variable[]) => {}
} as Prompter_Pronoun_Interface

const qualityDefaultState = {
    quality: [],
    setQuality: (arr: prompter_sentence_variable[]) => {}
} as Prompter_Quality_Interface

const seasonDefaultState = {
    season: [],
    setSeason: (arr: prompter_sentence_variable[]) => {}
} as Prompter_Season_Interface

const sightSeeingDefaultState = {
    sightseeing: [],
    setSightSeeing: (arr: prompter_sentence_variable[]) => {}
} as Prompter_SightSeeing_Interface

const sinoDefaultState = {
    sino: [],
    setSino: (arr: prompter_sentence_variable[]) => {}
} as Prompter_Sino_Interface

const tasteDefaultState = {
    taste: [],
    setTaste: (arr: prompter_sentence_variable[]) => {}
} as Prompter_Taste_Interface

const timeModifierDefaultState = {
    timemodifier: [],
    setTimeModifier: (arr: prompter_sentence_variable[]) => {}
} as Prompter_TimeModifier_Interface

const todDefaultState = {
    tod: [],
    setTod: (arr: prompter_sentence_variable[]) => {}
} as Prompter_TOD_Interface

const transportationDefaultState = {
    transportation: [],
    setTransportation: (arr: prompter_sentence_variable[]) => {}
} as Prompter_Transportation_Interface

const weatherDefaultState = {
    weather: [],
    setWeather: (arr: prompter_sentence_variable[]) => {}
} as Prompter_Weather_Interface

export const prompter_prompts_context = React.createContext<Prompter_Prompts_Interface>(prompterPromptsDefaultState);

export const appearance_context = React.createContext<Prompter_Appearance_Interface>(appearanceDefaultState);
export const clothes_context = React.createContext<Prompter_Clothes_Interface>(clothesDefaultState);
export const blank_context = React.createContext<Prompter_Blank_Interface>(blankDefaultState);
export const color_context = React.createContext<Prompter_Color_Interface>(colorDefaultState);
export const conjugation_context = React.createContext<Prompter_Conjugation_Interface>(conjugationDefaultState);
export const direction_context = React.createContext<Prompter_Direction_Interface>(directionDefaultState);
export const dow_context = React.createContext<Prompter_Dow_Interface>(dowDefaultState);
export const everyTime_context = React.createContext<Prompter_EveryTime_Interface>(everyTimeDefaultState);
export const excuseMe_context = React.createContext<Prompter_ExcuseMe_Interface>(excuseMeDefaultState);
export const familialRelationship_context = React.createContext<Prompter_FamilialRelationship_Interface>(familialRelationshipDefaultState);
export const feeling_context = React.createContext<Prompter_Feeling_Interface>(feelingDefaultState);
export const food_context = React.createContext<Prompter_Food_Interface>(foodDefaultState);
export const generalTime_context = React.createContext<Prompter_GeneralTime_Interface>(generalTimeDefaultState);
export const hobby_context = React.createContext<Prompter_Hobby_Interface>(hobbyDefaultState);
export const hour_context = React.createContext<Prompter_Hour_Interface>(hourDefaultState);
export const hourTime_context = React.createContext<Prompter_HourTime_Interface>(hourTimeDefaultState);
export const ing_context = React.createContext<Prompter_Ing_Interface>(ingDefaultState);
export const item_context = React.createContext<Prompter_Item_Interface>(itemDefaultState);
export const itemTwo_context = React.createContext<Prompter_ItemTwo_Interface>(itemTwoDefaultState);
export const job_context = React.createContext<Prompter_Job_Interface>(jobDefaultState);
export const land_context = React.createContext<Prompter_Land_Interface>(landDefaultState);
export const locativeAdverb_context = React.createContext<Prompter_LocativeAdverb_Interface>(locativeAdverbDefaultState);
export const minute_context = React.createContext<Prompter_Minute_Interface>(minuteDefaultState);
export const minuteTime_context = React.createContext<Prompter_MinuteTime_Interface>(minuteTimeDefaultState);
export const month_context = React.createContext<Prompter_Month_Interface>(monthDefaultState);
export const name_context = React.createContext<Prompter_Name_Interface>(nameDefaultState);
export const native_context = React.createContext<Prompter_Native_Interface>(nativeDefaultState);
export const personAdjective_context = React.createContext<Prompter_PersonAdjective_Inteface>(personadjectiveDefaultState);
export const place_context = React.createContext<Prompter_Place_Interface>(placeDefaultState);
export const preposition_context = React.createContext<Prompter_Preposition_Interface>(prepositionDefaultState);
export const pronoun_context = React.createContext<Prompter_Pronoun_Interface>(pronounDefaultState);
export const quality_context = React.createContext<Prompter_Quality_Interface>(qualityDefaultState);
export const season_context = React.createContext<Prompter_Season_Interface>(seasonDefaultState);
export const sightSeeing_context = React.createContext<Prompter_SightSeeing_Interface>(sightSeeingDefaultState);
export const sino_context = React.createContext<Prompter_Sino_Interface>(sinoDefaultState);
export const taste_context = React.createContext<Prompter_Taste_Interface>(tasteDefaultState);
export const timeModifier_context = React.createContext<Prompter_TimeModifier_Interface>(timeModifierDefaultState);
export const tod_context = React.createContext<Prompter_TOD_Interface>(todDefaultState);
export const transportation_context = React.createContext<Prompter_Transportation_Interface>(transportationDefaultState);
export const weather_context = React.createContext<Prompter_Weather_Interface>(weatherDefaultState);

export default function PrompterData() {

    const [sentences, setSentences] = React.useState<prompter_sentence[]>([]);

    const [appearance,setAppearance] = React.useState<prompter_sentence_variable[]>([]);
    const [blank,setBlank] = React.useState<prompter_sentence_variable[]>([]);
    const [clothes,setClothes] = React.useState<prompter_sentence_variable[]>([]);
    const [color,setColor] = React.useState<prompter_sentence_variable[]>([]);
    const [conjugation,setConjugation] = React.useState<prompter_sentence_variable[]>([]);
    const [direction,setDirection] = React.useState<prompter_sentence_variable[]>([]);
    const [dow,setDow] = React.useState<prompter_sentence_variable[]>([]);
    const [everytime,setEveryTime] = React.useState<prompter_sentence_variable[]>([]);
    const [excuseme,setExcuseMe] = React.useState<prompter_sentence_variable[]>([]);
    const [familialrelationship,setFamilialRelationship] = React.useState<prompter_sentence_variable[]>([]);
    const [feeling,setFeeling] = React.useState<prompter_sentence_variable[]>([]);
    const [food,setFood] = React.useState<prompter_sentence_variable[]>([]);
    const [generaltime,setGeneralTime] = React.useState<prompter_sentence_variable[]>([]);
    const [hobby,setHobby] = React.useState<prompter_sentence_variable[]>([]);
    const [hour,setHour] = React.useState<prompter_sentence_variable[]>([]);
    const [hourtime,setHourTime] = React.useState<prompter_sentence_variable[]>([]);
    const [ing,setIng] = React.useState<prompter_sentence_variable[]>([]);
    const [item,setItem] = React.useState<prompter_sentence_variable[]>([]);
    const [itemtwo,setItemTwo] = React.useState<prompter_sentence_variable[]>([]);
    const [job,setJob] = React.useState<prompter_sentence_variable[]>([]);
    const [land,setLand] = React.useState<prompter_sentence_variable[]>([]);
    const [locativeadverb,setLocativeAdverb] = React.useState<prompter_sentence_variable[]>([]);
    const [minute,setMinute] = React.useState<prompter_sentence_variable[]>([]);
    const [minutetime,setMinuteTime] = React.useState<prompter_sentence_variable[]>([]);
    const [month,setMonth] = React.useState<prompter_sentence_variable[]>([]);
    const [name,setName] = React.useState<prompter_sentence_variable[]>([]);
    const [native,setNative] = React.useState<prompter_sentence_variable[]>([]);
    const [place,setPlace] = React.useState<prompter_sentence_variable[]>([]);
    const [personadjective,setPersonAdjective] = React.useState<prompter_sentence_variable[]>([]);
    const [preposition,setPreposition] = React.useState<prompter_sentence_variable[]>([]);
    const [pronoun,setPronoun] = React.useState<prompter_sentence_variable[]>([]);
    const [quality,setQuality] = React.useState<prompter_sentence_variable[]>([]);
    const [season,setSeason] = React.useState<prompter_sentence_variable[]>([]);
    const [sightseeing,setSightSeeing] = React.useState<prompter_sentence_variable[]>([]);
    const [sino,setSino] = React.useState<prompter_sentence_variable[]>([]);
    const [taste,setTaste] = React.useState<prompter_sentence_variable[]>([]);
    const [timemodifier,setTimeModifier] = React.useState<prompter_sentence_variable[]>([]);
    const [tod,setTod] = React.useState<prompter_sentence_variable[]>([]);
    const [transportation,setTransportation] = React.useState<prompter_sentence_variable[]>([]);
    const [weather,setWeather] = React.useState<prompter_sentence_variable[]>([]);

    React.useEffect(() => {

        const fetchPrompts = async () => {
            try {

                fetch("/kr_prompter_api/prompter/prompter_sentence").then(
                    response => response.json()
                ).then(
                    data => {
                        setSentences(data);
                    }
                )

            } catch (err) {console.log("Could not fetch Common Phrases"); return}
        }
        const fetchVocab = async () => {
            try {
                fetch("/kr_prompter_api/prompter/prompter_sentence_variable").then(
                    response => response.json()
                  ).then(
                    data => {
                      data.map((vocab, index) => {
                        
                        let currentType: string = vocab.variable_type
                        switch(currentType) {
                            case 'appearance' :
                                setAppearance(appearance => [...appearance, vocab]);
                                return;
                            case 'clothes' :
                                setClothes(clothes => [...clothes, vocab]);
                                return;
                            case 'blank' :
                                setBlank(blank => [...blank ,vocab]);
                                return;
                            case 'color' :
                                setColor(color => [...color, vocab]);
                                return;
                            case 'conjugation' :
                                setConjugation(conjugation => [...conjugation, vocab]);
                                return;
                            case 'direction' :
                                setDirection(direction => [...direction, vocab]);
                                return;
                            case 'dow' :
                                setDow(dow => [...dow, vocab]);
                                return;
                            case 'everytime' :
                                setEveryTime(everytime => [...everytime, vocab]);
                                return;
                            case 'excuseme' :
                                setExcuseMe(excuseme => [...excuseme, vocab]);
                                return;
                            case 'familialrelationship' :
                                setFamilialRelationship(familialrelationship => [...familialrelationship, vocab]);
                                return;
                            case 'feeling' :
                                setFeeling(feeling => [...feeling, vocab]);
                                return;
                            case 'food' :
                                setFood(food => [...food, vocab]);
                                return;
                            case 'generaltime' :
                                setGeneralTime(generaltime => [...generaltime, vocab]);
                                return;
                            case 'hobby' :
                                setHobby(hobby => [...hobby, vocab]);
                                return;
                            case 'hour' :
                                setHour(hour => [...hour, vocab]);
                                return;
                            case 'hourtime' :
                                setHourTime(hourtime => [...hourtime, vocab]);
                                return;
                            case 'ing' :
                                setIng(ing => [...ing, vocab]);
                                return;
                            case 'item' :
                                setItem(item => [...item, vocab]);
                                return;
                            case 'itemtwo' :
                                setItemTwo(itemtwo => [...itemtwo, vocab]);
                                return;
                            case 'job' :
                                setJob(job => [...job, vocab]);
                                return;
                            case 'land' :
                                setLand(land => [...land, vocab]);
                                return;
                            case 'locativeadverb' :
                                setLocativeAdverb(locativeadverb => [...locativeadverb, vocab]);
                                return;
                            case 'minute' :
                                setMinute(minute => [...minute, vocab]);
                                return;
                            case 'minutetime' :
                                setMinuteTime(minutetime => [...minutetime, vocab]);
                                return;
                            case 'month' :
                                setMonth(month => [...month, vocab]);
                                return;
                            case 'name' :
                                setName(name => [...name, vocab]);
                                return;
                            case 'native' :
                                setNative(native => [...native, vocab]);
                                return;
                            case 'personadjective' :
                                setPersonAdjective(personadjective => [...personadjective, vocab]);
                                return;
                            case 'place' :
                                setPlace(place => [...place, vocab]);
                                return;
                            case 'preposition' :
                                setPreposition(preposition => [...preposition, vocab]);
                                return;
                            case 'pronoun' :
                                setPronoun(pronoun => [...pronoun, vocab]);
                                return;
                            case 'quality' :
                                setQuality(quality => [...quality, vocab]);
                                return;
                            case 'season' :
                                setSeason(season => [...season, vocab]);
                                return;
                            case 'sightseeing' :
                                setSightSeeing(sightseeing => [...sightseeing, vocab]);
                                return;
                            case 'sino' :
                                setSino(sino => [...sino, vocab]);
                                return;
                            case 'taste' :
                                setTaste(taste => [...taste, vocab]);
                                return;
                            case 'timemodifier' :
                                setTimeModifier(timemodifier => [...timemodifier, vocab]);
                                return;
                            case 'tod' :
                                setTod(tod => [...tod, vocab]);
                                return;
                            case 'transportation' :
                                setTransportation(transportation => [...transportation, vocab]);
                                return;
                            case 'weather' :
                                setWeather(weather => [...weather, vocab]);
                                return;
                                
                        }
                    })
                    }
                  )
            } catch (err) {console.log("Could not fetch Common Phrases"); return}
        }

        const fetchAll = async () => {
            await fetchPrompts();
            await fetchVocab();
            return;
        }

        fetchAll();

    }, [])
    

    return(
        <prompter_prompts_context.Provider value={{sentences, setSentences}}>
            <appearance_context.Provider value={{appearance,setAppearance}}>
                <blank_context.Provider value={{blank,setBlank}}>
                    <clothes_context.Provider value={{clothes, setClothes}}>
                        <color_context.Provider value={{color,setColor}}>
                            <conjugation_context.Provider value={{conjugation, setConjugation}}>
                                <direction_context.Provider value={{direction, setDirection}}>
                                    <dow_context.Provider value={{dow,setDow}}>
                                        <everyTime_context.Provider value={{everytime,setEveryTime}}>
                                            <excuseMe_context.Provider value={{excuseme,setExcuseMe}}>
                                                <familialRelationship_context.Provider value={{familialrelationship,setFamilialRelationship}}>
                                                    <feeling_context.Provider value={{feeling,setFeeling}}>
                                                        <food_context.Provider value={{food,setFood}}>
                                                            <generalTime_context.Provider value={{generaltime,setGeneralTime}}>
                                                                <hobby_context.Provider value={{hobby,setHobby}}>
                                                                    <hour_context.Provider value={{hour,setHour}}>
                                                                        <hourTime_context.Provider value={{hourtime,setHourTime}}>
                                                                            <ing_context.Provider value={{ing,setIng}}>
                                                                                <item_context.Provider value={{item,setItem}}>
                                                                                    <itemTwo_context.Provider value={{itemtwo,setItemTwo}}>
                                                                                        <job_context.Provider value={{job,setJob}}>
                                                                                            <land_context.Provider value={{land,setLand}}>
                                                                                                <locativeAdverb_context.Provider value={{locativeadverb,setLocativeAdverb}}>
                                                                                                    <minute_context.Provider value={{minute,setMinute}}>
                                                                                                        <minuteTime_context.Provider value={{minutetime,setMinuteTime}}>
                                                                                                            <month_context.Provider value={{month,setMonth}}>
                                                                                                                <name_context.Provider value={{name,setName}}>
                                                                                                                    <native_context.Provider value={{native,setNative}}>
                                                                                                                        <personAdjective_context.Provider value={{personadjective,setPersonAdjective}}>
                                                                                                                            <place_context.Provider value={{place,setPlace}}>
                                                                                                                                <preposition_context.Provider value={{preposition,setPreposition}}>
                                                                                                                                    <pronoun_context.Provider value={{pronoun,setPronoun}}>
                                                                                                                                        <quality_context.Provider value={{quality,setQuality}}>
                                                                                                                                            <season_context.Provider value={{season,setSeason}}>
                                                                                                                                                <sightSeeing_context.Provider value={{sightseeing,setSightSeeing}}>
                                                                                                                                                    <sino_context.Provider value={{sino,setSino}}>
                                                                                                                                                        <taste_context.Provider value={{taste,setTaste}}>
                                                                                                                                                            <timeModifier_context.Provider value={{timemodifier,setTimeModifier}}>
                                                                                                                                                                <tod_context.Provider value={{tod,setTod}}>
                                                                                                                                                                    <transportation_context.Provider value={{transportation,setTransportation}}>
                                                                                                                                                                        <weather_context.Provider value={{weather,setWeather}}>
                                                                                                                                                                            <PrompterPage />
                                                                                                                                                                        </weather_context.Provider>
                                                                                                                                                                    </transportation_context.Provider>
                                                                                                                                                                </tod_context.Provider>
                                                                                                                                                            </timeModifier_context.Provider>
                                                                                                                                                        </taste_context.Provider>
                                                                                                                                                    </sino_context.Provider>
                                                                                                                                                </sightSeeing_context.Provider>
                                                                                                                                            </season_context.Provider>
                                                                                                                                        </quality_context.Provider>
                                                                                                                                    </pronoun_context.Provider>
                                                                                                                                </preposition_context.Provider>
                                                                                                                            </place_context.Provider>
                                                                                                                        </personAdjective_context.Provider>
                                                                                                                    </native_context.Provider>
                                                                                                                </name_context.Provider>
                                                                                                            </month_context.Provider>
                                                                                                        </minuteTime_context.Provider>
                                                                                                    </minute_context.Provider>
                                                                                                </locativeAdverb_context.Provider>
                                                                                            </land_context.Provider>
                                                                                        </job_context.Provider>
                                                                                    </itemTwo_context.Provider>
                                                                                </item_context.Provider>
                                                                            </ing_context.Provider>
                                                                        </hourTime_context.Provider>
                                                                    </hour_context.Provider>
                                                                </hobby_context.Provider>
                                                            </generalTime_context.Provider>
                                                        </food_context.Provider>
                                                    </feeling_context.Provider>
                                                </familialRelationship_context.Provider>
                                            </excuseMe_context.Provider>
                                        </everyTime_context.Provider>
                                    </dow_context.Provider>
                                </direction_context.Provider>
                            </conjugation_context.Provider>
                        </color_context.Provider>
                    </clothes_context.Provider>
                </blank_context.Provider>
            </appearance_context.Provider>
        </prompter_prompts_context.Provider>
    );

}