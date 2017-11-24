import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu.component';
import { WeatherComponent } from './weather.component';
import { CurrencyComponent } from './currency.component';
import { MovieComponent } from './movie.component';
import { ButtomComponent } from './buttom.component';

import { AppRouting } from './app.routing';
import {SharedService} from './shared.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    WeatherComponent,
    CurrencyComponent,
    MovieComponent,
    ButtomComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouting
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
