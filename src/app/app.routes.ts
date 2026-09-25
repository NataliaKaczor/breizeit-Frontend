import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Lebensmittelliste } from './lebensmittelliste/lebensmittelliste';
import { Lebensmittelansicht } from './lebensmittelansicht/lebensmittelansicht';
import { LebensmittelForm } from './lebensmittel-form/lebensmittel-form';
import { BreiRezepte } from './brei-rezepte/brei-rezepte';

export const routes: Routes = [
    { path: '', component: Home},
    { path: 'lebensmittelliste', component: Lebensmittelliste},
    { path: 'lebensmittelansicht/:id', component: Lebensmittelansicht },
    { path: 'lebensmittelform', component: LebensmittelForm},
    { path: 'lebensmittelform-bearbeiten/:id', component: LebensmittelForm },
    { path: 'brei-rezepte', component: BreiRezepte}
    
];
