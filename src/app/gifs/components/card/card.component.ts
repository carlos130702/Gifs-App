import {Component, Input, OnInit} from '@angular/core';
import {Gif} from "../../interface/gifs.interface";

@Component({
  selector: 'gifs-card',
  templateUrl: './card.component.html'
})
export class CardComponent implements OnInit{
@Input() gif!: Gif ;
ngOnInit() {
    if ( !this.gif ) {
      throw new Error('Gif property is required');
    }
}
}
