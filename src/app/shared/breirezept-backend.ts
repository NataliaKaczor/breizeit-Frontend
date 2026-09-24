import { Injectable } from '@angular/core';
import { BreiRezept } from '../../interfaces/brei-rezept';

@Injectable({
    providedIn: 'root',
})
export class BreiRezeptBackend {

    apiURL = 'http://localhost:3000';

    constructor() { }

    // alle rezepte
    async getAll(): Promise<BreiRezept[]> {

        let response = await fetch(this.apiURL + '/brei-rezepte');
        let breiRezepte = await response.json();

        console.log('Alle Brei-Rezepte erfolgreich geladen: ', breiRezepte);

        return breiRezepte;
    }
    // ein rezept
    async getOne(id: string): Promise<BreiRezept> {

        let response = await fetch(this.apiURL + '/brei-rezepte/' + id);
        let breiRezept = await response.json();

        console.log('Brei-Rezept erfolgreich geladen: ', breiRezept);

        return breiRezept;
    }

    async create(breiRezept: BreiRezept): Promise<BreiRezept> {

        const daten = {
            name: breiRezept.name,
            // MongoDb erwartet nur das Id und nicht das lbM Objekt .. deshalb muss jedes Zutat einzeln umgewandelt werden 
            zutaten: breiRezept.zutaten.map(zutat => ({
                lebensmittel: zutat.lebensmittel._id,
                menge: zutat.menge,
                einheit: zutat.einheit
            })),

            altersempfehlung: breiRezept.altersempfehlung,
            beschreibung: breiRezept.beschreibung

        };

        let response = await fetch(this.apiURL + '/brei-rezepte', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(daten)
        });

        let neuesBreiRezept = await response.json();
        console.log('Neues Brei-Rezept erfolgreich erstellt: ', neuesBreiRezept);

        return neuesBreiRezept;
    }
}
