import { Lebensmittel } from "./lebensmittel";
export interface BreiRezept {
    _id?: string;
    name: string;
    zutaten: Zutat[];
    altersempfehlung: string;
    beschreibung: string;
}

export interface Zutat {
    lebensmittel: Lebensmittel; 
    menge: number;
    einheit: string;
}