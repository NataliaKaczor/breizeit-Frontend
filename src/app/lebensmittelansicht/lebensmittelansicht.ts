import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Backend } from '../shared/backend';
import { Lebensmittel } from '../../interfaces/lebensmittel';
import { RouterLink, ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-lebensmittelansicht',
  imports: [RouterLink],
  templateUrl: './lebensmittelansicht.html',
  styleUrl: './lebensmittelansicht.css',
})
export class Lebensmittelansicht implements OnInit {

  lebensmittel!: Lebensmittel;

  constructor(
    private backend: Backend,
    private route: ActivatedRoute,
    private cdr:ChangeDetectorRef,
    private router:Router
  ) { }

  modalAnzeigen = false;

  async ngOnInit() {

    console.log('1. ngOnInit gestartet');

    const id = this.route.snapshot.paramMap.get('id');

    if (id) {

      this.lebensmittel = await this.backend.getOne(id);
      console.log('folgendes Lebensmittel wurde geklickt:', this.lebensmittel);

    }
    this.cdr.detectChanges();

  }

  modalOeffnen(): void {
    this.modalAnzeigen =true;
  }


  async lebensmittelLoeschen() {
    if (!this.lebensmittel?._id) {
        console.log('Keine Lebensmittel-ID vorhanden.');
        return;
    }

    try {
        await this.backend.deleteOne(this.lebensmittel._id);

        console.log('Lebensmittel erfolgreich gelöscht.');
        this.modalAnzeigen = false;
        this.router.navigate(['/lebensmittelliste']); 

    } catch (error) {
        console.log("Fehler:" + error);
    }
}

lebensmittelBearbeiten(): void {
    this.router.navigate([
        '/lebensmittelform-bearbeiten',
        this.lebensmittel._id
    ]);
}

}
