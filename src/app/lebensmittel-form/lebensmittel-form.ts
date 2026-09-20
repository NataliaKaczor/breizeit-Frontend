import { Component } from '@angular/core';
import { Lebensmittel } from '../../interfaces/lebensmittel';
import { Backend } from '../shared/backend';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-lebensmittel-form',
  imports: [FormsModule],
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

  constructor(private backend: Backend) { }

  ausgewaehltesBild?: File;
  fehlermeldung = '';
  modalAnzeigen = false;
  vorhandenesLebensmittel?: Lebensmittel;

  onBildAusgewaehlt(event: Event) {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length > 0) {
      const datei = input.files[0]; // nur die als erstes ausgewählte datei 
      this.ausgewaehltesBild = datei;

      console.log('Ausgewählte Datei:', datei);
    }
  }
  onSubmit() {

    if (!this.lebensmittel.name) {
      console.log('Bitte einen Namen eingeben.');
      this.fehlermeldung = 'Bitte einen Namen eingeben.';
      return;
    }

    if (!this.lebensmittel.altersempfehlung) {
      console.log('Bitte eine Altersempfehlung eingeben.');
      this.fehlermeldung = 'Bitte eine Altersempfehlung eingeben.';
      return;
    }

    if (!this.ausgewaehltesBild) {
      console.log('Bitte ein Bild auswählen.');
      this.fehlermeldung = 'Bitte ein Bild auswählen.';
      return;
    }

    console.log('Ausgewähltes Bild beim Absenden:', this.ausgewaehltesBild);

    this.backend.create(this.lebensmittel, this.ausgewaehltesBild)
      .then(() => {
        console.log('Neuer Lebensmittel wurde hinzugefügt', this.lebensmittel);
      })
      .catch((error) => {
        console.log(error);
        this.fehlermeldung = error.message;
        this.vorhandenesLebensmittel = error.lebensmittel;
        this.modalAnzeigen = true;
      });
  }
}
