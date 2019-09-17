import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {

 @Input() item: any = {};
 @Input() idx: number;
  constructor(private r: Router) { }

  ngOnInit() {
  }
  verHeroe(){
    this.r.navigate(['/heroe', this.idx]);
    
  }

}
