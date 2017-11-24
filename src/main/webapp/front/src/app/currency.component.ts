import { Component, OnInit } from '@angular/core';
import {SharedService} from './shared.service';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styles: []
})
export class CurrencyComponent implements OnInit {
  id_currency: string ="";
  myresult: any;
  birthday = new Date(1988, 3, 15); // April 15, 1988

  constructor(private service : SharedService) { }

  ngOnInit() {
  }
  callCurrency(){
    this.service.getCurrency (this.id_currency)
         .subscribe(
            result => {this.myresult= JSON.stringify(result);
            },
            error => {
              console.log("Error. The callCurrency result JSON is as follow:");
              console.log(error);
            }
         );
      
    }

}
