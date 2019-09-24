import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { AuthService } from 'src/app/servicios/auth.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
users: UsuarioModel;
constructor(private servicioAuth: AuthService, private roter: Router) { }

  ngOnInit() {
    this.users = new UsuarioModel();
  }
 aprovatoria(){
    Swal.fire({
      position: 'center',
      type: 'success',
      title: 'Verificado',
      showConfirmButton: false,
      timer: 1500
    }); 
  }
onSubmit(Lf: NgForm) {
  if (Lf.invalid) {
    Swal.fire({
      title: 'Error!',
      text: 'Formulario Invalido',
      type: 'error',
      confirmButtonText: 'Cool'
    });
    return;
  }
  setTimeout(() => {
    Swal.close();
    this.aprovatoria();
}, 5000);
  this.servicioAuth.login(this.users)
  .subscribe((res) => {
    Swal.fire({
      position: 'center',
      type: 'info',
      title: 'Validando Usuario',
      showConfirmButton: false,
      // timer: 1500
    });
    Swal.showLoading();
    this.roter.navigateByUrl('/home');
   
  }, (err) => {
    Swal.fire({
      title: 'Error!',
      text: `${err.error.error.message}`,
      type: 'error',
      confirmButtonText: 'Cool'
    });
    console.log(`el error es ${err.error.error.message}`);
  });
}
}
