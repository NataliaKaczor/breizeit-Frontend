export interface Lebensmittel {
  _id?: string; // wird automatsich vom DB erstellt; wird später zur Zählung der LB, die ein Baby bereits probiert hat 
  name: string;
  kategorie: "Obst" | "Gemüse" | "Getreide" | "Fleisch" | "Fisch" | "Milchprodukte" | "andere Kategorie";
  altersempfehlung: string; 
  allergen: "keines" | "Milch" | "Ei" | "Nüsse" | "Fisch" | "Gluten";
  vitamine: string[];
  beschreibung?: string;
  bild: string; 
}