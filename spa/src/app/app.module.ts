import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Rutas
import { APP_ROUTING } from '../app/app.routes';

// Servicios
import { HeroesService } from './servicios/heroes.service';
// Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/compartidos/navbar/navbar.component';
import { HomeComponent } from './componentes/home/home.component';
import { AboutComponent } from './componentes/about/about.component';
import { HeroesComponent } from './componentes/heroes/heroes.component';
import { HeroeComponent } from './componentes/heroe/heroe.component';
import { BusquedaComponent } from './componentes/busqueda/busqueda.component';
import { HeroeTarjetaComponent } from './componentes/heroe-tarjeta/heroe-tarjeta.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroeComponent,
    BusquedaComponent,
    HeroeTarjetaComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [HeroesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
