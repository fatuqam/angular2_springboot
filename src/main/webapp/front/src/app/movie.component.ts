import { Component, OnInit } from '@angular/core';
import {SharedService} from './shared.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  //styleUrls: ['./movie.component.css']
  })
export class MovieComponent implements OnInit {
  id_movie :string ="";
  mv_title: string ="";
  mv_rated:string="";
  mv_released:string="";
  mv_director:string="";
  mv_actors:string="";
  mv_plot:string ="";


  constructor(private service:SharedService) { }

  ngOnInit() {

  }
  callMovieService() {
    console.log("-->"+this.id_movie);
    this.service.findMovie(this.id_movie)
       .subscribe(
        result =>{
          this.mv_title =result["Title"];
          this.mv_rated = result["Rated"];
          this.mv_released = result["Released"];
          this.mv_director = result["Director"];
          this.mv_actors = result["Actors"];
          this.mv_plot = result["Plot"];
        },
        error=>{
          console.log("Error. the findMovie result JSON value is as follows:");
          console.log(error);
        }
       );
  }


}
