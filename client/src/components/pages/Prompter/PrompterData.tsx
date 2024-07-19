import * as React from 'react';
import PrompterPage from './PrompterPage';

// INTERFACES ===================================

export interface prompter_vocab {
    id: number,
    korean_vocab: string,
    english_vocab: string,
    vocab_type: string,
    isMarked: boolean,
    isQueued: boolean
}

export interface prompter_sentence {
    english: string,
    korean: string,
    uniqueVariables: number
}

interface Prompter_Prompts_Interface {
    sentences: prompter_sentence[],
    setSentences: React.Dispatch<React.SetStateAction<prompter_sentence[]>>;
}


interface Prompter_Appearance_Interface {
    appearance: prompter_vocab[]
    setAppearance: React.Dispatch<React.SetStateAction<prompter_vocab[]>>;
}

interface Prompter_Clothes_Interface {
    clothes: prompter_vocab[]
    setClothes: React.Dispatch<React.SetStateAction<prompter_vocab[]>>;
}

interface Prompter_Conjugation_Interface {
    conjugation: prompter_vocab[]
    setConjugation: React.Dispatch<React.SetStateAction<prompter_vocab[]>>;
}

interface Prompter_Direction_Interface {
    direction: prompter_vocab[]
    setDirection: React.Dispatch<React.SetStateAction<prompter_vocab[]>>;
}

interface Prompter_EveryTime_Interface {
    everytime: prompter_vocab[]
    setEveryTime: React.Dispatch<React.SetStateAction<prompter_vocab[]>>;
}

interface Prompter_ExcuseMe_Interface {
    excuseme: prompter_vocab[]
    setExcuseMe: React.Dispatch<React.SetStateAction<prompter_vocab[]>>;
}

interface Prompter_FamilialRelationship_Interface {
    familialrelationship: prompter_vocab[]
    setFamilialRelationship: React.Dispatch<React.SetStateAction<prompter_vocab[]>>;
}

interface Prompter_Feeling_Interface {
    feeling: prompter_vocab[]
    setFeeling: React.Dispatch<React.SetStateAction<prompter_vocab[]>>;
}

interface Prompter_Food_Interface {
    food: prompter_vocab[]
    setFood: React.Dispatch<React.SetStateAction<prompter_vocab[]>>;
}

interface Prompter_GeneralTime_Interface {
    generaltime: prompter_vocab[]
    setGeneralTime: React.Dispatch<React.SetStateAction<prompter_vocab[]>>;
}

interface Prompter_Hobby_Interface {
    hobby: prompter_vocab[]
    setHobby: React.Dispatch<React.SetStateAction<prompter_vocab[]>>;
}

interface Prompter_Hour_Interface {
    hour: prompter_vocab[]
    setHour: React.Dispatch<React.SetStateAction<prompter_vocab[]>>;
}

interface Prompter_Item_Interface {
    item: prompter_vocab[]
    setItem: React.Dispatch<React.SetStateAction<prompter_vocab[]>>;
}

interface Prompter_Job_Interface {
    job: prompter_vocab[]
    setJob: React.Dispatch<React.SetStateAction<prompter_vocab[]>>;
}

interface Prompter_Land_Interface {
    land: prompter_vocab[]
    setLand: React.Dispatch<React.SetStateAction<prompter_vocab[]>>;
}

interface Prompter_Minute_Interface {
    minute: prompter_vocab[]
    setMinute: React.Dispatch<React.SetStateAction<prompter_vocab[]>>;
}

interface Prompter_Month_Interface {
    month: prompter_vocab[]
    setMonth: React.Dispatch<React.SetStateAction<prompter_vocab[]>>;
}

interface Prompter_Name_Interface {
    name: prompter_vocab[]
    setName: React.Dispatch<React.SetStateAction<prompter_vocab[]>>;
}

interface Prompter_Native_Interface {
    native: prompter_vocab[]
    setNative: React.Dispatch<React.SetStateAction<prompter_vocab[]>>;
}

interface Prompter_Place_Interface {
    place: prompter_vocab[]
    setPlace: React.Dispatch<React.SetStateAction<prompter_vocab[]>>;
}

interface Prompter_Preposition_Interface {
    preposition: prompter_vocab[]
    setPreposition: React.Dispatch<React.SetStateAction<prompter_vocab[]>>;
}

interface Prompter_Season_Interface {
    season: prompter_vocab[]
    setSeason: React.Dispatch<React.SetStateAction<prompter_vocab[]>>;
}

interface Prompter_Sino_Interface {
    sino: prompter_vocab[]
    setSino: React.Dispatch<React.SetStateAction<prompter_vocab[]>>;
}

interface Prompter_Taste_Interface {
    taste: prompter_vocab[]
    setTaste: React.Dispatch<React.SetStateAction<prompter_vocab[]>>;
}

interface Prompter_TimeModifier_Interface {
    timemodifier: prompter_vocab[]
    setTimeModifier: React.Dispatch<React.SetStateAction<prompter_vocab[]>>;
}

interface Prompter_TOD_Interface {
    tod: prompter_vocab[]
    setTod: React.Dispatch<React.SetStateAction<prompter_vocab[]>>;
}

interface Prompter_Transportation_Interface {
    transportation: prompter_vocab[]
    setTransportation: React.Dispatch<React.SetStateAction<prompter_vocab[]>>;
}

interface Prompter_Weather_Interface {
    weather: prompter_vocab[]
    setWeather: React.Dispatch<React.SetStateAction<prompter_vocab[]>>;
}

// DEFAULT STATES ===================================

const prompterPromptsDefaultState = {
    sentences: [],
    setSentences: (arr: prompter_sentence[]) => {}
} as Prompter_Prompts_Interface

const appearanceDefaultState = {
    appearance: [],
    setAppearance: (arr: prompter_vocab[]) => {}
} as Prompter_Appearance_Interface

const clothesDefaultState = {
    clothes: [],
    setClothes: (arr: prompter_vocab[]) => {}
} as Prompter_Clothes_Interface

const conjugationDefaultState = {
    conjugation: [],
    setConjugation: (arr: prompter_vocab[]) => {}
} as Prompter_Conjugation_Interface

const directionDefaultState = {
    direction: [],
    setDirection: (arr: prompter_vocab[]) => {}
} as Prompter_Direction_Interface

const everyTimeDefaultState = {
    everytime: [],
    setEveryTime: (arr: prompter_vocab[]) => {}
} as Prompter_EveryTime_Interface

const excuseMeDefaultState = {
    excuseme: [],
    setExcuseMe: (arr: prompter_vocab[]) => {}
} as Prompter_ExcuseMe_Interface

const familialRelationshipDefaultState = {
    familialrelationship: [],
    setFamilialRelationship: (arr: prompter_vocab[]) => {}
} as Prompter_FamilialRelationship_Interface

const feelingDefaultState = {
    feeling: [],
    setFeeling: (arr: prompter_vocab[]) => {}
} as Prompter_Feeling_Interface

const foodDefaultState = {
    food: [],
    setFood: (arr: prompter_vocab[]) => {}
} as Prompter_Food_Interface

const generalTimeDefaultState = {
    generaltime: [],
    setGeneralTime: (arr: prompter_vocab[]) => {}
} as Prompter_GeneralTime_Interface

const hobbyDefaultState = {
    hobby: [],
    setHobby: (arr: prompter_vocab[]) => {}
} as Prompter_Hobby_Interface

const hourDefaultState = {
    hour: [],
    setHour: (arr: prompter_vocab[]) => {}
} as Prompter_Hour_Interface

const itemDefaultState = {
    item: [],
    setItem: (arr: prompter_vocab[]) => {}
} as Prompter_Item_Interface

const jobDefaultState = {
    job: [],
    setJob: (arr: prompter_vocab[]) => {}
} as Prompter_Job_Interface

const landDefaultState = {
    land: [],
    setLand: (arr: prompter_vocab[]) => {}
} as Prompter_Land_Interface

const minuteDefaultState = {
    minute: [],
    setMinute: (arr: prompter_vocab[]) => {}
} as Prompter_Minute_Interface

const monthDefaultState = {
    month: [],
    setMonth: (arr: prompter_vocab[]) => {}
} as Prompter_Month_Interface

const nameDefaultState = {
    name: [],
    setName: (arr: prompter_vocab[]) => {}
} as Prompter_Name_Interface

const nativeDefaultState = {
    native: [],
    setNative: (arr: prompter_vocab[]) => {}
} as Prompter_Native_Interface

const placeDefaultState = {
    place: [],
    setPlace: (arr: prompter_vocab[]) => {}
} as Prompter_Place_Interface

const prepositionDefaultState = {
    preposition: [],
    setPreposition: (arr: prompter_vocab[]) => {}
} as Prompter_Preposition_Interface

const seasonDefaultState = {
    season: [],
    setSeason: (arr: prompter_vocab[]) => {}
} as Prompter_Season_Interface

const sinoDefaultState = {
    sino: [],
    setSino: (arr: prompter_vocab[]) => {}
} as Prompter_Sino_Interface

const tasteDefaultState = {
    taste: [],
    setTaste: (arr: prompter_vocab[]) => {}
} as Prompter_Taste_Interface

const timeModifierDefaultState = {
    timemodifier: [],
    setTimeModifier: (arr: prompter_vocab[]) => {}
} as Prompter_TimeModifier_Interface

const todDefaultState = {
    tod: [],
    setTod: (arr: prompter_vocab[]) => {}
} as Prompter_TOD_Interface

const transportationDefaultState = {
    transportation: [],
    setTransportation: (arr: prompter_vocab[]) => {}
} as Prompter_Transportation_Interface

const weatherDefaultState = {
    weather: [],
    setWeather: (arr: prompter_vocab[]) => {}
} as Prompter_Weather_Interface

export const prompter_prompts_context = React.createContext<Prompter_Prompts_Interface>(prompterPromptsDefaultState);

export const appearance_vocab_context = React.createContext<Prompter_Appearance_Interface>(appearanceDefaultState);
export const clothes_vocab_context = React.createContext<Prompter_Clothes_Interface>(clothesDefaultState);
export const conjugation_vocab_context = React.createContext<Prompter_Conjugation_Interface>(conjugationDefaultState);
export const direction_vocab_context = React.createContext<Prompter_Direction_Interface>(directionDefaultState);
export const everyTime_vocab_context = React.createContext<Prompter_EveryTime_Interface>(everyTimeDefaultState);
export const excuseMe_vocab_context = React.createContext<Prompter_ExcuseMe_Interface>(excuseMeDefaultState);
export const familialRelationship_vocab_context = React.createContext<Prompter_FamilialRelationship_Interface>(familialRelationshipDefaultState);
export const feeling_vocab_context = React.createContext<Prompter_Feeling_Interface>(feelingDefaultState);
export const food_vocab_context = React.createContext<Prompter_Food_Interface>(foodDefaultState);
export const generalTime_vocab_context = React.createContext<Prompter_GeneralTime_Interface>(generalTimeDefaultState);
export const hobby_vocab_context = React.createContext<Prompter_Hobby_Interface>(hobbyDefaultState);
export const hour_vocab_context = React.createContext<Prompter_Hour_Interface>(hourDefaultState);
export const item_vocab_context = React.createContext<Prompter_Item_Interface>(itemDefaultState);
export const job_vocab_context = React.createContext<Prompter_Job_Interface>(jobDefaultState);
export const land_vocab_context = React.createContext<Prompter_Land_Interface>(landDefaultState);
export const minute_vocab_context = React.createContext<Prompter_Minute_Interface>(minuteDefaultState);
export const month_vocab_context = React.createContext<Prompter_Month_Interface>(monthDefaultState);
export const name_vocab_context = React.createContext<Prompter_Name_Interface>(nameDefaultState);
export const native_vocab_context = React.createContext<Prompter_Native_Interface>(nativeDefaultState);
export const place_vocab_context = React.createContext<Prompter_Place_Interface>(placeDefaultState);
export const preposition_vocab_context = React.createContext<Prompter_Preposition_Interface>(prepositionDefaultState);
export const season_vocab_context = React.createContext<Prompter_Season_Interface>(seasonDefaultState);
export const sino_vocab_context = React.createContext<Prompter_Sino_Interface>(sinoDefaultState);
export const taste_vocab_context = React.createContext<Prompter_Taste_Interface>(tasteDefaultState);
export const timeModifier_vocab_context = React.createContext<Prompter_TimeModifier_Interface>(timeModifierDefaultState);
export const tod_vocab_context = React.createContext<Prompter_TOD_Interface>(todDefaultState);
export const transportation_vocab_context = React.createContext<Prompter_Transportation_Interface>(transportationDefaultState);
export const weather_vocab_context = React.createContext<Prompter_Weather_Interface>(weatherDefaultState);

export default function PrompterData() {

    const [sentences, setSentences] = React.useState<prompter_sentence[]>([]);

    const [appearance,setAppearance] = React.useState<prompter_vocab[]>([]);
    const [clothes,setClothes] = React.useState<prompter_vocab[]>([]);
    const [conjugation,setConjugation] = React.useState<prompter_vocab[]>([]);
    const [direction,setDirection] = React.useState<prompter_vocab[]>([]);
    const [everytime,setEveryTime] = React.useState<prompter_vocab[]>([]);
    const [excuseme,setExcuseMe] = React.useState<prompter_vocab[]>([]);
    const [familialrelationship,setFamilialRelationship] = React.useState<prompter_vocab[]>([]);
    const [feeling,setFeeling] = React.useState<prompter_vocab[]>([]);
    const [food,setFood] = React.useState<prompter_vocab[]>([]);
    const [generaltime,setGeneralTime] = React.useState<prompter_vocab[]>([]);
    const [hobby,setHobby] = React.useState<prompter_vocab[]>([]);
    const [hour,setHour] = React.useState<prompter_vocab[]>([]);
    const [item,setItem] = React.useState<prompter_vocab[]>([]);
    const [job,setJob] = React.useState<prompter_vocab[]>([]);
    const [land,setLand] = React.useState<prompter_vocab[]>([]);
    const [minute,setMinute] = React.useState<prompter_vocab[]>([]);
    const [month,setMonth] = React.useState<prompter_vocab[]>([]);
    const [name,setName] = React.useState<prompter_vocab[]>([]);
    const [native,setNative] = React.useState<prompter_vocab[]>([]);
    const [place,setPlace] = React.useState<prompter_vocab[]>([]);
    const [preposition,setPreposition] = React.useState<prompter_vocab[]>([]);
    const [season,setSeason] = React.useState<prompter_vocab[]>([]);
    const [sino,setSino] = React.useState<prompter_vocab[]>([]);
    const [taste,setTaste] = React.useState<prompter_vocab[]>([]);
    const [timemodifier,setTimeModifier] = React.useState<prompter_vocab[]>([]);
    const [tod,setTod] = React.useState<prompter_vocab[]>([]);
    const [transportation,setTransportation] = React.useState<prompter_vocab[]>([]);
    const [weather,setWeather] = React.useState<prompter_vocab[]>([]);

    React.useEffect(() => {

        const fetchPrompts = async () => {
            try {

                fetch("/kr_prompter_api/prompter/prompter_prompts").then(
                    response => response.json()
                ).then(
                    data => {
                        data.map((sentence, index) => {
                            data[index].isMarked = false;
                            data[index].isQueued = false;
                        })
                        setSentences(data);
                    }
                )

            } catch (err) {console.log("Could not fetch Common Phrases"); return}
        }
        const fetchVocab = async () => {
            try {
                fetch("/kr_prompter_api/prompter/prompter_vocab").then(
                    response => response.json()
                  ).then(
                    data => {
                      data.map((vocab, index) => {
                        
                        let currentType: string = vocab.vocab_type
                        switch(currentType) {
                            case 'appearance' :
                                setAppearance(appearance => [...appearance, vocab]);
                                return;
                            case 'clothes' :
                                setClothes(clothes => [...clothes, vocab]);
                                return;
                            case 'conjugation' :
                                setConjugation(conjugation => [...conjugation, vocab]);
                                return;
                            case 'direction' :
                                setDirection(direction => [...direction, vocab]);
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
                            case 'item' :
                                setItem(item => [...item, vocab]);
                                return;
                            case 'job' :
                                setJob(job => [...job, vocab]);
                                return;
                            case 'land' :
                                setLand(land => [...land, vocab]);
                                return;
                            case 'minute' :
                                setMinute(minute => [...minute, vocab]);
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
                            case 'place' :
                                setPlace(place => [...place, vocab]);
                                return;
                            case 'preposition' :
                                setPreposition(preposition => [...preposition, vocab]);
                                return;
                            case 'season' :
                                setSeason(season => [...season, vocab]);
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
            <appearance_vocab_context.Provider value={{appearance,setAppearance}}>
                <clothes_vocab_context.Provider value={{clothes, setClothes}}>
                    <conjugation_vocab_context.Provider value={{conjugation, setConjugation}}>
                        <direction_vocab_context.Provider value={{direction, setDirection}}>
                            <everyTime_vocab_context.Provider value={{everytime,setEveryTime}}>
                                <excuseMe_vocab_context.Provider value={{excuseme,setExcuseMe}}>
                                    <familialRelationship_vocab_context.Provider value={{familialrelationship,setFamilialRelationship}}>
                                        <feeling_vocab_context.Provider value={{feeling,setFeeling}}>
                                            <food_vocab_context.Provider value={{food,setFood}}>
                                                <generalTime_vocab_context.Provider value={{generaltime,setGeneralTime}}>
                                                    <hobby_vocab_context.Provider value={{hobby,setHobby}}>
                                                        <hour_vocab_context.Provider value={{hour,setHour}}>
                                                            <item_vocab_context.Provider value={{item,setItem}}>
                                                                <job_vocab_context.Provider value={{job,setJob}}>
                                                                    <land_vocab_context.Provider value={{land,setLand}}>
                                                                        <minute_vocab_context.Provider value={{minute,setMinute}}>
                                                                            <month_vocab_context.Provider value={{month,setMonth}}>
                                                                                <name_vocab_context.Provider value={{name,setName}}>
                                                                                    <native_vocab_context.Provider value={{native,setNative}}>
                                                                                        <place_vocab_context.Provider value={{place,setPlace}}>
                                                                                            <preposition_vocab_context.Provider value={{preposition,setPreposition}}>
                                                                                                <season_vocab_context.Provider value={{season,setSeason}}>
                                                                                                    <sino_vocab_context.Provider value={{sino,setSino}}>
                                                                                                        <taste_vocab_context.Provider value={{taste,setTaste}}>
                                                                                                            <timeModifier_vocab_context.Provider value={{timemodifier,setTimeModifier}}>
                                                                                                                <tod_vocab_context.Provider value={{tod,setTod}}>
                                                                                                                    <transportation_vocab_context.Provider value={{transportation,setTransportation}}>
                                                                                                                        <weather_vocab_context.Provider value={{weather,setWeather}}>
                                                                                                                            <PrompterPage />
                                                                                                                        </weather_vocab_context.Provider>
                                                                                                                    </transportation_vocab_context.Provider>
                                                                                                                </tod_vocab_context.Provider>
                                                                                                            </timeModifier_vocab_context.Provider>
                                                                                                        </taste_vocab_context.Provider>
                                                                                                    </sino_vocab_context.Provider>
                                                                                                </season_vocab_context.Provider>
                                                                                            </preposition_vocab_context.Provider>
                                                                                        </place_vocab_context.Provider>
                                                                                    </native_vocab_context.Provider>
                                                                                </name_vocab_context.Provider>
                                                                            </month_vocab_context.Provider>
                                                                        </minute_vocab_context.Provider>
                                                                    </land_vocab_context.Provider>
                                                                </job_vocab_context.Provider>
                                                            </item_vocab_context.Provider>
                                                        </hour_vocab_context.Provider>
                                                    </hobby_vocab_context.Provider>
                                                </generalTime_vocab_context.Provider>
                                            </food_vocab_context.Provider>
                                        </feeling_vocab_context.Provider>
                                    </familialRelationship_vocab_context.Provider>
                                </excuseMe_vocab_context.Provider>
                            </everyTime_vocab_context.Provider>
                        </direction_vocab_context.Provider>
                    </conjugation_vocab_context.Provider>
                </clothes_vocab_context.Provider>
            </appearance_vocab_context.Provider>
        </prompter_prompts_context.Provider>
    );

}