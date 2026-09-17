import { Component } from '@angular/core';
import { Lebensmittel } from '../../interfaces/lebensmittel';
import { Backend } from '../shared/backend';
@Component({
  selector: 'app-lebensmittel-form',
  imports: [],
  templateUrl: './lebensmittel-form.html',
  styleUrl: './lebensmittel-form.css',
})
export class LebensmittelForm {

  lebensmittel: Lebensmittel = {
      name: '',
      kategorie: 'Obst',
      altersempfehlung: '',
      allergen: 'keines',
      beschreibung: '',
      bild: ''
    };

  constructor( private backend: Backend){} 
  
  onSubmit() {
    this.backend.create(this.lebensmittel).then(() => {
      console.log('Neuer Lebensmittel wurde hinzugefügt', this.lebensmittel);
     
    });
  }
}
