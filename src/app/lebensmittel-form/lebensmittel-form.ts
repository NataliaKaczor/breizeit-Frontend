import { Component } from '@angular/core';
import { Lebensmittel } from '../../interfaces/lebensmittel';
import { Backend } from '../shared/backend';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-lebensmittel-form',
  imports: [FormsModule, RouterLink],
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

  constructor(
    private backend: Backend,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ausgewaehltesBild?: File;
  fehlermeldung = '';
  modalAnzeigen = false;
  modalTyp: 'LebensmittelExistiert' | 'LebensmittelNeuErstellt' = 'LebensmittelNeuErstellt';
  vorhandenesLebensmittel?: Lebensmittel;
  bearbeiten = false;


  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.bearbeiten = true;
      this.lebensmittelLaden(id);
    }
  }
  // Vorhandenes Lebensmittel laden 
  async lebensmittelLaden(id: string) {
    try {
      this.lebensmittel = await
        this.backend.getOne(id);
    }
    catch (error) {
      console.log('Fehler beim Laden des Lebensmittels:', error);
    }
  }

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

    if (this.bearbeiten) {
      this.backend.updateOne(this.lebensmittel._id!, this.lebensmittel, this.ausgewaehltesBild)
        .then(() => {

          console.log('Lebensmittel wurde aktualisiert.');
          this.router.navigate(['/lebensmittelansicht', this.lebensmittel._id]);
        })
        .catch((error) => {
          console.log(error);
          this.fehlermeldung = error.message;
        });
    }

    console.log('Ausgewähltes Bild beim Absenden:', this.ausgewaehltesBild);

    this.backend.create(this.lebensmittel, this.ausgewaehltesBild)
      .then(() => {
        console.log('Neuer Lebensmittel wurde hinzugefügt', this.lebensmittel);

        this.modalTyp = 'LebensmittelNeuErstellt';
        this.modalAnzeigen = true;
      })
      .catch((error) => {
        console.log(error);

        this.fehlermeldung = error.message;
        this.vorhandenesLebensmittel = error.lebensmittel;
        this.modalTyp = 'LebensmittelExistiert';
        this.modalAnzeigen = true;
      });

  }
  vorhandenesLebensmittelAnsehen(): void {
    this.router.navigate([
      '/lebensmittelansicht',
      this.vorhandenesLebensmittel!._id
    ]);

  }

  zurLebensmittelliste(): void {
    this.router.navigate(['/lebensmittelliste']);
  }

  // für weitere Lebensmitteleintrag wird das Formular geleert und Modal geschlossen
  weiteresLebensmittelHinzufuegen(): void {
    this.modalAnzeigen = false;

    this.lebensmittel = {
      name: '',
      kategorie: 'Obst',
      altersempfehlung: '',
      allergen: 'keines',
      beschreibung: '',
      bild: ''
    };

    this.ausgewaehltesBild = undefined;
  }

}
