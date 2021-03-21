import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {of} from 'rxjs';
import {catchError} from 'rxjs/operators';
// Services
import {UsuarioService} from '../core/services/usuario.service';
import {LoadingService} from '../core/services/loading.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router        : Router,
    private usuarioService: UsuarioService,
    private loadingService: LoadingService
  ) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {

    if (this.usuarioService.usuario) {
      return true;
    }
    this.loadingService.loading.emit(true);
    this.validarToken();
    return this.usuarioService.getParticipante()
      .pipe(
        catchError(() => {
          this.router.navigateByUrl('/login');
          return of(null);
        })
      )
  }

  validarToken() {
    if (!localStorage.getItem('token')) {
      this.router.navigateByUrl('/login');
      this.loadingService.loading.emit(false);
      return false;
    }
  }

}
