import { Component } from '@angular/core';
import { BreiRezept } from '../../interfaces/brei-rezept';
import { BreiRezeptBackend } from '../shared/breirezept-backend';

@Component({
  selector: 'app-brei-rezepte',
  imports: [],
  templateUrl: './brei-rezepte.html',
  styleUrl: './brei-rezepte.css',
})
export class BreiRezepte {

  breiRezepte: BreiRezept[] = [];

  constructor(private breiRezeptBackend: BreiRezeptBackend) { }

  async ngOnInit() {

    this.breiRezepte = await this.breiRezeptBackend.getAll();

  }

}
