import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  inscribirUsuario(usuario: any): void {
    console.log('Usuario inscrito:', usuario);
  }
}
