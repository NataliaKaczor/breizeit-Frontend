import { Injectable } from '@angular/core';
import { Lebensmittel } from '../../interfaces/lebensmittel';

@Injectable({
  providedIn: 'root',
})
export class Backend {

  apiURL = 'http://localhost:3000';

  constructor() { }

  async getAll(): Promise<Lebensmittel[]>  
  {
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

}
