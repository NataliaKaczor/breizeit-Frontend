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
    private cdr:ChangeDetectorRef
  ) { }

  async ngOnInit() {

    console.log('1. ngOnInit gestartet');

    const id = this.route.snapshot.paramMap.get('id');

    if (id) {

      this.lebensmittel = await this.backend.getOne(id);
      console.log('folgendes Lebensmittel wurde geklickt:', this.lebensmittel);

    }
    this.cdr.detectChanges();

  }
}
