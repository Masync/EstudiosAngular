import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/servicios/heroes.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  heroes: any [] = [];
  termino: string;
  constructor(private aRoute: ActivatedRoute, private hero: HeroesService) {
  }

  ngOnInit() {
    this.aRoute.params.subscribe(params => {
      // tslint:disable-next-line: no-string-literal
      this.termino = params['termino'];
      this.heroes = this.hero.buscarHeroes(params['termino']);
      console.log(this.heroes);
      
          });

  }

}
