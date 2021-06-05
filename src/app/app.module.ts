import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { APP_ROUTES } from './app.routes';
import { BTCComponent } from './btc/btc.component';
import { OilComponent } from './oil/oil.component';

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(APP_ROUTES)
    ],
    declarations: [
        AppComponent,
        BTCComponent,
        OilComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
