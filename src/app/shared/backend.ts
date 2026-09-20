import { Injectable } from '@angular/core';
import { Lebensmittel } from '../../interfaces/lebensmittel';

@Injectable({
  providedIn: 'root',
})
export class Backend {

  apiURL = 'http://localhost:3000';

  constructor() { }

  async getAll(): Promise<Lebensmittel[]> {
    let response = await fetch(this.apiURL + '/lebensmittel');
    let lebensmittel = await response.json();

    console.log('Alle Lebensmittel erfolgreich geladen (getAll): ', lebensmittel);

    return lebensmittel;
  }

  async getOne(id: string): Promise<Lebensmittel> {
    let response = await fetch(this.apiURL + '/lebensmittel/' + id);
    let lebensmittel = await response.json();

    console.log(' Lebensmittel erfolgreich geladen  (getOne): ', lebensmittel);

    return lebensmittel;
  }
  
  async create(lebensmittel: Lebensmittel, bild?: File): Promise<Lebensmittel> {
    const formData = new FormData();

    formData.append('name', lebensmittel.name);
    formData.append('kategorie', lebensmittel.kategorie);
    formData.append('altersempfehlung', lebensmittel.altersempfehlung);
    formData.append('allergen', lebensmittel.allergen);
    formData.append('beschreibung', lebensmittel.beschreibung || '');

    if (bild) {
      formData.append('bild', bild);
    }
    console.log('Bild in FormData:', formData.get('bild'));

    let response = await fetch(this.apiURL + '/', {
      method: 'POST',
      body: formData // formData kann text und Dateien uebertragen JSON nur text, zahlen usw.
    });

    if (response.status === 409) {
      throw new Error('Dieses Lebensmittel existiert bereits.');
    }

    let neuesLebensmittel = await response.json();

    console.log('Neues Lebensmittel erfolgreich erstellt:', neuesLebensmittel);

    return neuesLebensmittel;
  }
}
