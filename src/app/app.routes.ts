import { Routes } from '@angular/router';
import {OilComponent} from "./oil/oil.component";
import {BTCComponent} from "./btc/btc.component";


export const APP_ROUTES: Routes = [
    { path: '', redirectTo: 'oil', pathMatch: 'full'},
    { path: 'oil', component: OilComponent, pathMatch: 'full'},
    { path: 'btc', component: BTCComponent, pathMatch: 'full'},
    { path: '**', redirectTo: '', pathMatch: 'full'}
];
