import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

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

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ){
    return this.usuarioService.getCurrentUser()
      .pipe(
        map((user: any) => {
          if (!user.emailVerified) {
            this.router.navigateByUrl('/login');
          } else {
            return true;
          }
        }),
        catchError(() => {
          this.router.navigateByUrl('/login');
          return of(null);
        })
      )
  }

}
