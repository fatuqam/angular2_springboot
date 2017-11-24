import { Component, OnInit } from '@angular/core';
import {SharedService} from './shared.service';


@Component ({
    selector: 'copyright-section',
    templateUrl :'./buttom.component.html'

})
export class ButtomComponent implements OnInit{
  greeting:Greeting;


  constructor(private service:SharedService){}

  ngOnInit() {
     this.service.greeting().subscribe(result=>{
       this.greeting=result;
      });
   }
}
export interface Greeting {
  id:number;
  content:string;
}

