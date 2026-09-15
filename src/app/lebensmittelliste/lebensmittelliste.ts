import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { Lebensmittel } from '../../interfaces/lebensmittel';
import { Backend } from '../shared/backend';

@Component({
  selector: 'app-lebensmittelliste',
  imports: [CommonModule, RouterLink],
  templateUrl: './lebensmittelliste.html',
  styleUrl: './lebensmittelliste.css',
})
export class Lebensmittelliste implements OnInit {
  lebensmittel: Lebensmittel[] = [];

  constructor(
    private backend: Backend,
    private cdr: ChangeDetectorRef
  ) {}

  async ngOnInit() {

    console.log('1. ngOnInit gestartet');

    this.lebensmittel = await this.backend.getAll();

    console.log('2. Daten wurden gesetzt:', this.lebensmittel);
    console.log('3. Anzahl:', this.lebensmittel.length);

    this.cdr.detectChanges();
}
}



