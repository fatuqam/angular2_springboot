import { Injectable } from '@angular/core';
import {Http,Headers,Response} from  '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs';


@Injectable()
export class SharedService {

  weatherURL1 = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22";
  weatherURL2 = "%2C%20";
  weatherURL3 = "%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
  findMovieURL1 = "https://www.omdbapi.com/?t=";
  findMovieURL2 = "&y=&plot=short&r=json";
  currencyURL = "https://api.fixer.io/latest?symbols=";
  totReqsMade:number = 0;
  finalURL: string = "";
   greetingURL:string ="./greeting";
  constructor(private http: Http) { }

  findWeather(city,state){
    this.totReqsMade =this.totReqsMade + 1;
    this.finalURL = this.weatherURL1 +city+this.weatherURL2+state+this.weatherURL3;
    return this.http.get(this.finalURL)
                    .map(response => {

                       return response.json();
                    })
                    .catch(error=>Observable.throw(error.json()));

  }

  findMovie(movie){
    this.totReqsMade = this.totReqsMade +1;

    return this.http.get(this.findMovieURL1+movie+this.findMovieURL2)
    .map(response =>{

      return response.json();
    })
    .catch(error => Observable.throw(error.json));
  }

  getCurrency(currency) {
    this.totReqsMade = this.totReqsMade +1 ;
    return this.http.get(this.currencyURL+currency)
                .map(response => {
                   return response.json();
                })
                .catch(err=>Observable.throw(err.json()));
  }

  greeting(){
   return this.http.get(this.greetingURL)
          .map(response => {
            return response.json();
           })
           .catch(err=>Observable.throw(err.json()));

    }

}
