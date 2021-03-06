import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

// Services
import { UsuarioService } from '../core/services/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private usuarioService: UsuarioService

  ) {

  }

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {

    return true;
    // return (await this.usuarioService.getCurrentUser()).onAuthStateChanged(user => {
    //   if (this.usuarioService.usuario) {
    //     return true;
    //   }
    //   if (user) {
    //     this.usuarioService.getParticipante(user).pipe(
    //       tap(() => {
    //         this.router.navigateByUrl('/dashboard');
    //       })
    //     )
    //   }
    //   return false;
    // }).then(resp => true);
    // return .then(usuario => {
    //   // this.router.navigateByUrl('/dashboard');
    //   console.log('guard',usuario);
    //   return true;
    // }).catch(error => {
    //   return false;
    // })
  }

}
