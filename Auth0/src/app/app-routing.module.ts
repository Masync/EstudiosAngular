import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './co/home/home.component';
import { ProtegidaComponent } from './co/protegida/protegida.component';
import { PreciosComponent } from './co/precios/precios.component';


const routes: Routes = [ 
  {path: 'Home', component: HomeComponent},
  {path: 'Protegida', component: ProtegidaComponent},
  {path: 'Precios', component: PreciosComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'Home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
