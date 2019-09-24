import { Component, OnInit } from '@angular/core';
// ? Importacion del usuario model
import { UsuarioModel } from '../../models/usuario.model';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
//  * Aqui se inicializa el usuario Model
users: UsuarioModel;
efecto;
  constructor(private servicioAuth: AuthService) { }

  ngOnInit() {
    // * Aqui se instancia el usuario Model y se instancian los atributos
    this.users = new UsuarioModel();
    // this.users.email = 'Masync@gmail.com';
    this.users.name = 'Masync';
    // this.users.password = '_Masync';

   }

   OnSubmit(registroForm: NgForm) {
     this.efecto = 'animated fadeIn';
     this.servicioAuth.Register(this.users)
     .subscribe(res => {
       console.log(res);

     }, (err) => {
      console.log(`el error es ${err.error.error.message}`);
     });
   }

}
