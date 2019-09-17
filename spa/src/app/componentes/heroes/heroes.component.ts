import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/servicios/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  public heroes: any = [];
  constructor(private HEROES_S: HeroesService) { }

  ngOnInit() {
  this.heroes = this.HEROES_S.getHeroes();
  }

}
