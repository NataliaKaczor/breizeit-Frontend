import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Lebensmittelliste } from './lebensmittelliste/lebensmittelliste';
import { Lebensmittelansicht } from './lebensmittelansicht/lebensmittelansicht';
import { LebensmittelForm } from './lebensmittel-form/lebensmittel-form';
import { BabyProfil } from './baby-profil/baby-profil';
import { Ernaehrungstagebuch } from './ernaehrungstagebuch/ernaehrungstagebuch';

export const routes: Routes = [
    { path: '', component: Home},
    { path: 'lebensmittelliste', component: Lebensmittelliste},
    { path: 'lebensmittelansicht', component: Lebensmittelansicht},
    { path: 'lebensmittelform', component: LebensmittelForm},
    { path: 'baby-profil', component: BabyProfil},
    { path: 'ernaehrungstagebuch', component: Ernaehrungstagebuch},
];
