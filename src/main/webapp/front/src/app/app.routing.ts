import {Routes,RouterModule} from '@angular/router';
import {CurrencyComponent} from './currency.component';
import {WeatherComponent} from './weather.component';
import {MovieComponent} from './movie.component';

const MAINMENU_ROUTES: Routes = [
  {path: '', redirectTo:'/weather', pathMatch:'full'},
  {path: 'weather', component: WeatherComponent},
  {path:'movie', component:MovieComponent},
  {path:'currency', component:CurrencyComponent}
];
export const AppRouting = RouterModule.forRoot(MAINMENU_ROUTES);

