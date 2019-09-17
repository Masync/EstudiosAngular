import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/servicios/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe: any = [];
  constructor(private aRoute: ActivatedRoute, private hero: HeroesService) { 
    this.aRoute.params.subscribe(params => {
// tslint:disable-next-line: no-string-literal
this.heroe = this.hero.getHeroe(params['id']);
    });
  }

  ngOnInit() {
  }

}
