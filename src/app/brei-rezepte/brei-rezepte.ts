import { Component } from '@angular/core';
import { BreiRezept } from '../../interfaces/brei-rezept';
import { BreiRezeptBackend } from '../shared/breirezept-backend';
import { ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Lebensmittel } from '../../interfaces/lebensmittel';

@Component({
  selector: 'app-brei-rezepte',
  imports: [FormsModule],
  templateUrl: './brei-rezepte.html',
  styleUrl: './brei-rezepte.css',
})
export class BreiRezepte {

  breiRezepte: BreiRezept[] = [];
  breiRezept: BreiRezept = {
    name: '',
    zutaten: [],
    altersempfehlung: '',
    beschreibung: ''
  };

  ausgewaehltesLebensmittel?: Lebensmittel; 
  menge = 0;
  einheit = 'g';

  constructor(
    private breiRezeptBackend: BreiRezeptBackend,
    private cdr: ChangeDetectorRef
  ) { }

  async ngOnInit() {

    this.breiRezepte = await this.breiRezeptBackend.getAll();
    this.cdr.detectChanges();

  }

  zutatHinzufuegen() {

    if (!this.ausgewaehltesLebensmittel) {
        return;
    }

    this.breiRezept.zutaten.push({
        lebensmittel: this.ausgewaehltesLebensmittel,
        menge: this.menge,
        einheit: this.einheit
    });

    this.ausgewaehltesLebensmittel = undefined;
    this.menge = 0;
    this.einheit = 'g';
}

  async onSubmit() {
    await this.breiRezeptBackend.create(this.breiRezept);
  }

}
