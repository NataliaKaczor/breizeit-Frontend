import { Component } from '@angular/core';
import { BreiRezept } from '../../interfaces/brei-rezept';
import { BreiRezeptBackend } from '../shared/breirezept-backend';
import { ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Lebensmittel } from '../../interfaces/lebensmittel';
import { Backend } from '../shared/backend';

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
  lebensmittel: Lebensmittel[] = [];

  ausgewaehltesLebensmittel?: Lebensmittel;
  menge = 0;
  einheit = 'g';

  constructor(
    private breiRezeptBackend: BreiRezeptBackend,
    private cdr: ChangeDetectorRef,
    private backend: Backend
  ) { }

  async ngOnInit() {

    this.breiRezepte = await this.breiRezeptBackend.getAll();
    this.lebensmittel = await this.backend.getAll();
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

  empfehlungenAnzeigen(breiRezept: BreiRezept): string[] {
  const empfehlungen: string[] = [];

  const eisenLebensmittel = breiRezept.zutaten.find(zutat =>
    zutat.lebensmittel.vitamine.includes('Eisen (Nährstoff)')
  );

  const vitaminCLebensmittel = this.lebensmittel.filter(
    lebensmittel => lebensmittel.vitamine.includes('Vitamin C')
  );

  if (eisenLebensmittel && vitaminCLebensmittel.length >= 2) {
    empfehlungen.push(
      `${eisenLebensmittel.lebensmittel.name} enthält Eisen. Du kannst dazu zum Beispiel ${vitaminCLebensmittel[0].name} oder ${vitaminCLebensmittel[1].name} kombinieren, da Vitamin C die Eisenaufnahme unterstützen kann.`
    );
  }

  return empfehlungen;
}

  async onSubmit() {
  try {
    await this.breiRezeptBackend.create(this.breiRezept);

    this.breiRezepte = await this.breiRezeptBackend.getAll();

    this.breiRezept = {
      name: '',
      zutaten: [],
      altersempfehlung: '',
      beschreibung: ''
    };

    this.ausgewaehltesLebensmittel = undefined;
    this.menge = 0;
    this.einheit = 'g';

    this.cdr.detectChanges()

    console.log('Brei-Rezept erfolgreich hinzugefügt:', this.breiRezept);

  } catch (error) {
    console.log('Fehler beim Hinzufügen des Brei-Rezepts:', error);
  }
}

}
