import { Component } from '@angular/core';

@Component({
  selector: 'app-clones',
  templateUrl: './clones.component.html',
  styleUrls: ['./clones.component.css']
})
export class ClonesComponent {

public peliculas:Array<any> | undefined;

constructor(){
  this.peliculas = [
    {title:"Spiderman", image:"/assets/images/spiderman.jpg", year: "2001"},
    {title:"Avengers", image:"/assets/images/avengers.jpg", year: "2011"},
    {title:"Ironman", image:"/assets/images/ironman.jpg", year: "1999"},
    {title:"Kaliman", image: "/assets/images/kaliman.jpg", year: "1988"}
  ]
}

}
