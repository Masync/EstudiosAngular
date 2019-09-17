import { Component , OnInit} from '@angular/core';
import { AuthService } from './servicios/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Auth0';
  // * aqui Se importo el servicio que creamos de Auth0 
  // ? se pone private porque solo vamos a necesitar el auth en este nivel (solo en el ts)
  constructor(private auth: AuthService) {}

  // * Aqui se inicializo el servicio de Auth0
  ngOnInit() {
    this.auth.localAuthSetup();
  }
}
