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
}
