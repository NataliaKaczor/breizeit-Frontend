import { Component } from '@angular/core';
import { BreiRezept } from '../../interfaces/brei-rezept';
import { BreiRezeptBackend } from '../shared/breirezept-backend';
import { ChangeDetectorRef } from '@angular/core';
@Component({
  selector: 'app-brei-rezepte',
  imports: [],
  templateUrl: './brei-rezepte.html',
  styleUrl: './brei-rezepte.css',
})
export class BreiRezepte {

  breiRezepte: BreiRezept[] = [];

  constructor(
    private breiRezeptBackend: BreiRezeptBackend,
    private cdr: ChangeDetectorRef
  ) { }

  async ngOnInit() {

    this.breiRezepte = await this.breiRezeptBackend.getAll();
    this.cdr.detectChanges();

  }

}
