import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from '../models/usuario.model';
import { map  } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  UserToken: string;
    private url = 'https://identitytoolkit.googleapis.com/v1/accounts:';
    private apyKey = 'AIzaSyA-6EO9HuMTsL0vgjW23BOekEGNx_3o948';
  // ? Crear Un nuevo usuario
  // https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]

  // ? Login 
  // https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]
  constructor(private http: HttpClient) { this.tokenRead();}

  logOut() {

  }
  login(user: UsuarioModel) {
    const authData = {
      // TODO: el ...user hace el mismo trabajo que declararlas 1 por 1
      // email: user.email,
      // password: user.password,
      ...user,
      returnSecureToken: true
    };
    return this.http.post(
      `${this.url}signInWithPassword?key=${this.apyKey}`,
      authData
    ).pipe(
      map(res => {
        // tslint:disable-next-line: no-string-literal
        this.tokeSave(res['idToken']);
        return res;
      })
      );
  }

  Register(user: UsuarioModel) {
    const authData = {
      // TODO: el ...user hace el mismo trabajo que declararlas 1 por 1
      // email: user.email,
      // password: user.password,
      ...user,
      returnSecureToken: true
    };

    return this.http.post(
      `${this.url}signUp?key=${this.apyKey}`,
      authData
    ).pipe( 
      map(res => {
        // tslint:disable-next-line: no-string-literal
        this.tokeSave(res['idToken']);
        return res;
      }));
  }
  private tokeSave(tokenId: string) {
    this.UserToken = tokenId;
    localStorage.setItem('token', tokenId);
  }

  tokenRead() {
    if ( localStorage.getItem('token') ) {
      this.UserToken = localStorage.getItem('token');
    } else {
      this.UserToken = '';
    }
    return this.UserToken;
  }
}
