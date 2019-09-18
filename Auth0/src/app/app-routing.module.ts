import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './co/home/home.component';
import { ProtegidaComponent } from './co/protegida/protegida.component';
import { PreciosComponent } from './co/precios/precios.component';
import { CallbackComponent } from './co/callback/callback.component';
import { AuthGGuard } from './servicios/auth-g.guard';

// * Se creo el guard para evitar el ingreso a la ruta Protegida
const routes: Routes = [
  {path: 'Home', component: HomeComponent},
  {path: 'Protegida', component: ProtegidaComponent, canActivate: [AuthGGuard]},
  {path: 'Precios', component: PreciosComponent},
  {path: 'callback', component: CallbackComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'Home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
